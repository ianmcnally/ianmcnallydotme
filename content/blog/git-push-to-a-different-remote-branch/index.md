---
title: "Git push to a different remote branch"
date: "2014-08-08"
---

If you want to push a local branch to a differently named remote branch:

`git push remote local_branch:remote_branch`

i.e., if I wanted to push my local branch named `supercool` to `origin other cool` I would:

`git push origin supercool:othercool`

[Props](http://blog.supermatter.com/post/761870270/git-push-a-local-branch-to-a-different-remote-branch)
