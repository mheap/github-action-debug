workflow "New release" {
  on = "push"
  resolves = ["Debug"]
}

action "Debug" {
  uses = "./"
}
