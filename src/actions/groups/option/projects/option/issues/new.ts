// @description Create a new issue
import { createNewIssue } from '../../../../../../utils/api';
import { GROUPS, ISSUES, PROJECTS } from '../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper';
import { GroupOptions, ProjectOptions } from '../../../../../../utils/interfaces';

if (options?.projects) {
	const { name: groupName } = options.groups as GroupOptions;
	const { identifier: projectId, name: projectName } = options.projects as ProjectOptions;
	let issueName = args.filter(Boolean).join(' ');

	if (!issueName) {
		issueName = prompt('Enter New Issue Title');
	}

	const response = createNewIssue(projectId, {
		title: issueName,
	});

	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify('Issue Created', 'success', 3000);
		open(result.response.web_url);
		reIndex([GROUPS, groupName, PROJECTS, projectName, ISSUES]);
	}
}
