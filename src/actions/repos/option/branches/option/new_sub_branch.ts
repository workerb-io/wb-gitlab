import { createNewBranch } from "../../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../../utils/helper";

if (options?.repos) {
  const { id, name: projectName } = options.projects;
  const { name: targetBranchName } = options.branches;

  let branchName = args.filter(Boolean).join(" ");

  if (!branchName) {
    branchName = prompt("Enter branch name");
  }
  const response = createNewBranch(id, {
    branch: branchName,
    ref: targetBranchName,
  });
  const result = decodeApiResponse(response);

  if (!(result.status >= 200 && result.status <= 299)) {
    handleErrors(result.status, result.response.message);
  } else {
    notify("Branch Created", "success", 3000);
    open(result.response.web_url);
    reIndex(["gitlab", "projects", projectName, "branches"]);
  }
}
