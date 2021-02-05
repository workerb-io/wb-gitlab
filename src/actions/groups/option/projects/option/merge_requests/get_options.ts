// @description Get all the merge request of the selected project
import { getAllMergeRequest } from '../../../../../../utils/api';
import { decodeApiResponse } from '../../../../../../utils/helper';
import { GitlabMRResponse, MergeRequestOptions, ProjectOptions } from '../../../../../../utils/interfaces';

// eslint-disable-next-line func-names
export default function () {
	if (options?.projects) {
		const { id: projectId } = options.projects as ProjectOptions;
		const response = getAllMergeRequest(projectId);
		const result = decodeApiResponse(response);

		if (result.status >= 400) {
			return {};
		}

		const merge_requests: Array<MergeRequestOptions> = result.response.map((mr: GitlabMRResponse) => {
			const mergeRequestInfo: MergeRequestOptions = {
				name: mr.title,
				html_url: mr.web_url,
				id: mr.iid,
				state: mr.state
			};
			return mergeRequestInfo;
		});

		return JSON.stringify({
			add: merge_requests
		});
	}
	return {};
}
