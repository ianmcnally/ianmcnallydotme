---
title: "RIP Nav arrow"
date: "2014-05-07"
---

Before I lay this piece of code to rest, an arrow around the current navigation selection, here it is:

```
setArrowPosition = (target) ->
    parent = target.parent()
    targetX = target.position().left + target.width() / 2
    targetPercent = targetX / parent.width() * 100
    parent.find('.current-arrow').css left : "#{targetPercent}%"

```
