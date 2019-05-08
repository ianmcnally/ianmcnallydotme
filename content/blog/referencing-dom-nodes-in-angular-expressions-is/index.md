---
title: "Referencing DOM nodes in Angular expressions is disallowed!"
date: "2014-06-02"
---

Adding to the list of more Angular [quirks](http://ia-n.com/post/86424927182/window-open), I stumbled on this error:

`Referencing DOM nodes in Angular expressions is disallowed!`

When having a callback to an `ng-click` that removes a class from a DOM element:

```
onClick = ->
  element.removeClass 'some-class'

```

The fix? Similar to the post referenced above, just return something other than the function call:

```
onClick = ->
  element.removeClass 'some-class'
  return

```

Side note: Isn’t that a rather scolding error message? It’s like getting yelled at for pushing someone on the playground.
