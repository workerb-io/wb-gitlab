if (options.project) {
	open(options.project.html_url)
} else {
	notify('Unable to open the project', 'error', 3000)
}
