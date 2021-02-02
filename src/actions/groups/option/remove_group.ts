// @description Remove this group
import { removeGroup } from "../../../utils/api";
import { GROUPS } from "../../../utils/constants";
import { decodeApiResponse, handleErrors } from "../../../utils/helper";
import { GroupOptions } from "../../../utils/interfaces";

if (options.groups) {
	const { id: groupId } = options.groups as GroupOptions;

	const response = removeGroup(groupId);
	const result = decodeApiResponse(response);

	if (result.status >= 400) {
		handleErrors(result.status, result.response.message ? result.response.message : result.response.error);
	} else {
		notify('Group Removed', 'success', 3000);
		reIndex([GROUPS]);
	}
}