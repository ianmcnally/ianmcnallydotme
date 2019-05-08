---
title: "A centered modal with a backdrop"
date: "2014-07-31"
---

If you want a centered modal with a backdrop, your markup should look like:

```
<div class="modal>
  <div class="modal-content">
    Super awesome modal stuff
  </div>
</div>

```

And your style looks like:

```
.modal
  position: fixed
  top: 0
  left: 0
  bottom: 0
  background-color: rgba(0, 0, 0, 0.4)
  z-index: 1
  display: block

  .modal-content
    z-index: 9999
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: block
    min-height: 30rem
    min-width: 30rem

```

The relation between top, left, and transform is the magic sauce for centering.

Tada:

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b35e4b0fca745eb36e2/1430616927394//img.png)
