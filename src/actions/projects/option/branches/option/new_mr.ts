// @description Creates a new merge request from this branch
import { createNewMR } from '../../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../../utils/helper'

if (options?.projects && options?.branches) {
	const { id, name: projectName } = options.projects
	const { name: sourceBranchName } = options.branches

	let mrPayload = args.filter(Boolean).join(' ')

	const mrPayloadArgs: string[] = mrPayload.split(' ')

	const refIndex = mrPayloadArgs.indexOf('ref')

	const targetBranchName: string = refIndex !== -1 ? mrPayloadArgs.slice(refIndex + 1).join(' ') : 'master'

	const mrName: string = refIndex === -1 ? mrPayload : mrPayloadArgs.slice(0, refIndex).join(' ')

	if (sourceBranchName === targetBranchName) {
		notify('Source Branch and Target branch are same', 'success', 3000)
	} else {
		const response = createNewMR(id, {
			source_branch: sourceBranchName,
			target_branch: targetBranchName,
			title: mrName,
		})
		const result = decodeApiResponse(response)

		if (result.status >= 400) {
			handleErrors(result.status, result.response.message.title.join(" "))
		} else {
			notify('Merge request created', 'success', 3000)
			open(result.response.web_url)
			reIndex(['gitlab', 'projects', projectName, 'branches'])
		}
	}
}
