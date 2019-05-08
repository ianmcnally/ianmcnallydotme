---
title: "Position:fixed and z-index"
date: "2015-01-09"
---

A Safari bug came my way recently. A [progress bar](http://ia-n.com/post/107336366832/found-a-great-progress-bar-library-for-angular) with `position: fixed` was hidden behind an element. I first tried to solve it with `z-index`, but that wasn’t getting me anywhere. Lo and behold, Safari doesn’t respect `z-index` of a `position: fixed` element. Instead, I had to `transform: translateZ()` ([props](http://stackoverflow.com/questions/18271460/fixed-positioning-z-index-issue-in-mobile-safari)). In my case, I had to translate 100px!

Crazy Safari.
