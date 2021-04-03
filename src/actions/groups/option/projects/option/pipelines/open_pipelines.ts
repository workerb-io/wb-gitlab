// @description Open pipelines
if (options.projects) {
	open(`${options.projects.html_url}/-/pipelines`)
} else {
	notify('No repository found', 'error', 3000)
}
