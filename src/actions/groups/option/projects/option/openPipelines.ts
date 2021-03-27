// @description Open the pipelines page
if (options.projects) {
	open(options.projects.pipelines_url)
} else {
	notify('No Pipelines found', 'error', 3000)
}
