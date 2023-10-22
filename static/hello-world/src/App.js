

import React, { useCallback,useState } from 'react';

import ButtonGroup from '@atlaskit/button/button-group';
import Button from '@atlaskit/button/standard-button';
import { Checkbox } from '@atlaskit/checkbox';
import { RadioGroup } from '@atlaskit/radio';
import Select, { OptionType, ValueType } from '@atlaskit/select';
import Textfield from '@atlaskit/textfield';
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from '@atlaskit/modal-dialog';
import Form, {
  Field,
  FormFooter,
  FormHeader,
  FormSection,
  RequiredAsterisk,
} from '@atlaskit/form';

const FormLayoutExample = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [shouldScrollInViewport, setShouldScrollInViewport] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
    const closeModal = useCallback(() => setIsOpen(false), [setIsOpen]);

    const setShouldScrollInViewportAndOpen = useCallback(
      (shouldScrollInViewport) => {
        setShouldScrollInViewport(shouldScrollInViewport);
        requestAnimationFrame(() => setIsOpen(true));
      },
      [setShouldScrollInViewport],
    );
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // const closeModal = () => {
    //   setIsModalOpen(false);
    // };

  return (
    <div
      style={{
        display: 'flex',
        width: '400px',
        margin: '0 auto',
        minHeight: '60vh',
        flexDirection: 'column',
      }}
    >
      <Form onSubmit={openModal}>
        {({ formProps }) => (
          <form
            {...formProps}
            action="//httpbin.org/get"
            method="GET"
            target="submitFrame"
            name="create-repo"
          >
            <FormHeader title="Predict sprint completion dates">
              <p aria-hidden="true">
              Helps in identifying potential delays in advance <RequiredAsterisk />
              </p>
            </FormHeader>

            <FormSection>
              <Field
                label="Tools"
                name="owner"
                id="owner"
                defaultValue={{
                  label: 'Git',
                  value: 'Git',
                }}
              >
                {({ fieldProps: { id, ...rest } }) => (
                  <Select
                    id={`${id}-select`}
                    isSearchable={false}
                    options={[
                      { label: 'Git', value: 'Git' },
                      { label: 'CI/CD pipelines', value: 'scurtis' },
                      { label: 'Third-party services or APIs,', value: 'mg' },
                      { label: 'Project management ', value: 'clee' },
                    ]}
                    {...rest}
                  />
                )}
              </Field>

              <Field
                aria-required={true}
                name="project"
                id="project"
                label="Cycle Time"
                isRequired
              >
                {({ fieldProps: { id, ...rest } }) => (
                  <Select
                    id={`${id}-select`}
                    options={[
                      { label: 'One Week', value: 'atlaskit' },
                      { label: 'Two Weeks', value: 'bitbucket' },
                      { label: 'Three Weeks', value: 'confluence' },
                      { label: 'Four Weeks', value: 'jira' },
                    ]}
                    placeholder="Choose a project&hellip;"
                    {...rest}
                  />
                )}
              </Field>
              <Field name="repo-names" label="User Story" defaultValue="">
                {({ fieldProps }) => <Textfield {...fieldProps} />}
              </Field>
              <Field name="repo-name" label="Impediments" defaultValue="">
                {({ fieldProps }) => <Textfield {...fieldProps} />}
              </Field>

              <Field name="access-level" label="Team Members Availability">
                {({ fieldProps: { value, ...others } }) => (
                  <Checkbox
                    label="Remote work"
                    isChecked={!!value}
                    {...others}
                  />
                )}
              </Field>
              <Field name="color" label="Infrastructure">
                {({ fieldProps: { value, ...others } }) => (
                  <RadioGroup
                    options={[
                      { name: 'color', value: 'red', label: 'Cloud' },
                      {
                        name: 'color',
                        value: 'blue',
                        label: 'Hybrid',
                      },
                      { name: 'color', value: 'yellow', label: 'On Premise' },
                      
                    ]}
                    value={value}
                    {...others}
                  />
                )}
              </Field>
              <Field
                name="include-readme"
                id="include-readme"
                label="Development Environment"
                defaultValue={{ label: 'No code', value: 'no' }}
              >
                {({ fieldProps: { id, ...rest } }) => (
                  <Select
                    id={`${id}-select`}
                    isSearchable={false}
                    options={[
                      { label: 'No code', value: 'no' },
                      {
                        label: 'Low code',
                        value: 'yes-with-template',
                      },
                      {
                        label: 'Full code',
                        value: 'yes-with-tutorial',
                      },
                    ]}
                    {...rest}
                  />
                )}
              </Field>
            </FormSection>
            <FormFooter>
            <ButtonGroup appearance="primary">
        <Button onClick={() => setShouldScrollInViewportAndOpen(false)}>
          Get Prediction and Prescription
        </Button>
        
      </ButtonGroup>
             
            </FormFooter>
          </form>
        )}
      </Form>

      {/* Create a modal dialog */}
      <ModalTransition>
        {isOpen && (
          <Modal
            onClose={closeModal}
            shouldScrollInViewport={shouldScrollInViewport}
            height={600}
          >
            <ModalHeader>
              <ModalTitle>The predicted sprint completion date is 14 days.</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <h3>Identifying Potential Delays</h3>
              <p>
              The model flags the User Story as a potential delay because it took 4 days to complete in the previous sprint. This can be due to its complexity or dependencies.
The model also notices that User Story 5 tends to take longer in previous sprints, so it's marked as a potential risk for delays.
              </p>

              <h3>Insights into User Stories</h3>

              <p>
              User Story 1 is consistently completed quickly, indicating it's a straightforward task. It's likely to be completed in the next sprint.
User Story 2 is slightly more complex but is consistently completed within the sprint, so it's expected to be finished.
User Story 4 has been completed efficiently, suggesting it's a low-risk item for delays.
User Story 3 and User Story 5 are both flagged as potential risks. User Story 3 due to its past delays and User Story 5 due to its consistent longer completion time
              </p>

              <h3>Explainable AI</h3>

              <p>
              These predictions and insights are based on historical data, team performance, and the absence of external factors impacting the sprint. The model can help teams plan sprints more effectively, allocate resources, and proactively address potential delays. Keep in mind that real-world scenarios can be more complex, and continuous model refinement is essential for accurate predictions.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button appearance="primary" onClick={closeModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </ModalTransition>
    </div>
  );
};

export default FormLayoutExample;