/* eslint-disable consistent-return */
import { getAllProjects, getUserInfo } from "../../utils/api";
import { decodeApiResponse, handleErrors } from "../../utils/helper";

export default () => {
  const userData = getUserInfo();
  const { response: user } = decodeApiResponse(userData);

  const response = getAllProjects();
  const result = decodeApiResponse(response);

  if (result.status >= 400) {
    handleErrors(result.status, result.response.message);
    return;
  }

  const projects = result.response.map((project: any) => ({
    name: project.name,
    html_url: project.web_url,
    id: project.id,
  }));

  return JSON.stringify({
    add: projects,
  });
};
