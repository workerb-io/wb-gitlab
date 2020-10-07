/* eslint-disable consistent-return */
import { listAllBranches } from '../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../utils/helper'

export default () => {
	if (options?.projects) {
		const { id } = options.projects

		const response = listAllBranches(id)
		const result = decodeApiResponse(response)

		if (result.status >= 400) {
			return {}
		}

		const branches = result.response.map((branch: { name: string; web_url: string }) => ({
			name: branch.name,
			html_url: branch.web_url,
		}))

		return JSON.stringify({
			add: branches,
		})
	}

	return {}
}
