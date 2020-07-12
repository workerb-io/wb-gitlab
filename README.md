# Gitlab Package Commands

**MAIN URI** : `https://gitlab.example.com/api/v4`

## List of Commands

- ```javascript
  gitlab projects
  ```

  List out all the projecst.

  **API** - _[GET]_ => `/projects`

* ```js
  gitlab projects [[project_type]] [new_project_name]
  ```

  **Create** new project.

  **Args**:

  1 - `project_type` - new_private || new_public

  2 - `new_project_name` - Name of the project

**API** - _[POST]_ => `/projects`

**Payload :**

`https://docs.gitlab.com/ee/api/projects.html#create-project`

- ```js
  gitlab projects [project_name] update [project_description]
  ```

  Adds **description** to a project.

  **Args**:

  1 - `project_name` - Name of the project from the dropdown

  2 - `project_description` - Descripton of the projects needs to be updated.

**API**: _[PUT]_ => `/projects/:id`

**Payload**:

`https://docs.gitlab.com/ee/api/projects.html#edit-project`

- ```js
  gitlab projects [project_name] star
  ```

  **Star** a project.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown

​ **API:** _[POST]_ => `/projects/:id/star`

​ **Payload** :

​ `https://docs.gitlab.com/ee/api/projects.html#star-a-project`

- ```js
  gitlab projects [project_name] unstar
  ```

  **Star** a project.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown

**API:** _[POST]_ => `/projects/:id/unstar`

**Payload** :

`https://docs.gitlab.com/ee/api/projects.html#unstar-a-project`

- ```js
  gitlab projects [project_name] remove
  ```

  **Remove** a project.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

​ **API**: _[DELETE]_ => `/projects/:id`
​ **Payload**:

​ `https://docs.gitlab.com/ee/api/projects.html#remove-project`

- ```js
  gitlab projects [project_name]
  ```

  **Searches** project on Gitlab.

  **Args**:

  1 - `project_name` - query not from dropdown

  **API**: _[GET]_ => `/projects`

  **Payload**:
  `https://gitlab.com/search?utf8=%E2%9C%93&search=[project_name]`

* ```js
  gitlab projects [project_name] branches
  ```

  Get all **branches** in a project.

  **Args**:

  1 - `project_name` - Name of the project from the dropdown.

**API:** _[GET]_ => `/projects/:id/repository/branches`
**Payload:**
`https://docs.gitlab.com/ee/api/branches.html#list-repository-branches`

- ```js
  gitlab projects [project_name] branches new [branch_name]
  ```

  **Creates** a new **branch** in a project.
  Args:
  1 - `project_name` - Name of the project from the dropdown.
  2 - `branch_name` - New branch name

**API:** _[POST]_ => `/projects/:id/repository/branches`
**Payload**:
`https://docs.gitlab.com/ee/api/branches.html#create-repository-branch`

- ```js
  gitlab projects [project_name] branches [branch_name] delete
  ```

  **Deletes** a branch from a project.

  Args:

  1 - `project_name` - Name of the project from the dropdown.
  2 - `branch_name` - New branch name from dropdown.

  **API:** _[DELETE]_ => `/projects/:id/repository/branches/:branch`
  **Payload**:
  `https://docs.gitlab.com/ee/api/branches.html#delete-repository-branch`

- ```js
  getlab projects [project_name] branches delete_merged
  ```

  **Deletes** all merged branches from a project.
  1 - `project_name` - Name of the project from the dropdown.

  **API:** _[POST]_ => `/projects/:id/repository/merged_branches`
  **Payload**:
  `https://docs.gitlab.com/ee/api/branches.html#delete-merged-branches`

- ```js
  gitlab projects [project_name] branches [branch_name]
  ```

  **Opens** a particular branch in broswer.

  **Args:**
  1 - `project_name` - Name of the project from the dropdown.
  2 - `branch_name` - New branch name from dropdown.

* ```js
  gitlab projects [project_name] merge_requests
  ```

  **Gets** all merge requests of a project i.e open.
  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

**API:** _[GET]_ => `/projects/:id/merge_requests`

- ```js
  gitlab projects [project_name] merge_requests new [new_merge_request_title]
  ```

  **Creates** a new merge request.
  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `new_merge_request_title` - Name of new merge request.

  **API:** _[POST]_ => `/projects/:id/merge_requests`

  **Payload**:
  `https://docs.gitlab.com/ee/api/merge_requests.html#create-mr`

- ```js
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

- ```js
  gitlab projects [project_name] merge_requests [mr_name] delete
  ```

  **Deletes** a merge request.
  **Args**:
  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.

  **API**: _[DELETE]_ => `/projects/:id/merge_requests/:merge_request_iid`
  **Payload:**

  `https://docs.gitlab.com/ee/api/merge_requests.html#delete-a-merge-request`

- ```js
  gitlab projects [project_name] merge_requests [mr_name] accept
  ```

  **Accepts** a merge request only if an merge request is opened.
  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.

  **API**: _[PUT]_ => `/projects/:id/merge_requests/:merge_request_iid/merge`

  **Payload:**
  `https://docs.gitlab.com/ee/api/merge_requests.html#delete-a-merge-request`

- ```js
  gitlab projects [project_name] merge_request [mr_name] notes
  ```

  **Lists** all the notes on a merge request.
  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.

  **API:** _[GET]_ => `/projects/:id/merge_requests/:merge_request_iid/notes?sort=asc&order_by=updated_at`
  **Payload**:

  `https://docs.gitlab.com/ee/api/notes.html#list-all-merge-request-notes`

* ```js
  gitlab projects [project_name] merge_request [mr_name] notes new [new_note]
  ```

  **Creates** a new note on the merge_request.**Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.
  3 - `new_note` - New note to be created on a paticulat merge request.

  **API:** _[POST]_ =>`/projects/:id/merge_requests/:merge_request_iid/notes`
  **Payload**:

  `https://docs.gitlab.com/ee/api/notes.html#create-new-merge-request-note`

- ```js
  gitlab projects [project_name] merge_request [mr_name] notes [note] update [new_updated_note]
  ```

  **Adds/Updates** a existing note on the merge_request.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.
  3 - `note` - Name of note selected from dropdown.

  4 - `new_updated_note` - updated content of the note

**API:** _[PUT]_ =>`/projects/:id/merge_requests/:merge_request_iid/notes/:note_id`
**Payload**:

`https://docs.gitlab.com/ee/api/notes.html#modify-existing-merge-request-note`

- ```js
  gitlab projects [project_name] merge_request [mr_name] notes [note] delete
  ```

  **Deletes** a note from a merge_request.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.
  3 - `note` - Name of note selected from dropdown.

  **API:** _[DELETE]_ =>`/projects/:id/merge_requests/:merge_request_iid/notes/:note_id`
  **Payload**:

  `https://docs.gitlab.com/ee/api/notes.html#delete-a-merge-request-note`

- ```js
  gitlab projects [project_name] issues
  ```

  **List** all the open issues.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

**API**: _[GET]_ => `/issues?state=opened`
**Payload**:
`https://docs.gitlab.com/ee/api/issues.html#list-issues`

- ```js
  gitlab projects [project_name] issues new [issue_name]
  ```

  **Creates** a new issue.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `issue_name` - New issue name

**API**: _[POST]_ => `/projects/:id/issues`
**Payload:**

`https://docs.gitlab.com/ee/api/issues.html#new-issue`

- ```js
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

* ```js
  gitlab projects [project_name] issues [issue_name] delete
  ```

  **Deletes** an issue.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `issue_name` - Issue name from the dropdown

  **API**: _[DELETE]_ => `/projects/:id/issues/:issue_iid`
  **Payload**:

  `https://docs.gitlab.com/ee/api/issues.html#delete-an-issue`

- ```js
  gitlab projects [project_name] issues [issue_name] notes
  ```

  **Lists** all the notes on a merge request.
  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `issue_name` - Name of issue from dropdown.

  **API:** _[GET]_ => `/projects/:id/issues/:issue_iid/notes?sort=asc&order_by=updated_at`
  **Payload**:

  `https://docs.gitlab.com/ee/api/notes.html#list-project-issue-notes`

* ```js
  gitlab projects [project_name] issues [issue_name] notes new [new_note]
  ```

  **Creates** a new note on the merge_request.**Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `issue_name` - Name of issue from dropdown.
  3 - `new_note` - New note to be created on a paticulat merge request.

  **API:** _[POST]_ =>`/projects/:id/issues/:issue_iid/notes`
  **Payload**:

  `https://docs.gitlab.com/ee/api/notes.html#create-new-issue-note`

- ```js
  gitlab projects [project_name] merge_request [mr_name] notes [note] update [new_updated_note]
  ```

  **Adds/Updates** a existing note on the merge_request.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.
  3 - `note` - Name of note selected from dropdown.

  4 - `new_updated_note` - updated content of the note

**API:** _[PUT]_ =>`/projects/:id/merge_requests/:merge_request_iid/notes/:note_id`
**Payload**:

`https://docs.gitlab.com/ee/api/notes.html#modify-existing-merge-request-note`

- ```js
  gitlab projects [project_name] merge_request [mr_name] notes [note] delete
  ```

  **Deletes** a note from a merge_request.

  **Args:**

  1 - `project_name` - Name of the project from the dropdown.

  2 - `mr_name` - Name of merge request from dropdown.
  3 - `note` - Name of note selected from dropdown.

  **API:** _[DELETE]_ =>`/projects/:id/merge_requests/:merge_request_iid/notes/:note_id`
  **Payload**:

  `https://docs.gitlab.com/ee/api/notes.html#delete-a-merge-request-note`
