---
title: ""
date: "2014-05-30"
---

\[caption id="" align="alignnone" width="548.0"\]![  This week: make a face look like it’s chewing. I got well acquainted with animation functions, to swap two SVGs (one wide mouthed, one narrow). 
<div></div>
 It’s animating the color: 
<div></div>
  @keyframes chew
  0%
    color: inherit
  100%
    color: transparent
  
<div></div>
 And the SVG classes get the animation, with opposing directions: 
<div></div>
  .wide-mouth
  animation-name: chew
  animation-duration: 0.28s
  animation-iteration-count: infinite
  animation-direction: forwards
  animation-timing-function: steps(2, start)
.narrow-mouth
  # same as above...
  animation-direction: backwards
  
<div></div>
 Since the color became halved, there was some manual color matching instead of inheriting the normal color: 
<div></div>
  color: adjust-color(adjust-color($active_blue, $saturation: 61, $lightness: -24), $blue: 20, $green: 20)
  
<div></div>
 And that’s why I’m glad the project’s using SASS.  ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b36e4b0fca745eb3788/1430616946555//img.gif) This week: make a face look like it’s chewing. I got well acquainted with animation functions, to swap two SVGs (one wide mouthed, one narrow).

It’s animating the color:

@keyframes chew 0% color: inherit 100% color: transparent

And the SVG classes get the animation, with opposing directions:

.wide-mouth animation-name: chew animation-duration: 0.28s animation-iteration-count: infinite animation-direction: forwards animation-timing-function: steps(2, start) .narrow-mouth # same as above... animation-direction: backwards

Since the color became halved, there was some manual color matching instead of inheriting the normal color:

color: adjust-color(adjust-color($active\_blue, $saturation: 61, $lightness: -24), $blue: 20, $green: 20)

And that’s why I’m glad the project’s using SASS. \[/caption\]
