// @description Open branches
if (options.projects) {
	open(`${options.projects.html_url}/-/branches`)
} else {
	notify('No repository found', 'error', 3000)
}
