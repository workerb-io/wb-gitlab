import { mergeMR } from "../../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../../utils/helper";

if (options.projects && options.merge_requests) {
  const { id: projectId, name: projectName } = options.projects;
  const { state, id } = options.merge_requests;

  if (state === "closed" || state === "merged") {
    notify("This merged request is already merged", "error", 3000);
  } else {
    const response = mergeMR(projectId, id);
    const result = decodeApiResponse(response);

    if (!(result.status >= 200 && result.status <= 299)) {
      handleErrors(
        result.status,
        result.response.message
          ? result.response.message
          : result.response.error
      );
    } else {
      notify("Request Merged", "success", 3000);
      open(result.response.web_url);
      reIndex(["gitlab", "projects", projectName, "merge_requests"]);
    }
  }
}