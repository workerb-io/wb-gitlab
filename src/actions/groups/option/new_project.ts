/* eslint-disable no-param-reassign */
// @description Create a new project
import { createNewProject } from '../../../utils/api'
import { GITLAB, GROUPS, PROJECTS, TYPE_GROUP } from '../../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../../utils/helper'
import { AdditionalProjectOptions, GroupOptions, ProjectRequestData } from '../../../utils/interfaces';

const argsArr = args.filter(Boolean);

const PRIVATE: string = 'private';
const PUBLIC: string = 'public';
const ENABLED: string = 'enabled';

let projectName: string = '';
let isPrivateProject: boolean = false;

/**
 *  group_id and group_type are reuired to get the info of user selection
 * 	that whether user want to create a new project under a group or create a direct one
 * 	based on user selection request body gets updated
 */
const { id: group_id, type: group_type, name: groupName } = options.groups as GroupOptions;

if (argsArr[argsArr.length - 1] === PRIVATE) {
	projectName = argsArr.slice(0, argsArr.length - 1).join(' ');
	isPrivateProject = true;
} else {
	projectName = argsArr.join(' ');
}

if (!projectName) {
	projectName = prompt('Gitlab project name');
}

var additionalProjectOptions: AdditionalProjectOptions = {
	issues_access_level: isPrivateProject ? PRIVATE : ENABLED,
	repository_access_level: ENABLED,
	merge_requests_access_level: ENABLED,
	forking_access_level: isPrivateProject ? PRIVATE : ENABLED,
	builds_access_level: ENABLED,
	wiki_access_level: isPrivateProject ? PRIVATE : ENABLED,
	snippets_access_level: isPrivateProject ? PRIVATE : ENABLED
};

if (group_type === TYPE_GROUP) {
	additionalProjectOptions.namespace_id = group_id;
}

const projectData: ProjectRequestData = {
	name: projectName,
	pages_access_level: isPrivateProject ? PRIVATE : PUBLIC,
	visibility: isPrivateProject ? PRIVATE : PUBLIC,
	...additionalProjectOptions,
};

const createProjectResponse = createNewProject(projectData);
const projectResult = decodeApiResponse(createProjectResponse);

if (projectResult.status >= 400) {
	handleErrors(projectResult.status, projectResult.response.message ? projectResult.response.message : projectResult.response.error);
} else {
	notify('Project Created', 'success', 3000);
	open(projectResult.response.http_url_to_repo);
	reIndex([GITLAB, GROUPS, groupName, PROJECTS]);
}
