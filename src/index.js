import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, IssuePanel, useProductContext, useState } from "@forge/ui";

const fetchCommentsForIssue = async (issueId, accessToken) => {
  const res = await api
    .fetch(`https://api.atlassian.com/ex/jira/${issueId}/rest/api/3/issue/${issueId}/comment`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

  if (res.status !== 200) {
    throw new Error(`Failed to fetch comments for issue ${issueId}`);
  }

  const data = await res.json();
  return data.comments;
};

const App = () => {
  const context = useProductContext();
  const [accessToken] = useState(context.platformContext.token.accessToken);
  const [comments] = useState(async () => await fetchCommentsForIssue(context.platformContext.issueKey, accessToken));

  console.log(`Number of comments on this issue: ${comments.length}`);

  return (
    <Fragment>
      <Text>Hello world!</Text>
      <Text>
        Number of comments on this issue: {comments.length}
      </Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);

