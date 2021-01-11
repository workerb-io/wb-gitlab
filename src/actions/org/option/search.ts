if (options.org) {
	notify("group id: "+options.org.id,"success",3000)
	open(`https://gitlab.com/api/v4/groups/${options.org.id}/projects`)
} else {
	notify('No repository found', 'error', 3000)
}
