// @description Open the issue in Gitlab
if (options.issues) {
	open(options.issues.html_url)
} else {
	open('https://gitlab.com')
}
