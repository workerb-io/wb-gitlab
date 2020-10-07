import { decodeApiResponse, handleErrors } from '../../../../utils/helper'
import { getAllPipelines } from '../../../../utils/api'

export default () => {
	if (options?.projects) {
		const { id: projectId } = options.projects
		const response = getAllPipelines(projectId)
		const result = decodeApiResponse(response)

		if (result.status >= 400) {
			return {}
		}

		const pipelines = result.response.map(({ web_url, id }: { web_url: string; id: number }) => ({
			id,
			name: `Pipeline: #${id}`,
			html_url: web_url,
		}))

		// eslint-disable-next-line consistent-return
		return JSON.stringify({
			add: pipelines,
		})
	}

	return {}
}
