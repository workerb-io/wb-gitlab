/* eslint-disable import/prefer-default-export */
import { NewBranchRequestBody, NewGroupRequestBody, NewIssueRequestBody, NewMRRequestBody, NewPipelineRequestBody, ProjectRequestData, UpdateIssueRequestBody } from './interfaces';
import request from './request'

export const getUserInfo = () => request.get('/user')

export const getAllProjects = () => request.get(`/projects?membership=true`)

export const getAllProjectsByUri = (uri: string) => request.get(uri);

export const getUserProjects = (user_id: string) => request.get(`/users/${user_id}/projects`);

export const getAllGroups = () => request.get(`/groups?membership=true`);

export const createNewGroup = (data: NewGroupRequestBody) => request.post(`/groups`, data);

export const removeGroup = (id: string | number) => request.delete(`/groups/${id}`);

export const createNewProject = (data: ProjectRequestData) => request.post(`/projects`, data)

export const removeProject = (id: string | number) => request.delete(`/projects/${id}`)

export const updateProject = (id: string | number, data: { description: string }) => request.put(`/projects/${id}`, data)

export const listAllBranches = (projectId: string | number) => request.get(`/projects/${projectId}/repository/branches`)

export const createNewBranch = (projectId: string | number, data: NewBranchRequestBody) =>
	request.post(`/projects/${projectId}/repository/branches`, data)

export const removeBranch = (projectId: string | number, branchName: string) =>
	request.delete(`/projects/${projectId}/repository/branches/${branchName}`)

export const deleteMergedBranches = (projectId: string | number) =>
	request.delete(`/projects/${projectId}/repository/merged_branches`)

export const createNewMR = (projectId: string | number, data: NewMRRequestBody) =>
	request.post(`/projects/${projectId}/merge_requests`, data)

export const getAllMergeRequest = (projectId: string | number) =>
	request.get(`/projects/${projectId}/merge_requests?state=opened`)

export const mergeMR = (projectId: string | number, mrId: number) =>
	request.put(`/projects/${projectId}/merge_requests/${mrId}/merge`)

export const deleteMR = (projectId: string | number, mrId: number) =>
	request.delete(`/projects/${projectId}/merge_requests/${mrId}`)

export const getAllIssuesList = (projectId: string | number) => request.get(`/projects/${projectId}/issues`)

export const createNewIssue = (projectId: string | number, data: NewIssueRequestBody) =>
	request.post(`/projects/${projectId}/issues`, data)

export const updateIssue = (projectId: string | number, issueId: number, data: UpdateIssueRequestBody) =>
	request.put(`/projects/${projectId}/issues/${issueId}`, data)

export const deleteIssue = (projectId: string | number, issueId: number) =>
	request.delete(`/projects/${projectId}/issues/${issueId}`)

export const getAllPipelines = (projectId: string | number) => request.get(`/projects/${projectId}/pipelines`)

export const createNewPipeline = (projectId: string | number, data: NewPipelineRequestBody) =>
	request.post(`/projects/${projectId}/pipeline`, data)

export const deletePipeline = (project: string | number, pipelineId: number) =>
	request.delete(`/projects/${project}/pipelines/${pipelineId}`)

export const rerunPipeline = (projectId: string | number, pipelineId: number) =>
	request.post(`/projects/${projectId}/pipelines/${pipelineId}/retry`)
