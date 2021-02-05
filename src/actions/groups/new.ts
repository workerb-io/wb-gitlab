/* eslint-disable no-param-reassign */
// @description Create a new group
import { createNewGroup } from '../../utils/api'
import { GROUPS } from '../../utils/constants';
import { decodeApiResponse, handleErrors } from '../../utils/helper'
import { NewGroupRequestBody } from '../../utils/interfaces';

const argsArr = args.filter(Boolean);
const PRIVATE: string = 'private';
const PUBLIC: string = 'public';
const INTERNAL: string = 'internal';

let groupName: string = '';
let groupVisibility: string = PUBLIC;

if (argsArr[argsArr.length - 1] === PRIVATE) {
	groupVisibility = PRIVATE;
	groupName = argsArr.slice(0, argsArr.length - 1).join(' ');
} else if (argsArr[argsArr.length - 1] === INTERNAL) {
	groupVisibility = INTERNAL;
	groupName = argsArr.slice(0, argsArr.length - 1).join(' ');
} else {
	groupName = argsArr.join(' ');
}

if (!groupName) {
	groupName = prompt('Gitlab group name');
}

if (!groupName) {
	notify("Group name not present", "error", 3000);
} else {
	let groupPath: string = groupName.split(" ").join("-");
	const groupPathResponse = httpGet(`https://gitlab.com/users/${groupPath}/suggests`);
	const groupPathResult = decodeApiResponse(groupPathResponse);

	if (groupPathResult.status >= 400) {
		handleErrors(groupPathResult.status, groupPathResult.response.message ? groupPathResult.response.message : groupPathResult.response.error);
	} else {
		if (groupPathResult.response.exists) {
			groupPath = groupPathResult.response.suggests[0];
		}
	}

	const groupData: NewGroupRequestBody = {
		name: groupName,
		path: groupPath,
		visibility: groupVisibility
	}

	const response = createNewGroup(groupData);
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error)
	} else {
		notify('Group Created', 'success', 3000);
		open(result.response.web_url);
		reIndex([GROUPS]);
	}
}


