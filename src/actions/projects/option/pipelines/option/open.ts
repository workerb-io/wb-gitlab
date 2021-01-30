// @description Open the pipeline
if (options?.projects && options?.pipelines) {
	open(options.pipelines.html_url)
} else {
	open('https://gitlab.com')
}
