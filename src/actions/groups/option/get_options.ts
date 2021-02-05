// @description Get options for selected group

import { TYPE_USER } from "../../../utils/constants";
import { GroupOptions } from "../../../utils/interfaces"

const returnOptions = () => {
	if (options.groups) {
		const { type: groupType } = options.groups as GroupOptions;
		if (groupType === TYPE_USER) {
			return JSON.stringify({
				remove: ['remove_group']
			});
		}
	}
}

export default returnOptions
