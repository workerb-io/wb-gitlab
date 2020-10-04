/* eslint-disable consistent-return */
import { listAllBranches } from "../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../utils/helper";

export default () => {
  if (options?.repos) {
    const { id } = options.repos;

    const response = listAllBranches(id);
    const result = decodeApiResponse(response);

    if (!(result.status >= 200 && result.status <= 299)) {
      handleErrors(result.status, result.response.message);
      return;
    }

    const branches = result.response.map(
      (branch: { name: string; web_url: string }) => ({
        name: branch.name,
        html_url: branch.web_url,
      })
    );

    return JSON.stringify({
      add: branches,
    });
  }
};
