// @description Search all projects

const argsArray = args.filter(Boolean);

let projectSearchString: string = argsArray.join(' ');

if (!projectSearchString) {
	projectSearchString = prompt('Enter the Search String');
}

if (args[0]) {
	open(`https://gitlab.com/dashboard/projects?sort=latest_activity_desc&name=${projectSearchString}&sort=latest_activity_desc`)
} else {
	open('https://gitlab.com/dashboard/projects')
}
