# Gitlab Package Commands

**MAIN URI** : `https://gitlab.example.com/api/v4`

## List of Commands

- ```markdown
  gitlab projects
  ```

  List out all the projecst.

  **API** - _[GET]_ => `/projects`

* ```markdown
  gitlab projects new [new_project_name] ["private"]
  ```

  **Create** new project.

  **Args**:

  1 - `new_project_name` - Name of the project
  2 - `private` - if new repository type is private

  **API** - _[POST]_ => `/projects`

  **Payload :**
  `https://docs.gitlab.com/ee/api/projects.html#create-project`

- ```markdown
  gitlab projects [project_name] update [project_description]
  ```

  Adds **description** to a project.

  **Args**:

  1 - `project_name` - Name of the project from the dropdown

  2 - `project_description` - Descripton of the projects needs to be updated.

  **API**: _[PUT]_ => `/projects/:id`

  **Payload**:
  `https://docs.gitlab.com/ee/api/projects.html#edit-project`

- ```markdown
    gitlab projects [project_name] remove
  ```

  **Remove** a project.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  ​ **API**: _[DELETE]_ => `/projects/:id`
  ​ **Payload**:
  ​ `https://docs.gitlab.com/ee/api/projects.html#remove-project`

- ```markdown
  gitlab projects [project_name]
  ```

  **Searches** project on Gitlab.

  **Args**:

  1 - `project_name` - query not from dropdown

  **API**: _[GET]_ => `/projects`

  **Payload**:
  `https://gitlab.com/search?utf8=%E2%9C%93&search=[project_name]`

* ```markdown
  gitlab projects [project_name] branches
  ```

  Get all **branches** in a project.

  **Args**:

  1 - `project_name` - Name of the project from the dropdown.

  **API:** _[GET]_ => `/projects/:id/repository/branches` <br/>
  **Payload:**
  `https://docs.gitlab.com/ee/api/branches.html#list-repository-branches`

- ```markdown
  gitlab projects [project_name] branches new [branch_name] ref [reffered_branch_name]
  ```

  **Creates** a new **branch** in a project.
  Args:
  1 - `project_name` - Name of the project from the dropdown.
  2 - `branch_name` - New branch name
  3 - `ref` - default is master but can be a reffered branch name.  

  **API:** _[POST]_ => `/projects/:id/repository/branches` <br/>
  **Payload**:
  `https://docs.gitlab.com/ee/api/branches.html#create-repository-branch`

- ```markdown
  gitlab projects [project_name] branches [branch_name] delete
  ```

  **Deletes** a branch from a project.

  Args:

  1 - `project_name` - Name of the project from the dropdown.
  2 - `branch_name` - New branch name from dropdown.

  **API:** _[DELETE]_ => `/projects/:id/repository/branches/:branch`
  **Payload**:
  `https://docs.gitlab.com/ee/api/branches.html#delete-repository-branch`

- ```markdown
  getlab projects [project_name] branches delete_merged
  ```

  **Deletes** all merged branches from a project.
  1 - `project_name` - Name of the project from the dropdown.

  **API:** _[POST]_ => `/projects/:id/repository/merged_branches`
  **Payload**:
  `https://docs.gitlab.com/ee/api/branches.html#delete-merged-branches`

- ```markdown
  gitlab projects [project_name] branches [branch_name]
  ```

  **Opens** a particular branch in broswer.

  **Args:**
  1 - `project_name` - Name of the project from the dropdown.
  2 - `branch_name` - New branch name from dropdown.

- ```javascript
  gitlab project [priject_name] branches [branch_name] new_mr [mr_name] ref [reffered_branch_name]
  ```
  
  **Creates** a new merge request from a branch name.
  
  **Args:** <br />
  1 - `project_name` - Name of the project from the dropdown. <br/>
  2 - `branch_name` - New branch name from dropdown. <br/>
  3 - `mr_name` - New merge request title.
  4 - `reffered_branch_name` - Target branch name. 
  
  **API**: _[POST]_ => `https://docs.gitlab.com/ee/api/merge_requests.html#create-mr`

* ```markdown
  gitlab projects [project_name] merge_requests
  ```

  **Gets** all merge requests of a project i.e open.
  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  **API:** _[GET]_ => `/projects/:id/merge_requests`

- ```markdown
  gitlab projects [project_name] merge_requests new [new_merge_request_title]
  ```

  **Creates** a new merge request.
  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `new_merge_request_title` - Name of new merge request.

  **API:** _[POST]_ => `/projects/:id/merge_requests`

  **Payload**:
  `https://docs.gitlab.com/ee/api/merge_requests.html#create-mr`

- ```markdown
  gitlab projects [project_name] merge_requests [mr_name] update [mr_description]
  ```

  Add **description** to the merge request.

  **Args**:
  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.
  3 - `mr_description` - Description of the merge request.

  **API:** **[PUT]** => `/projects/:id/merge_requests/:merge_request_iid`
  **Payload**:
  `https://docs.gitlab.com/ee/api/merge_requests.html#update-mr`

- ```markdown
  gitlab projects [project_name] merge_requests [mr_name] delete
  ```

  **Deletes** a merge request.
  **Args**:
  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.

  **API**: _[DELETE]_ => `/projects/:id/merge_requests/:merge_request_iid`
  **Payload:**

  `https://docs.gitlab.com/ee/api/merge_requests.html#delete-a-merge-request`

- ```markdown
  gitlab projects [project_name] merge_requests [mr_name] accept
  ```

  **Accepts** a merge request only if an merge request is opened.
  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.

  **API**: _[PUT]_ => `/projects/:id/merge_requests/:merge_request_iid/merge`

  **Payload:**
  `https://docs.gitlab.com/ee/api/merge_requests.html#delete-a-merge-request`

- ```markdown
  gitlab projects [project_name] issues
  ```

  **List** all the open issues.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  **API**: _[GET]_ => `/issues?state=opened`
  **Payload**:
  `https://docs.gitlab.com/ee/api/issues.html#list-issues`

- ```markdown
  gitlab projects [project_name] issues new [issue_name]
  ```

  **Creates** a new issue.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `issue_name` - New issue name

  **API**: _[POST]_ => `/projects/:id/issues`
  **Payload:**`https://docs.gitlab.com/ee/api/issues.html#new-issue`

- ```markdown
  gitlab projects [project_name] issues [issue_name] update [issue_description]
  ```

  **Adds/Update** description of the issue.

  **Args**:

  1 - `project_name` - Name of the project from the dropdown.

  2 - `issue_name` - Issue name from the dropdown

  3 - `issue_description` - Issue description to be added/updated

  **API**: _[PUT]_ => `/projects/:id/issues/:issue_iid`
  **Payload:**

  `https://docs.gitlab.com/ee/api/issues.html#edit-issue`

* ```markdown
  gitlab projects [project_name] issues [issue_name] delete
  ```

  **Deletes** an issue.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `issue_name` - Issue name from the dropdown

  **API**: _[DELETE]_ => `/projects/:id/issues/:issue_iid`
  **Payload**:

  `https://docs.gitlab.com/ee/api/issues.html#delete-an-issue`
