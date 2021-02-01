// @description Open the project
if (options.projects) {
	open(options.projects.html_url)
} else {
	notify('Unable to open the project', 'error', 3000)
}
