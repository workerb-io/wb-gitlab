/* eslint-disable consistent-return */
import { getAllProjects, getUserInfo } from "../../utils/api";
import { currentUser } from "../../utils/constants";
import { decodeApiResponse, handleErrors } from "../../utils/helper";

export default () => {
  if (!("id" in currentUser.user)) {
    const result = getUserInfo();
    const { response } = decodeApiResponse(result);

    currentUser.setUser({
      id: response.id,
      name: response.name,
      email: response.email,
    });
  }

  const { user } = currentUser;

  const response = getAllProjects(user.id);
  const result = decodeApiResponse(response);

  if (!(result.status >= 200 && result.status <= 299)) {
    handleErrors(result.status, result.response.message);
    return;
  }

  return JSON.stringify(
    result.response.map((project: any) => ({
      name: project.name,
      html_url: project.web_url,
      id: project.id,
    }))
  );
};
