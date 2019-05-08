---
title: "Vertical alignment"
date: "2014-05-19"
---

Vertical alignment in CSS is as obtuse as its reputation suggests. I’m a huge fan of Flexbox, and I’m excited that it’s in the latest round of browsers’ support. In the mean time, I came [across](http://css-tricks.com/centering-in-the-unknown/) a great technique which involves a ghost element. Here are the essentials:

```
.parent {
    text-align: center;
}

.parent:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em; /* Spacing magic */
}

.centered {
    display: inline-block;
    vertical-align: middle;
}

```

It works great, and avoids the funky behavior that a table-styled element would have.
