/* eslint-disable consistent-return */
// @description List all the projects and its options
import { getAllProjectsByUri } from '../../../../utils/api'
import { decodeApiResponse } from '../../../../utils/helper'
import { GitlabProjectResponse, GroupOptions, ProjectOptions } from '../../../../utils/interfaces'

export default () => {
	if (options.groups) {
		const { projects_uri } = options.groups as GroupOptions;
		const projectsResponse = getAllProjectsByUri(projects_uri);
		const projectsResult = decodeApiResponse(projectsResponse)

		if (projectsResult.status >= 400) {
			return {}
		};

		const projects: Array<ProjectOptions> = projectsResult.response.map((project: GitlabProjectResponse) => {
			const projectInfo: ProjectOptions = {
				name: project.name,
				html_url: project.web_url,
				id: project.id,
				identifier: project.id,
				description: project.web_url,
				pipelines_url: project.web_url + '/-/pipelines',
			};
			return projectInfo;
		});

		return JSON.stringify({
			add: projects,
		});
	}
}
