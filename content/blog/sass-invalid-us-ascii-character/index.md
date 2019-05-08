---
title: "SASS Invalid US-ASCII character"
date: "2014-07-28"
---

Yikes! Today, I was getting a SASS error:

```
Syntax error: Invalid US-ASCII character "\xE2"
    on line 128 of app/stylesheets/pages/_toggle.sass

```

For using:

```
&:after
  content: "•"

```

At the top of where I used it (\_toggle.sass), I added:

```
@charset "UTF-8"

```

And compilation is working again.

[Props.](https://github.com/thoughtbot/bourbon/issues/224)
