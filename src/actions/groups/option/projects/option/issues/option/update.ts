// @description Update an issue
// @ignore
import { updateIssue } from '../../../../../../../utils/api';
import { GROUPS, ISSUES, PROJECTS } from '../../../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../../../utils/helper';
import { GroupOptions, IssueOptions, ProjectOptions } from '../../../../../../../utils/interfaces';

if (options.projects && options.issues) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, name: projectName } = options.projects as ProjectOptions;
	const { state: issueState, id: issueId } = options.issues as IssueOptions;

	const newState: string | undefined = args[0];

	const STATES = ['close', 'reopen'];

	if (issueState === 'closed' && newState === 'close') {
		notify(`Can't close this issue again.`, 'error', 3000);
	} else if (issueState === 'opened' && newState === 'reopen') {
		notify(`Can't reopen this issue again.`, 'error', 3000);
	} else if (STATES.indexOf(newState) === -1) {
		notify(`Invalid new state value.`, 'error', 3000);
	} else {
		const response = updateIssue(projectId, issueId, {
			state_event: newState
		});
		const result = decodeApiResponse(response);

		if (result.status >= 400) {
			handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
		} else {
			notify(`Issue ${newState} `, 'success', 3000);
			// open(result.response.web_url);
			reIndex([GROUPS, groupName, PROJECTS, projectName, ISSUES]);
		}
	}
}
