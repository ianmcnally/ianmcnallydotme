---
title: 'Making BEM easier in Sass'
date: '2015-05-26'
---

I came across a great way to start writing [BEM](https://bem.info) in Sass.

Say you have the following markup:

```html
<!-- html -->
<div class="container">
  <div class="container__header">hey</div>
</div>
```

To make the `container` full-width and the header text pink (which, duh, why wouldn't you?), you'd probably write:

```css
/* css */
.lookahead {
  height: 100%;
}
.lookahead__cancel {
  color: pink;
}
```

But you can use Sass's `&` to shorcut the repeated `.lookahead`:

```scss
// sass
.lookahead {
  height: 100%;

  &__cancel {
    color: pink;
  }
}
```

Which avoids the nasty side effects you normally get with nesting, the typos and the long and ugly selectors (sorry BEM, but you're not easy on the eyes).
