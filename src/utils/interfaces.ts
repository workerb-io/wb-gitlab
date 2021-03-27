export interface DecodeAPIResponse {
	response: any;
	status: number;
}

export interface UserInfo {
	name: string;
	id: string;
	html_url: string;
	user_name?: string;
	avatar_url?: string;
	projects_uri?: string;
	type?: string;
}

export interface GroupOptions {
	id: string;
	identifier: string;
	name: string;
	html_url: string;
	description: string;
	projects_uri: string;
	type?: string;
}

export interface ProjectOptions {
	id: string;
	identifier: string;
	name: string;
	description: string;
	html_url: string;
	pipelines_url: string;
}

export interface BranchOptions {
	name: string;
	html_url: string;
}

export interface IssueOptions {
	id: number;
	name: string;
	html_url: string;
	state: string;
}

export interface PipelineOptions {
	id: number;
	name: string;
	html_url: string;
	description: string;
}

export interface MergeRequestOptions {
	id: number;
	name: string;
	html_url: string;
	state: string;
}

export interface GitlabGroupResponse {
	id: string;
	name: string;
	web_url: string;
	description: string;
}

export interface GitlabProjectResponse {
	id: string;
	name: string;
	web_url: string;
}

export interface GitlabBranchResponse {
	name: string;
	web_url: string;
}

export interface GitlabIssueResponse {
	title: string;
	web_url: string;
	iid: number;
	state: string;
	id?: string;
}

export interface GitlabMRResponse {
	iid: number;
	title: string;
	web_url: string;
	state: string;
}

export interface GitlabPipelineResponse {
	id: number;
	web_url: string;
	status: string;
	created_at: string;
}

export interface NewGroupRequestBody {
	name: string;
	path: string;
	visibility: string;
}

export interface NewIssueRequestBody {
	title: string;
}

export interface NewMRRequestBody {
	source_branch: string;
	target_branch: string;
	title: string;
}

export interface NewBranchRequestBody {
	branch: string;
	ref: string;
}

export interface NewPipelineRequestBody {
	ref: string;
}

export interface UpdateIssueRequestBody {
	state_event: string;
}

export interface GroupPathSuggestResponse {
	exists: boolean;
	suggests: string[];
}

export interface AdditionalProjectOptions {
	issues_access_level?: string;
	repository_access_level?: string;
	merge_requests_access_level?: string;
	forking_access_level?: string;
	builds_access_level?: string;
	wiki_access_level?: string;
	snippets_access_level?: string;
	namespace_id?: string;
}

export interface ProjectRequestData extends AdditionalProjectOptions {
	name: string;
	pages_access_level?: string;
	visibility?: string;
}