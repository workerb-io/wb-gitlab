// @description Delete all merged branches
import { deleteMergedBranches } from '../../../../../../utils/api';
import { BRANCHES, GROUPS, PROJECTS } from '../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper';
import { GroupOptions, ProjectOptions } from '../../../../../../utils/interfaces';

if (options?.projects) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, name: projectName } = options.projects as ProjectOptions;

	const response = deleteMergedBranches(projectId);
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify('Branch removed', 'success', 300);
		reIndex([GROUPS, groupName, PROJECTS, projectName, BRANCHES]);
	}
}
