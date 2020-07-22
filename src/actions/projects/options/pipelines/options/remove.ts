import { deletePipeline } from "../../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../../utils/helper";

if (options?.projects && options?.pipelines) {
  const { id: projectId, html_url } = options.projects;
  const { id: pipelineId } = options.pipelines;

  const ref = args.filter(Boolean).join(' ').trim();

  const response = deletePipeline(projectId, pipelineId);

  const result = decodeApiResponse(response);

  if (!(result.status >= 200 && result.status <= 299)) {
    handleErrors(
      result.status,
      result.response.message ? result.response.message : result.response.error
    );
  } else {
    notify("Pipeline Removed", "success", 3000);
    open(`${html_url}/-/pipelines`);
  }
}
