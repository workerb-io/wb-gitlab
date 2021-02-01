// @description Create a new pipeline
import { createNewPipeline } from '../../../../../../utils/api';
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper';
import { GroupOptions, ProjectOptions } from '../../../../../../utils/interfaces';

if (options?.projects) {
	const { id: projectId } = options.projects as ProjectOptions;

	const ref = args.filter(Boolean).join(' ').trim();

	const response = createNewPipeline(projectId, {
		ref: ref || 'master',
	});

	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify('Pipeline Created', 'success', 3000);
		open(result.response.web_url);
	}
}
