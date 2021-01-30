// @description Update project description
import { updateProject } from '../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../utils/helper'

if (options.projects) {
	const { id, html_url } = options.projects

	let description = args.filter(Boolean).join(' ')

	if (!description) {
		description = prompt('Enter Description')
	}

	const response = updateProject(id, { description })
	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
	} else {
		notify('Project Update', 'success', 300)
		open(html_url)
		reIndex(['gitlab', 'projects'])
	}
}
