import { createNewIssue } from '../../../../utils/api'
import { decodeApiResponse, handleErrors } from '../../../../utils/helper'

if (options?.repos) {
	const { identifier: projectId, name: projectName } = options.repos
	let issueName = args.filter(Boolean).join(' ')

	if (!issueName) {
		issueName = prompt('Enter New Issue Title')
	}

	const response = createNewIssue(projectId, {
		title: issueName,
	})

	const result = decodeApiResponse(response)

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
	} else {
		notify('Issue Created', 'success', 3000)
		open(result.response.web_url)
		reIndex(['gitlab', 'projects', projectName, 'issues'])
	}
}
