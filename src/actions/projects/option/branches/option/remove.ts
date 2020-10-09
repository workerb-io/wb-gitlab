import { removeBranch } from '../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'

if (options?.projects && options.branches) {
	const { id, html_url, name: projectName } = options.projects
	const { name } = options.branches

	const response = removeBranch(id, name)
	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
	} else {
		notify('Branch removed', 'success', 3000)
		open(html_url)
		reIndex(['gitlab', 'projects', projectName, 'branches'])
	}
}
