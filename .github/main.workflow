workflow "New workflow" {
  on = "push"
  resolves = ["publish to github-pages"]
}

action "publish to github-pages" {
  uses = "./action-git"
  secrets = ["GITHUB_TOKEN"]
  runs = "git"
  args = "subtree push --prefix build origin gh-pages"
}
