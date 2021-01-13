if (options.groups) {
	//notify("group id: "+options.groups.id,"success",3000)
	//open(`https://gitlab.com/api/v4/groups/${options.org.id}/projects`)
	open(`${options.groups.html_url}`)
} else {
	notify('No repository found', 'error', 3000)
}
