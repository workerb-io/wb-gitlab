if (options.projects) {
  open(options.projects.html_url);
} else if (args.length > 0) {
  open(`https://gitlab.com/search?search=${args.filter(Boolean).join(' ')}`);
} else {
  open('https://gitlab.com');
}
