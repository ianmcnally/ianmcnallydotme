---
title: ""
date: "2014-11-05"
---

\[caption id="" align="alignnone" width="822.0"\]![  Making some magic with  Waypoints  today. 
<div></div>
 How 
<div></div>
 The code 
<div></div>
  element.waypoint
  handler : (direction) ->
    return if direction isnt 'down'
    element.addClass 'in-view'
  context : attrs.waypoint
  offset : '95%'
  triggerOnce : true
  
<div></div>
 The style 
<div></div>
  .container
  overflow: hidden
  opacity: 0
  transition: opacity .25s ease-in-out
  .left
    transform: translate3d(-100%, 0, 0)
  .right
    transform: translate3d(100%, 0, 0)
  &.in-view
    opacity: 1
    .left, .right
      transform: translate3d(0, 0, 0)
      transition: transform .25s ease-in-out
  
<div></div>
 The waypoint plugin (in this case, activated by an Angular directive) is adding a class to the container, which causes a transition of the transform on the items, as well as the opacity of the container. Smooth as butter.  ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b35e4b0fca745eb366d/1430616945098//img.gif) Making some magic with Waypoints today.

How

The code

element.waypoint handler : (direction) -> return if direction isnt 'down' element.addClass 'in-view' context : attrs.waypoint offset : '95%' triggerOnce : true

The style

.container overflow: hidden opacity: 0 transition: opacity .25s ease-in-out .left transform: translate3d(-100%, 0, 0) .right transform: translate3d(100%, 0, 0) &.in-view opacity: 1 .left, .right transform: translate3d(0, 0, 0) transition: transform .25s ease-in-out

The waypoint plugin (in this case, activated by an Angular directive) is adding a class to the container, which causes a transition of the transform on the items, as well as the opacity of the container. Smooth as butter. \[/caption\]
