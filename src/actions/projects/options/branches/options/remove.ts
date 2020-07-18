import { removeBranch } from "../../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../../utils/helper";

if (options?.projects && options.branches) {
  const { id, html_url } = options.projects;
  const { name } = options.branches;

  const response = removeBranch(id, name);
  const result = decodeApiResponse(response);

  if (!(result.status >= 200 && result.status <= 299)) {
    handleErrors(
      result.status,
      result.response.message ? result.response.message : result.response.error
    );
  } else {
    notify("Branch removed", "success", 300);
    open(html_url);
  }
}
