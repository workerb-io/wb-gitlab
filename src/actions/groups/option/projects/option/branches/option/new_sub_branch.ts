// @description Create New sub branch from current branch
import { createNewBranch } from '../../../../../../../utils/api';
import { BRANCHES, GITLAB, GROUPS, PROJECTS } from '../../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper';
import { BranchOptions, GroupOptions, ProjectOptions } from '../../../../../../../utils/interfaces';

if (options?.projects) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, name: projectName } = options.projects as ProjectOptions;
	const { name: targetBranchName } = options.branches as BranchOptions;

	let branchName = args.filter(Boolean).join(' ');

	if (!branchName) {
		branchName = prompt('Enter branch name');
	}
	const response = createNewBranch(projectId, {
		branch: branchName,
		ref: targetBranchName
	});
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message);
	} else {
		notify('Branch Created', 'success', 3000);
		open(result.response.web_url);
		reIndex([GITLAB, GROUPS, groupName, PROJECTS, projectName, BRANCHES]);
	}
}
