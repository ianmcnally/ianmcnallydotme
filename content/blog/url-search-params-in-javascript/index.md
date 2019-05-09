---
title: "Url search params in Javascript"
date: "2018-09-23"
---

I was looking for a way to get a URL parameter in Javascript , and came across Dave Walsh’s [post](https://davidwalsh.name/query-string-javascript) on the URLSearchParams interface. When you create an instance of it, like

// for example URL: ianmcnally.me/index.php?view=article&id=18
// then window.location.search = "?view=article&id=18"

const params \= new URLSearchParams(window.location.search)

You get some really nice methods to call on it, like:

// window.location.search = "?view=article&id=18"
params.get('id')
// "18"

// does it have a key:
params.has('id')
// true

// setting a value
params.set('id', '200')
// ?view=article&id=200
