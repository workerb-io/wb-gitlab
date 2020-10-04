// eslint-disable-next-line camelcase
import { deleteIssue } from "../../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../../utils/helper";

if (options?.repos && options?.issues) {
  // eslint-disable-next-line camelcase
  const { id: projectId, html_url, name: projectName } = options.projects;
  const { id } = options.issues;

  const response = deleteIssue(projectId, id);
  const result = decodeApiResponse(response);

  if (!(result.status >= 200 && result.status <= 299)) {
    handleErrors(result.status, result.response.message);
  } else {
    notify("Issue Deleted", "success", 3000);
    open(`${html_url}/-/issues`);
    reIndex(["gitlab", "projects", projectName, "issues"]);
  }
}
