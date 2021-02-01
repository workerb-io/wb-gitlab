// @description Update project description
import { updateProject } from '../../../../../utils/api';
import { GITLAB, GROUPS, PROJECTS } from '../../../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper';
import { GroupOptions, ProjectOptions } from '../../../../../utils/interfaces';

if (options.projects) {
	const { name: groupName } = options.groups as GroupOptions;
	const { id: projectId, html_url: projectUrl } = options.projects as ProjectOptions;

	let description = args.filter(Boolean).join(' ');

	if (!description) {
		description = prompt('Enter Description');
	}

	const response = updateProject(projectId, { description });
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify('Project Updated', 'success', 300);
		open(projectUrl);
		reIndex([GITLAB, GROUPS, groupName, PROJECTS]);
	}
}
