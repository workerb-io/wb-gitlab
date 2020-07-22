import { removeProject } from "../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../utils/helper";

if (options.projects) {
  const { id } = options.projects;

  const response = removeProject(id);
  const result = decodeApiResponse(response);

  if (!(result.status >= 200 && result.status <= 299)) {
    handleErrors(
      result.status,
      result.response.message ? result.response.message : result.response.error
    );
  } else {
    notify("Project Deleted", "success", 3000);
    open('https://gitlab.com');
  }
}
