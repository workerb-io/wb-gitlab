import { decodeApiResponse, handleErrors } from "../../../../utils/helper";
import { getAllPipelines } from "../../../../utils/api";

export default () => {
  if (options?.repos) {
    const { id: projectId } = options.repos;
    const response = getAllPipelines(projectId);
    const result = decodeApiResponse(response);

    if (result.status >= 400) {
      handleErrors(result.status, result.response.message);
      return;
    }

    const pipelines = result.response.map(
      ({ web_url, id }: { web_url: string; id: number }) => ({
        id,
        name: `Pipeline: #${id}`,
        html_url: web_url,
      })
    );

    // eslint-disable-next-line consistent-return
    return JSON.stringify({
      add: pipelines,
    });
  }
};
