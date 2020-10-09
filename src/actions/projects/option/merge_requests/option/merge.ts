import { mergeMR } from '../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'

if (options.projects && options.merge_requests) {
	const { id: projectId, name: projectName } = options.projects
	const { state, html_url, id } = options.merge_requests

	if (state === 'closed' || state === 'merged') {
		notify('This merged request is already merged', 'error', 3000)
	} else {
		const response = mergeMR(projectId, id)
		const result = decodeApiResponse(response)

		if (result.status >= 400) {
			open(html_url)
			if (result.status == 405 || result.status == 406) {
				handleErrors(result.status, 'Branch cannot be merged')
			} else {
				handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
			}
		} else {
			notify('Request Merged', 'success', 3000)
			reIndex(['gitlab', 'projects', projectName, 'merge_requests'])
		}
	}
}
