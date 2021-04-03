// @description Open
if (options.groups) {
	open(options.groups.html_url)
} else {
	notify('Unable to open the group', 'error', 3000)
}
