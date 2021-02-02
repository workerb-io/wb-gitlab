// eslint-disable-next-line camelcase
// @description Reject the merge request
import { deleteMR } from '../../../../../../../utils/api';
import { GROUPS, MERGE_REQUESTS, PROJECTS } from '../../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper';
import { GroupOptions, MergeRequestOptions, ProjectOptions } from '../../../../../../../utils/interfaces';

if (options?.projects && options?.merge_requests) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, html_url: projectUrl, name: projectName } = options.projects as ProjectOptions;
	const { id: mrId } = options.merge_requests as MergeRequestOptions;

	const response = deleteMR(projectId, mrId);
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		open(projectUrl);
		handleErrors(result.status, result.response.message);
	} else {
		notify('Merge Request Deleted', 'success', 3000);
		reIndex([GROUPS, groupName, PROJECTS, projectName, MERGE_REQUESTS]);
	}
}
