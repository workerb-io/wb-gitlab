// @description Delete the project
import { removeProject } from '../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../utils/helper'

if (options.projects) {
	const { id } = options.projects

	const response = removeProject(id)
	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
	} else {
		notify('Project Deleted', 'success', 3000)
		reIndex(['gitlab', 'projects'])
	}
}
