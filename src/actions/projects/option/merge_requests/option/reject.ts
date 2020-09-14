// eslint-disable-next-line camelcase
import { deleteMR } from "../../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../../utils/helper";

if (options?.projects && options?.merge_requests) {
  const { id: projectId, html_url, name: projectName } = options.projects;
  const { id } = options.merge_requests;

  const response = deleteMR(projectId, id);
  const result = decodeApiResponse(response);

  if (!(result.status >= 200 && result.status <= 299)) {
    handleErrors(result.status, result.response.message);
  } else {
    notify("Merge Request Deleted", "success", 3000);
    open(html_url);
    reIndex(["gitlab", "projects", projectName, "merge_requests"]);
  }
}
