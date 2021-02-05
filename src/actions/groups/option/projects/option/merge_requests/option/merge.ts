// @description Merge the merge request
import { mergeMR } from '../../../../../../../utils/api';
import { GROUPS, MERGE_REQUESTS, PROJECTS } from '../../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper';
import { GroupOptions, MergeRequestOptions, ProjectOptions } from '../../../../../../../utils/interfaces';

if (options.projects && options.merge_requests) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, name: projectName } = options.projects as ProjectOptions;
	const { state: mrState, html_url: mrUrl, id: mrId } = options.merge_requests as MergeRequestOptions;

	if (mrState === 'closed' || mrState === 'merged') {
		notify('This merged request is already merged', 'error', 3000);
	} else {
		const response = mergeMR(projectId, mrId);
		const result = decodeApiResponse(response);

		if (result.status >= 400) {
			open(mrUrl)
			if (result.status == 405 || result.status == 406) {
				handleErrors(result.status, 'Branch cannot be merged');
			} else {
				handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
			}
		} else {
			notify('Request Merged', 'success', 3000);
			reIndex([GROUPS, groupName, PROJECTS, projectName, MERGE_REQUESTS]);
		}
	}
}
