import { removeProject } from "../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../utils/helper";

if (options.repos) {
  const { id } = options.repos;

  const response = removeProject(id);
  const result = decodeApiResponse(response);

  if (result.status >= 400) {
    handleErrors(
      result.status,
      result.response.message ? result.response.message : result.response.error
    );
  } else {
    notify("Project Deleted", "success", 3000);
    open("https://gitlab.com");
    reIndex(["gitlab", "projects"]);
  }
}
