---
title: "--rebase"
date: "2014-05-30"
---

I helped a co-worker resolve a botched git rebase today. My advice for it was as follows:

If you’ve got a topic branch you’ve already merged into master, rebasing master onto that branch later will be the stuff of nightmares. You’ll get a conflict against every commit you previously made on your topic branch. At that point, you have to stick with your strategy of merging.

A better way to go about it is to frequently rebase master onto your topic branch:

`git fetch; git rebase origin/master`

Then when you’re done, on master squash your commits:

`git checkout master; git pull --rebase`

`git merge --squash topic-branch`

`git commit -m 'rebasing is better. did this thing on topic-branch'`

Which will be a fast-forward, so there’ll be no merge commit. It’ll make you look smart, have a clean and linear git history, and improve your love life. Two of those things are true.
