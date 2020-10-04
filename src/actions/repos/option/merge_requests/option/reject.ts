// eslint-disable-next-line camelcase
import { deleteMR } from "../../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../../utils/helper";

if (options?.repos && options?.merge_requests) {
  const { id: projectId, html_url, name: projectName } = options.repos;
  const { id } = options.merge_requests;

  const response = deleteMR(projectId, id);
  const result = decodeApiResponse(response);

  if (result.status >= 400) {
    handleErrors(result.status, result.response.message);
  } else {
    notify("Merge Request Deleted", "success", 3000);
    open(html_url);
    reIndex(["gitlab", "repos", projectName, "merge_requests"]);
  }
}
