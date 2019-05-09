---
title: "Feature support in browsers"
date: "2017-12-06"
---

If you find yourself needing to test feature support in browsers, [Dive Into HTML5](http://diveintohtml5.info/everything.html) has a complete list of checks you can run.

In my case, can I use `<details>`? Let's find out with:

```javascript
'open' in document.createElement('details')
```
