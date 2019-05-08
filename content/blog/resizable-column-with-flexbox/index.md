---
title: "Resizable column with flexbox"
date: "2014-07-23"
---

I’ve been using [Flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/) extensively on a new project, and I wanted to make a resizable column. I started with the [jQuery UI’s resizable](http://jqueryui.com/resizable/), and wrapped it in a directive (more to come on that):

$.resizable works by modifying the width of an element (among other things). That doesn’t fly with flex box. What does work is modify the flex column’s `flex-basis` property. By echoing the `width` adjustment to the div on the `flex-basis`, you get the resizing! Check out the directive:

```
app.directive 'dragToResize', ->
  ($scope, element, attrs) ->
    element.resizable handles : 'ne'
      .resize ->
        width = @style.width
        element.css
          'flex-basis' : width
          '-webkit-flex-basis' : width

```

First, I initialize the element resizable with one handle (the position of the handle is being controlled by css, below). On resize, I’m grabbing the `width`, and updating `flex-basis`.

For the drag handle, $.resizable appends a child element with the class `.ui-resizable-handle`. From there, we can place and style it anywhere. The whole directive’s SASS looks like:

```
[drag-to-resize]
  position: relative
  // overriding plugin behavior
  height: 100%!important
  top: 0!important
  bottom: 0!important

  .ui-resizable-handle
    height: 100%
    width: .5rem
    background-color: transparent
    position: absolute
    top: 0
    right: 0
    cursor: col-resize

```

This way, the drag handle sits all along the right of the div, and when you hover over it, the cursor changes and you can drag to your heart’s content.

One unfortunate note is the need for `!important` on the height, top and bottom of the resizable element. The plugin modifies these values inline, and they make a flex container look mighty ugly. But enough glum, check it out in action:

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b35e4b0fca745eb36fe/1430616929546//img.gif)
