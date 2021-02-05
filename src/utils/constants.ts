/* eslint-disable import/prefer-default-export */
export const uri = "https://gitlab.com/api/v4";
export const token = VARS.GITLAB_PERSONAL_TOKEN;

interface User {
  id: number;
  name: string;
  email: string;
}

export const TYPE_GROUP: string = "GROUP";
export const TYPE_USER: string = "USER";

export const GROUPS: string = 'groups';
export const PROJECTS: string = 'projects';
export const BRANCHES: string = 'branches';
export const ISSUES: string = 'issues';
export const MERGE_REQUESTS: string = 'merge_requests';
export const PIPELINES: string = 'pipelines';

const storageSetter = {
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  getData(key: string) {
    return JSON.parse(localStorage.getItem(key) as string);
  },
};

export const store = storageSetter;
