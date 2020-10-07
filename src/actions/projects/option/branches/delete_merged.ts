import { deleteMergedBranches } from '../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../utils/helper'

if (options?.repos) {
	const { id, html_url, name: projectName } = options.repos

	const response = deleteMergedBranches(id)
	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
	} else {
		notify('Branch removed', 'success', 300)
		open(html_url)
		reIndex(['gitlab', 'projects', projectName, 'branches'])
	}
}
