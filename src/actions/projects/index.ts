if (args[0]) {
	open(`https://gitlab.com/dashboard/projects?sort=latest_activity_desc&name=${args[0]}&sort=latest_activity_desc`)
} else {
	open('https://gitlab.com/dashboard/projects')
}
