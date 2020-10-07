if (options?.repos && options?.pipelines) {
	open(options.pipelines.html_url)
} else {
	open('https://gitlab.com')
}
