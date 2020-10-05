if (options.repos) {
  open(options.repos.html_url);
} else {
  notify("No repository found", "error", 3000)
}
