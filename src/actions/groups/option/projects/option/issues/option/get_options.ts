import { IssueOptions } from "../../../../../../../utils/interfaces";

const returnOptions = () => {
	if (options?.issues) {
		const { state } = options.issues as IssueOptions;
		const CLOSED_STATE: string = 'closed';
		const OPENED_STATE: string = 'opened';
		if (state == CLOSED_STATE) {
			return JSON.stringify({
				remove: ['close'],
			});
		} else {
			return JSON.stringify({
				remove: ['reopen'],
			});
		}
	}
}

export default returnOptions;