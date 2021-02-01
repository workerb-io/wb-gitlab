// @description Delete the project
import { removeProject } from '../../../../../utils/api'
import { GITLAB, GROUPS, PROJECTS } from '../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'
import { GroupOptions, ProjectOptions } from '../../../../../utils/interfaces'

if (options.projects) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId } = options.projects as ProjectOptions;

	const response = removeProject(projectId);
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify('Project Deleted', 'success', 3000);
		reIndex([GITLAB, GROUPS, groupName, PROJECTS]);
	}
}
