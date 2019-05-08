---
title: "My git workflow"
date: "2014-06-23"
---

When starting a story, bug fix, etc., create a branch of master:

```
git checkout -b sometopicbranch

```

Make small, incremental commits on your topic branch, i.e.:

```
git commit -m 'refactor this one thing'
git commit -m 'refactor this other thing'
git commit -m 'add new spec'

```

Rebase master onto your topic branch (do this frequently to avoid merge conflicts):

```
git fetch
git rebase origin/master

```

When you’re ready for master, do a squashing merge and add your formal commit:

```
git checkout master
git pull --rebase
git merge --squash sometopicbranch
git commit -a -m 'story name? - very descriptive message about your fix'
git push origin master

```

### Why

Isolating your work so you don’t accidentally reset master from origin/master and lose your work.

You can switch contexts easily.

Having small, personally helpful commits and commit messages allows you to save and iterate on (and maybe revert) your work more frequently.

Pushing branches remotely allows your pair, or someone taking over your work to get your changes. This is especially important if you pair off someone’s computer.

You can merge your changes over as one unified commit and everyone will think you’re amazing for getting that done in one commit.
