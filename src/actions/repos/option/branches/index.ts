if (options.repos) {
	open(`${options.repos.html_url}/-/branches`)
} else {
	notify('No repository found', 'error', 3000)
}
