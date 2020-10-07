/* eslint-disable consistent-return */
import { getAllProjects } from '../../utils/api'
import { decodeApiResponse } from '../../utils/helper'

export default () => {
	const response = getAllProjects()
	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		return {}
	}

	const projects = result.response.map((project: any) => ({
		name: project.name_with_namespace,
		html_url: project.web_url,
		id: project.id,
		identifier: project.id,
		description: project.web_url,
	}))

	return JSON.stringify({
		add: projects,
	})
}
