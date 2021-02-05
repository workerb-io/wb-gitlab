// @description Reopen the Issue
import { updateIssue } from "../../../../../../../utils/api";
import { GROUPS, ISSUES, PROJECTS } from "../../../../../../../utils/constants";
import { decodeApiResponse, handleErrors } from "../../../../../../../utils/helper";
import { GroupOptions, IssueOptions, ProjectOptions } from "../../../../../../../utils/interfaces";

if (options.projects && options.issues) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, name: projectName } = options.projects as ProjectOptions;
	const { id: issueId } = options.issues as IssueOptions;
	const STATE: string = 'reopen';
	const response = updateIssue(projectId, issueId, {
		state_event: STATE
	});
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify(`Issue reopened `, 'success', 3000);
		// open(result.response.web_url);
		reIndex([GROUPS, groupName, PROJECTS, projectName, ISSUES]);
	}
}