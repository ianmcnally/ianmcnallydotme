---
title: "Making BEM easier in Sass"
date: "2015-05-26"
---

I came across a great way to start writing [BEM](https://bem.info) in Sass.

Say you have the following markup:

// HTML
<div class\="container"\>
  <div class\="container\_\_header"\>hey</div\>
</div\>

To make the `container` full-width and the header text pink (which, duh, why wouldn't you?), you'd probably write:

// CSS
.lookahead {
  height: 100%;
}
.lookahead\_\_cancel {
  color: pink;
}

But you can use Sass's `&` to shorcut the repeated `.lookahead`:

// Sass
.lookahead {
  
  height: 100%;
  
  &\_\_cancel {
    color: pink;
  }  
  
}

Which avoids the nasty side effects you normally get with nesting, the typos and the long and ugly selectors (sorry BEM, but you're not easy on the eyes).
