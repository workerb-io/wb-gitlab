// @description Search all groups

const argsArr = args.filter(Boolean);

let searchString: string = argsArr.join(' ');

if (!searchString) {
	searchString = prompt('Enter the Search String');
}

if (searchString) {
	open(`https://gitlab.com/dashboard/groups?filter=${searchString}`);
} else {
	open('https://gitlab.com/dashboard/groups');
}
