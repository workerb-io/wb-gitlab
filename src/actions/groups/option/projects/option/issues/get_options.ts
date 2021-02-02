// @description List all the issues and its actions
import { getAllIssuesList } from '../../../../../../utils/api';
import { decodeApiResponse, handleErrors } from '../../../../../../utils/helper';
import { GitlabIssueResponse, IssueOptions, ProjectOptions } from '../../../../../../utils/interfaces';

// eslint-disable-next-line func-names
export default function () {
	if (options?.projects) {
		const { id: projectId } = options.projects as ProjectOptions;
		const response = getAllIssuesList(projectId);
		const result = decodeApiResponse(response);

		if (result.status >= 400) {
			return {};
		}

		const issues: Array<IssueOptions> = result.response.map((issue: GitlabIssueResponse) => {
			const issueInfo: IssueOptions = {
				name: issue.title,
				html_url: issue.web_url,
				id: issue.iid,
				state: issue.state
			};
			return issueInfo;
		});

		return JSON.stringify({
			add: issues
		});
	}
	return {};
}
