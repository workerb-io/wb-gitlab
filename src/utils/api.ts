/* eslint-disable import/prefer-default-export */
import request from "./request";

export const getUserInfo = () => request.get("/user");

export const getAllProjects = (userId: number) =>
  request.get(`/projects?owned=true`);

export const createNewProject = (data: object) =>
  request.post(`/projects`, data);

export const removeProject = (id: string | number) => request.delete(`/projects/${id}`);

export const updateProject = (id: string | number, data: object) => request.put(`/projects/${id}`, data);

export const listAllBranches = (projectId: string | number) => request.get(`/projects/${projectId}/repository/branches`);

export const createNewBranch = (projectId: string | number, data : object) => request.post(`/projects/${projectId}/repository/branches`, data);

export const removeBranch = (projectId: string | number, branchName : string) => request.delete(`/projects/${projectId}/repository/branches/${branchName}`);

export const deleteMergedBranches = (projectId: string | number) => request.delete(`/projects/${projectId}/repository/merged_branches`);

export const createNewMR = (projectId: string | number, data : object) => request.post(`/projects/${projectId}/merge_requests`, data);

export const getAllMergeRequest = (projectId: string | number) => request.get(`/projects/${projectId}/merge_requests`);

export const mergeMR = (projectId: string | number, mrId: number) => request.put(`/projects/${projectId}/merge_requests/${mrId}/merge`);

export const deleteMR = (projectId: string | number, mrId: number) => request.delete(`/projects/${projectId}/merge_requests/${mrId}`);
