---
title: "<a> in Angular"
date: "2014-09-29"
---

Today, I was working on making a Rails & Angular project HTML 5 URL compatible. I arrived at a snag, where my anchor tags weren’t causing a page change when I wanted them to.

The fix was to make sure the `<a>` tags had `target = '_self'`, so Angular would stop absorbing the clicks.

[Props.](http://stackoverflow.com/questions/16336536/how-do-i-mix-links-that-trigger-page-refreshes-with-angulars-html5mode-true)
