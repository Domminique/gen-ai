# Masterika

## Inspiration
Most software projects fail or do not launch on time because the team started trashing very later-on in the project phase instead of doing it earlier on, this has has affected our own software development process at our start-up , we are inspired by the new AI tools now available to help  monitor the progress of each task and story in real-time, providing automated updates to the team and stakeholders. We thought, "If only we have a solution to identify bottlenecks and suggest actions to overcome them, it would be really nice", so we build **scrumasterika**  
## What it does
1. **Automated Sprint Planning:** The app uses natural language processing to analyze user stories and automatically suggests sprint planning, including story points and assignment of tasks to team members.

2. **Sprint Progress Monitoring:** The virtual Scrum Master monitors the progress of each task and story in real-time, providing automated updates to the team and stakeholders. It can identify bottlenecks and suggest actions to overcome them.

3. **Predictive Analytics:** The AI engine uses historical data to predict sprint completion dates and helps in identifying potential delays in advance. It can also provide insights into which user stories are most likely to be completed in the sprint.

4. **Automated Retrospectives:** After the sprint, the app conducts automated retrospectives based on team member input and historical data. It identifies areas of improvement and suggests action items for the next sprint.

5. **Smart Notifications:** The virtual Scrum Master sends notifications and reminders to team members for stand-up meetings, sprint planning, and other Agile ceremonies.

**How AI is Used:**
The AI model, powered by a custom-trained machine learning algorithm, understands user story descriptions, analyzes historical project data, and uses predictive analytics to assist with sprint planning and monitoring. It also uses natural language processing to communicate with team members effectively.

**Atlassian Forge Integration:**
The app integrates seamlessly with Atlassian's Jira using the Forge platform to access and update user data, sprint details, and project information.

**Potential Impact:**
The AI-Driven Agile Scrum Master aims to significantly improve the developer experience by reducing manual effort, improving sprint planning, and enhancing collaboration. It helps teams deliver high-quality software more efficiently and consistently.
## How we built it
1. **Project Setup:**
   - We created a new GCP project and set up billing.
The App was built using The Forge CLI that made it very easy to hit the ground running, we set up our Linux development environment which required setting up docker , nvm and the latest verssion of Node.Js, we then set up the env variables required by Forge and used react to help us accelerate the work .

2. **Data Ingestion:**
   - Data from Atlassian's Jira was ingested into GCP using the Jira REST API , since we leverage Generative AI with MongoDB Atlas and BigQuery, we were moving subsets of operational MongoDB Atlas data into BigQuery, creating machine learning models in BigQuery ML and using Generative AI models to perform natural language tasks.

3. **Data Storage:**
   - We stored the ingested data in Google Cloud Platform on a  Mongo DB Atlas cluster  then we set up a CDC Job that subscribes to change stream in MongoDB that track changes in our database in one collection, basically events that happen in our database

We subscribe to these events in DataFlow CDC job, so that when we reaceive a change we can ETL it , transform  in a meaninful way, like flatten fileds, remove some arrays, remove fileds we don't care about and store the data in a BiqQuerry table.

4. **Machine Learning Model Development:**
   - Develop a custom machine learning model using BigQuery ML, We then trained the model on historical data to understand relationships between user stories, team dynamics, and sprint outcomes followed by deploying our model in Vertex AI for a REST endpoint.

5. **Natural Language Processing (NLP):**
   - Implemented NLP components for understanding and analyzing user stories. Google Cloud Natural Language API was useful tool for this purpose.

6. **Predictive Analytics:**
   - We developed a predictive analytics module that takes into account historical data and sprint progress to predict sprint outcomes and detect potential delays.

7. **Integration with Jira:**
   - Utilized GCP's secure authentication methods to integrate with Jira. This involved creating a custom connector and utilizing Jira's REST API.

8. **Real-time Monitoring:**
   - We implemented real-time monitoring by periodically querying Jira for sprint status updates. We used Cloud Pub/Sub to trigger updates to the AI model and issue notifications to team members.

9. **Smart Notifications:**
   - We created a notification system that sends alerts and reminders to team members. We used Google Cloud Functions to send notifications via email and chat


10. **Security and Privacy:**
    - Ensured that the application adheres to security best practices. Used Google Cloud Identity and Access Management (IAM) to control access to resources and data.

11. **Responsible AI Practices:**
    - We implemented data anonymization and followed ethical AI practices to ensure responsible AI implementation. Documented these practices for the Codegeist Unleashed hackathon in a story telling blog on medium.

12. **Documentation and Storytelling:**
    - Created comprehensive documentation explaining how your application uses AI and GCP. This was  important for the storytelling prize.

## Challenges we ran into
**Time was a factor** , My team-mate Christine and I are both professionals and working full-time and in different location .I live in the city while she is currently in the country side, so finding time to Google meet  for daily stand-was really hard.
## Accomplishments that we're proud of
We formed a tight bond while working and managed to build an awesome app and write a compelling story to the community on how we built it.
## What we learned
We learnt to call a Jira API and  how to make API calls to the Jira REST API, this was intutive especially using tunnels on  the CLI tool.
## What's next for Scrum Masterika

1. **Deployment and Scalability:**
    - Deploy our application on Google Kubernetes Engine (GKE) for scalability. This will allow our application to handle a growing number of users and projects.

2. **Monitoring and Logging:**
    - Set up monitoring and logging using Google Cloud Monitoring and Logging. This will help us track the performance of your application and troubleshoot issues.
3. **Testing and Validation:**
    - Thoroughly test our application with real-world data and scenarios to validate its performance.


This project contains a Forge app written in Javascript that displays `Hello World!` in a Jira issue panel. 

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.

## Requirements

See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Install top-level dependencies:
```
npm install
```

- Install dependencies inside of the `static/hello-world` directory:
```
npm install
```

- Modify your app by editing the files in `static/hello-world/src/`.

- Build your app (inside of the `static/hello-world` directory):
```
npm run build
```

- Deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
