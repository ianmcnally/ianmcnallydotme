---
title: "Compound media queries"
date: "2014-07-26"
---

Today I learned you _can_ make compound media queries, say if you wanted to make a `<section>` full height when the screen is both tall and wide enough for that to make sense:

```
@media only screen and (min-height: 620px) and (min-width: 768px) {
  section {
    min-height: 100vh;
  }
}

```

That can turn this:

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b35e4b0fca745eb36ef/1430616929343//img.png.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b35e4b0fca745eb36f2/1406396400000/)

and this:

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b35e4b0fca745eb36f5/1430616927143//img.png)

:bow:
