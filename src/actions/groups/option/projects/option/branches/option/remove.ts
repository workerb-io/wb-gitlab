// @description Remove the branch
import { removeBranch } from '../../../../../../../utils/api';
import { BRANCHES, GROUPS, PROJECTS } from '../../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper';
import { BranchOptions, GroupOptions, ProjectOptions } from '../../../../../../../utils/interfaces';

if (options?.projects && options.branches) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, html_url: projectUrl, name: projectName } = options.projects as ProjectOptions;
	const { name: branchName } = options.branches as BranchOptions;

	const response = removeBranch(projectId, branchName);
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify('Branch removed', 'success', 3000);
		open(projectUrl);
		reIndex([GROUPS, groupName, PROJECTS, projectName, BRANCHES]);
	}
}
