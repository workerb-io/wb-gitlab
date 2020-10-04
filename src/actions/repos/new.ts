/* eslint-disable no-param-reassign */
import { createNewProject } from "../../utils/api";
import { decodeApiResponse, handleErrors } from "../../utils/helper";

const argsArr = args.filter(Boolean);

let projectName: any = "";
let isPrivateProject: boolean = false;

if (argsArr[argsArr.length - 1] === "private") {
  projectName = argsArr.slice(0, argsArr.length - 1).join(" ");
  isPrivateProject = true;
} else {
  projectName = argsArr.join(" ");
}

if (!projectName) {
  projectName = prompt("Github project name")
}

const additionalProjectOptions = {
  issues_access_level: isPrivateProject ? "private" : "enabled",
  repository_access_level: "enabled",
  merge_requests_access_level: "enabled",
  forking_access_level: isPrivateProject ? "private" : "enabled",
  builds_access_level: "enabled",
  wiki_access_level: isPrivateProject ? "private" : "enabled",
  snippets_access_level: isPrivateProject ? "private" : "enabled",
};

const projectData = {
  name: projectName,
  pages_access_level: isPrivateProject ? "private" : "public",
  visibility: isPrivateProject ? "private" : "public",
  ...additionalProjectOptions,
};

const response = createNewProject(projectData);
const result = decodeApiResponse(response);

if (result.status >= 400) {
  handleErrors(
    result.status,
    result.response.message ? result.response.message : result.response.error
  );
} else {
  notify("Project Created", "success", 3000);
  open(result.response.web_url);
  reIndex(["gitlab", "repos"]);
}
