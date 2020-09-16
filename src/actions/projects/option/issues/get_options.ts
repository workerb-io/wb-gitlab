import { getAllIssuesList } from "../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../utils/helper";

// eslint-disable-next-line func-names
export default function () {
  if (options?.projects) {
    const { id } = options.projects;
    const response = getAllIssuesList(id);
    const result = decodeApiResponse(response);

    if (!(result.status >= 200 && result.status <= 299)) {
      handleErrors(result.status, result.response.message);
    }

    const issues = result.response.map((mr: any) => ({
      name: mr.title,
      html_url: mr.web_url,
      id: mr.iid,
      state: mr.state,
    }));

    return JSON.stringify({
      add: issues,
    });
  }
  return [];
}