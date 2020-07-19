import { createNewBranch } from "../../../../utils/api";
import { decodeApiResponse, handleErrors } from "../../../../utils/helper";

if (options?.projects) {
  const { id } = options.projects;

  let branchesName = args.filter(Boolean).join(' ');

  if (!branchesName) {
    branchesName = prompt('Enter branch name');
  }

  const branchNameArgs: string[] = branchesName.split(' ');

  const refIndex = branchNameArgs.indexOf("ref");

  const subBranchName : string = refIndex !== -1 ? branchNameArgs.slice(refIndex + 1).join(' ') : 'master';

  const branchName: string = refIndex === -1 ? branchesName : branchNameArgs.slice(0, refIndex).join(' ');

  const response = createNewBranch(id, { branch: branchName, ref: subBranchName });
  const result = decodeApiResponse(response);

  if (!(result.status >= 200 && result.status <= 299)) {
    handleErrors(result.status, result.response.message);
  } else {
    notify("Branch Created", "success", 3000);
    open(result.response.web_url);
  }
}
