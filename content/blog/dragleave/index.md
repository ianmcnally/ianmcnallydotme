---
title: "dragleave"
date: "2014-05-14"
---

I had an element that was listening for `dragenter` and `dragleave`. Turns out `dragleave` would be fired even if you hadn’t left the element. When a drag reached the boundary of the element’s child, it fired `dragleave`. To get around that, I applied this CSS to the children:

```
.child
    pointer-events: none

```

and voila! No more events fired on the child.

As it turns out, I found [this](http://stackoverflow.com/questions/10867506/dragleave-of-parent-element-fires-when-dragging-over-children-elements) Stack Overflow post after I’d figured it out.
