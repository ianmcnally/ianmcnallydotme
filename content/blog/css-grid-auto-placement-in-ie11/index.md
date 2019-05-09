---
title: "CSS grid auto placement in IE11"
date: "2017-10-19"
---

I found out the hard way that IE11's implementation of CSS Grid (the old spec) doesn't support [auto placement](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout). It was the one feature my project needed to maintain the same layouts in IE11 as the evergreen browsers.

So I came up with a "polyfill" script that finds grid containers, and on each of its rows, it derives their column spans and positioning, and sets their IE-specific css properties.

There are a few places to tweak if you want to drop this in your project – the logic for figuring out column spans checks for css classes, with each span having their own class, which is specific to my use case. And your project might not also care about manually adding gutters. My hope is that this will at least get you going in the right direction.

Code [here](https://gist.github.com/ianmcnally/3bc8fa64dc1fb35e47deeb7e449265ce).
