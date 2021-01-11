/* eslint-disable consistent-return */
import { getAllOrgProjects } from '../../../utils/api'
import { decodeApiResponse } from '../../../utils/helper'

export default () => {
	notify("10593158", "success", 3000);
	//const { id: projectId } = options.get_options
	const response = getAllOrgProjects("10593158")
	const result = decodeApiResponse(response)
	notify("10593158", "success", 3000);
	if (result.status >= 400) {
		return {}
	}

	const projects = result.response.map((project: any) => ({
		name: project.name,
		html_url: project.web_url,
		id: project.id,
		identifier: project.id,
		description: project.web_url,
	}))

	return JSON.stringify({
		add: projects,
	})
}
