import { deleteMergedBranches } from '../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../utils/helper'

if (options?.projects) {
	const { id, name: projectName } = options.projects

	const response = deleteMergedBranches(id)
	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
	} else {
		notify('Branch removed', 'success', 300)
		reIndex(['gitlab', 'projects', projectName, 'branches'])
	}
}
