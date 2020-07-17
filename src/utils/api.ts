/* eslint-disable import/prefer-default-export */
import request from "./request";

export const getUserInfo = () => request.get("/user");

export const getAllProjects = (userId: number) =>
  request.get(`/projects?owned=true`);

export const createNewProject = (data: object) =>
  request.post(`/projects`, data);

export const removeProject = (id: string | number) => request.delete(`/projects/${id}`);
