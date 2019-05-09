---
title: "Branching off another branch in git"
date: "2019-01-15"
---

A git workflow problem recently surfaced on my team. We branched (let's call it branch B) off a branch (branch A) to keep working before A went into master.

To keep branch A & B up to date with master, we rebased master onto both A & B. This created conflicts between A & B when A went to master.

What would have worked a lot better was rebasing master only onto A, and rebase A onto B, like so:

![An ideal workflow for branching off branches in git ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/5c3dfa66758d469a54f90d3c/1547565680739/Screenshot+2019-01-15+10.13.54.png.54.png?format=original)

If you follow the above flow, you’ll get a clean merge of B once A is on master.
