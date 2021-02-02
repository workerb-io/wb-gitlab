// eslint-disable-next-line camelcase
// @description Delete the issue
import { deleteIssue } from '../../../../../../../utils/api';
import { GROUPS, ISSUES, PROJECTS } from '../../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper';
import { GroupOptions, IssueOptions, ProjectOptions } from '../../../../../../../utils/interfaces';

if (options?.projects && options?.issues) {
	// eslint-disable-next-line camelcase
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, html_url: projectUrl, name: projectName } = options.projects as ProjectOptions;
	const { id: issueId } = options.issues as IssueOptions;

	const response = deleteIssue(projectId, issueId);
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message);
	} else {
		notify('Issue Deleted', 'success', 3000);
		open(`${projectUrl}/-/issues`);
		reIndex([GROUPS, groupName, PROJECTS, projectName, ISSUES]);
	}
}
