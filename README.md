<h1 align="center">wb-gitlab</h1>
<h3 align="center"><a href="https://workerb.io/">workerB</a> package for <a href="https://gitlab.com/">Gitlab</a></h3>

# Demo

<div align="center">
  <a href="http://www.youtube.com/watch?v=FZogrzyMrEM">
     <img 
       src="https://user-images.githubusercontent.com/29889620/88480229-5ce5b200-cf72-11ea-803f-c2621d4570d4.png"
       alt="Workerb GitHub Package" 
       style="width:100%;"
      >
  </a>
</div>

## How to install:

- Create account on [workerb](https://workerb.io/).
- Install [workerb extension](https://chrome.google.com/webstore/detail/jdbakbjkiklbibfccegfejjdlcgpnnpe).
- Add Gitlab package.
- Setup Gitlab package.
- 🚀🚀

## Actions

**MAIN URI** : `https://gitlab.example.com/api/v4`

### Projects

- [`gitlab projects`](./src/actions/projects/options.ts) - Lists all the users project.

- [`gitlab projects ${project_name}`](./src/actions/projects/options/index.ts) - Select the current project from the projects lists.

- [`gitlab projects new ${project_name}`](./src/actions/projects/new.ts) - Creates a public project.

- [`gitlab projects new ${project_name} private`](./src/actions/projects/new.ts) - Creates a private project.

- [`gitlab projects ${project_name} remove`](./src/actions/projects/options/remove.ts) - Remove a project owned by the user.

- [`gitlab projects ${project_name} update`](./src/actions/projects/options/update.ts) - Add/Update description to a project.

### Branches

- [`gitlab projects ${project_name} branches`](./src/actions/projects/options/branches/options.ts) - List all project branches.

- [`gitlab projects ${project_name} branches delete_merged `](./src/actions/projects/options/branches/delete_merged.ts) - Delete all merged branches.

- [`gitlab projects ${project_name} branches ${branch_name} `](./src/actions/projects/options/branches/options/index.ts) - Opens the current branch.

- [`gitlab projects ${project_name} branches ${branch_name} `](./src/actions/projects/options/branches/options/index.ts) - Opens the current branch.

- [`gitlab projects ${project_name} branches ${branch_name} remove`](./src/actions/projects/options/branches/options/remove.ts) - Remove/Delete branch from the project.

- [`gitlab projects ${project_name} branches ${branch_name} new_sub_branch ${new_sub_branch_name}`](./src/actions/projects/options/branches/options/new_sub_branch.ts) - Creates sub-branch from the reffered branch.

- [`gitlab projects ${project_name} branches ${branch_name} new_mr ${new_mr_name}`](./src/actions/projects/options/branches/options/new_sub_branch.ts) - Creates a merge request from the current branch to master.

- [`gitlab projects ${project_name} branches ${branch_name} new_mr ${new_mr_name} ref ${target_branch}`](./src/actions/projects/options/branches/options/new_sub_branch.ts) - Creates a merge request from the current branch to a target branch.

### Issues

- [`gitlab projects ${project_name} issues`](./src/actions/projects/options/issues/options.ts) - List all project issues.

- [`gitlab projects ${project_name} issues new ${issue_name}`](./src/actions/projects/options/issues/new.ts) - Creates a new issue in the project.

- [`gitlab projects ${project_name} issues ${issue_name} delete`](./src/actions/projects/options/issues/options/delete.ts) - Deletes a issue from the project.

- [`gitlab projects ${project_name} issues ${issue_name}`](./src/actions/projects/options/issues/options/index.ts) - Opens a current issue.

- [`gitlab projects ${project_name} issues ${issue_name} update close`](./src/actions/projects/options/issues/options/update.ts) - Close an issue.

- [`gitlab projects ${project_name} issues ${issue_name} update reopen`](./src/actions/projects/options/issues/options/update.ts) - Reopen a closed issue.

### Merge Requests

- [`gitlab projects ${project_name} merge_requests`](./src/actions/projects/options/merge_requests/options.ts) - List all merge_requests in project.

- [`gitlab projects ${project_name} merge_requests ${merge_request}`](./src/actions/projects/options/merge_requests/options/index.ts) - Opens the current merge request.

- [`gitlab projects ${project_name} merge_requests ${merge_request} merge`](./src/actions/projects/options/merge_requests/options/merge.ts) - Merge the current merge request.

- [`gitlab projects ${project_name} merge_requests ${merge_request} reject`](./src/actions/projects/options/merge_requests/options/reject.ts) - Deletes a merge_request.

### Pipelines

- [`gitlab projects ${project_name} pipelines`](./src/actions/projects/options/pipelines/options.ts) - List all pipelines in a project.

- [`gitlab projects ${project_name} pipelines run [reffered_brach]`](src/actions/projects/options/pipelines/run.ts) - Creates a new pipeline.

- [`gitlab projects ${project_name} pipelines ${pipeline}`](./src/actions/projects/options/pipelines/options/index.ts) - Opens the current pipeline.

- [`gitlab projects ${project_name} pipelines ${pipeline} remove`](./src/actions/projects/options/pipelines/options/remove.ts) - Remove/Delete the pipeline.

## Development

- To install project dependencies, run `yarn install`.
- To build the project, run `yarn build`.
- To continuously build the project, run `yarn watch`.
- Create `.env` file inside your root folder and add your personal access token with respective key `GITLAB_PERSONAL_TOKEN`. Checkout [`.env.example`](./.env.example) for more.
- Run `yarn build` or `yarn watch` in terminal.
- Log into `https://workerb.app`.
- Run `dev on` in the workerB action bar.
- Run`loadDir <path>` in the workerB action bar. `path` is the path of the build folder generated by yarn.

## Support

- [Forums](http://forums.workerb.io/)
