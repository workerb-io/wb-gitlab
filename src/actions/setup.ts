const token = prompt("Please provide your GitLab token");

if (!token) {
  notify("Trello Secrets can't be empty", "error", 3000);
} else {
  setVar("trello", [
    {
      name: "GITLAB_PERSONAL_TOKEN",
      value: token,
    },
  ]);
  notify("Secrets added successfully", "success", 3000);
  reIndex();
}
