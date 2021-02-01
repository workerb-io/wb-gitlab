/* eslint-disable consistent-return */
import { listAllBranches } from '../../../../../../utils/api';
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper';
import { BranchOptions, GitlabBranchResponse, ProjectOptions } from '../../../../../../utils/interfaces';

export default () => {
	if (options?.projects) {
		const { id: projectId } = options.projects as ProjectOptions;

		const response = listAllBranches(projectId);
		const result = decodeApiResponse(response);

		if (result.status >= 400) {
			return {};
		}

		const branches: Array<BranchOptions> = result.response.map((branch: GitlabBranchResponse) => {
			const branchInfo: BranchOptions = {
				name: branch.name,
				html_url: branch.web_url,
			}
			return branchInfo;
		});

		return JSON.stringify({
			add: branches,
		});
	}

	return {};
}
