import { deletePipeline } from '../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'

if (options?.projects && options?.pipelines) {
	const { id: projectId, html_url, name: projectName } = options.projects
	const { id: pipelineId } = options.pipelines

	const response = deletePipeline(projectId, pipelineId)

	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
	} else {
		notify('Pipeline Removed', 'success', 3000)
		open(`${html_url}/-/pipelines`)
		reIndex(['gitlab', 'projects', projectName, 'pipelines'])
	}
}
