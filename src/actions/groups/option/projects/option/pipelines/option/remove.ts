// @description Remove a pipeline
import { deletePipeline } from '../../../../../../../utils/api';
import { GITLAB, GROUPS, PIPELINES, PROJECTS } from '../../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper';
import { GroupOptions, PipelineOptions, ProjectOptions } from '../../../../../../../utils/interfaces';

if (options?.projects && options?.pipelines) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, html_url, name: projectName } = options.projects as ProjectOptions;
	const { id: pipelineId } = options.pipelines as PipelineOptions;

	const response = deletePipeline(projectId, pipelineId);

	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify('Pipeline Removed', 'success', 3000);
		reIndex([GITLAB, GROUPS, groupName, PROJECTS, projectName, PIPELINES]);
	}
}
