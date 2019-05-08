---
title: "transition syntax"
date: "2014-08-06"
---

I use [Dash](http://kapeli.com/dash), and it’s great. But you know what doc is wrong? The CSS transition one! It’s pulled from the Mozilla docs, and it’s not up to date!

So, for my sanity and yours:

```
transition: time timing-function property delay

```

i.e.,

```
transition: .25s ease-in-out opacity 0

```

_Note: .25s is \_the_ magic number\_

Also, if you’re not hip to it, check out [autoprefixer](https://github.com/ai/autoprefixer)

– Ian out.
