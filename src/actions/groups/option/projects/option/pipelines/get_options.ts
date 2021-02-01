// @description Get all the pipelines and its actions
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper';
import { getAllPipelines } from '../../../../../../utils/api';
import { GitlabPipelineResponse, PipelineOptions, ProjectOptions } from '../../../../../../utils/interfaces';

function parseISOString(s: string) {
	var b = s.split(/\D+/)
	return new Date(
		Date.UTC(Number(b[0]), Number(b[1]) - 1, Number(b[2]), Number(b[3]), Number(b[4]), Number(b[5]), Number(b[6]))
	).toUTCString()
}

export default () => {
	if (options?.projects) {
		const { id: projectId } = options.projects as ProjectOptions;
		const response = getAllPipelines(projectId);
		const result = decodeApiResponse(response);

		if (result.status >= 400) {
			return {};
		}

		const pipelines: Array<PipelineOptions> = result.response.map((pipeline: GitlabPipelineResponse) => {
			const pipelineInfo: PipelineOptions = {
				id: pipeline.id,
				name: `Pipeline: #${pipeline.id}`,
				html_url: pipeline.web_url,
				description: `Created on ${parseISOString(pipeline.created_at)}. Status: ${pipeline.status}`
			};
			return pipelineInfo;
		});

		// eslint-disable-next-line consistent-return
		return JSON.stringify({
			add: pipelines
		});
	}

	return {};
}
