// @description Creates a new merge request from this branch
import { createNewMR } from '../../../../../../../utils/api';
import { BRANCHES, GROUPS, PROJECTS } from '../../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper';
import { BranchOptions, GroupOptions, ProjectOptions } from '../../../../../../../utils/interfaces';

if (options?.projects && options?.branches) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, name: projectName } = options.projects as ProjectOptions;
	const { name: sourceBranchName } = options.branches as BranchOptions;

	const DEFAULT_TARGET_BRANCH: string = 'master';

	let targetBranchName = args.filter(Boolean).join(' ');

	if (!targetBranchName) {
		targetBranchName = DEFAULT_TARGET_BRANCH;
	}

	log(targetBranchName);

	let mrName = prompt("Enter Merge Request Name");

	if (!mrName) {
		notify('Merge Request name is required', "error", 3000);
	} else {
		if (sourceBranchName === targetBranchName) {
			notify('Source Branch and Target branch are same', 'error', 3000);
		} else {
			const response = createNewMR(projectId, {
				source_branch: sourceBranchName,
				target_branch: targetBranchName,
				title: mrName
			});
			const result = decodeApiResponse(response);

			if (result.status >= 400) {
				handleErrors(result.status, JSON.stringify(result.response.message));
			} else {
				notify('Merge request created', 'success', 3000);
				// open(result.response.web_url);
				reIndex([GROUPS, groupName, PROJECTS, projectName, BRANCHES]);
			}
		}
	}
}
