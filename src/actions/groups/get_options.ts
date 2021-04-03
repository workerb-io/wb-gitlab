/* eslint-disable consistent-return */
// @description List all the projects and its options
import { getAllGroups, getUserInfo } from '../../utils/api'
import { decodeApiResponse, api } from '../../utils/helper'
import { GitlabGroupResponse, GroupOptions, UserInfo } from '../../utils/interfaces'
import { TYPE_GROUP, TYPE_USER } from '../../utils/constants'

export default () => {
	const getGroupsResponse = getAllGroups()
	const groupsResult = decodeApiResponse(getGroupsResponse)

	const userResponse = getUserInfo()
	const userResult = decodeApiResponse(userResponse)

	if (groupsResult.status >= 400 && userResult.status >= 400) {
		return {}
	}

	const groups: Array<GroupOptions> = groupsResult.response.map((group: GitlabGroupResponse) => {
		const groupInfo: GroupOptions = {
			name: group.name,
			html_url: group.web_url,
			id: group.id,
			identifier: group.id,
			description: group.description,
			projects_uri: `/groups/${group.id}/projects`,
			type: TYPE_GROUP,
		}
		return groupInfo
	})

	const userObjectResponse = userResult.response

	const user: UserInfo = {
		name: `${userObjectResponse.username}`,
		id: userObjectResponse.id,
		html_url: userObjectResponse.web_url,
		projects_uri: `/users/${userObjectResponse.id}/projects`,
		type: TYPE_USER,
	}

	return JSON.stringify({
		add: [user, ...groups],
	})
}
