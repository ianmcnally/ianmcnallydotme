---
title: "Variables in npm scripts"
date: "2016-02-04"
---

Did you know you can have variables in your package.json? They can be very handy, especially when using npm scripts. Consider the following:

{
  "main": "index.js",
  "scripts": {
    "start": "node $npm\_package\_main"
  }
}

It eliminates the need for copy-pasting. Any key can be referenced, beginning with "$npm\_package\_" and adding an underscore for every level you go down. Say you had a config object, where you stored reusable values, like a domain address, that's passed as an argument in a script:

{
  "main": "index.js",
  "config": {
    "domain": "localhost:8000"
  },
  "scripts": {
    "start": "node $npm\_package\_main --domain $npm\_package\_config\_domain"
  }
}

Super useful!
