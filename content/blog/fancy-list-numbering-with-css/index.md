---
title: "Fancy list numbering with CSS"
date: "2017-11-09"
---

It's not every day that I'm styling a list like:

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/5a04892053450a192c20b2d7/1510246691325/Screen+Shot+2017-11-09+at+11.57.25+AM.png.25+AM.png?format=original)

But today was. So I came across a [wonderful piece](https://css-tricks.com/numbering-in-style/) on CSS Tricks that pointed me in the right direction.

On the list container (an `<ol>`), I added the CSS rule:

```
// let's pretend my <ol> has a class 'ol'
.ol {
  counter-reset: my-list-counter;
}
```

Which acts as a counter set/reset.

And on each item (`<li>`), I needed to increment the counter _and_ set the content from the current counter result. I chose to format it as decimal-leading-zero (the second argument to counter; any valid list-style-style will do). All together it looks like:

```
.li:before {
  content: counter(my-list-counter, decimal-leading-zero);
  counter-increment: my-list-counter;
}
```
