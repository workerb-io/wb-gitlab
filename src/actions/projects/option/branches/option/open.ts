if (options.branches) {
	open(options.branches.html_url)
} else {
	notify('No branch found', 'error', 3000)
}
