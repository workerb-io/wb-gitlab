// @description Open the merge request
if (options.merge_requests) {
	open(options.merge_requests.html_url);
} else {
	open('https://gitlab.com');
}
