---
title: "Finding files fast in OS X"
date: "2014-05-18"
---

If you’re using the `find` command to search for files via the command line on OS X, might I suggest `mdfind`?

Your normal search:

`find ~/dev -name 'readme.md'`

takes 1.872 seconds

Where the equivalent `mdfind` search:

`mdfind -onlyin ~/dev -name readme.me`

takes 0.13 seconds!

Chant it with me: mdfind! mdfind!
