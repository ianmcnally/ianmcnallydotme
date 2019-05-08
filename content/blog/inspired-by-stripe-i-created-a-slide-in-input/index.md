---
title: ""
date: "2014-06-16"
---

\[caption id="" align="alignnone" width="456.0"\]![  Inspired by  Stripe , I created a slide-in input form. Turns out, it’s straight forward: 
<div></div>
  .input-container
<div></div>
  perspective: 800px
<div></div>
  .title
    transform: rotateX(270deg)
    opacity: 0
    height: 0px
    -webkit-backface-visibility: hidden
    transition: all .25s ease-in
    transform-style: preserve-3d
    transform-origin: top center
<div></div>
  .title-show
    transform: rotateX(360deg)
    opacity: 1
    height: auto
  
<div></div>
 The transition is triggered by adding the class  title-show  when you want to display the input box.  ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b36e4b0fca745eb374c/1430616926181//img.gif) Inspired by Stripe , I created a slide-in input form. Turns out, it’s straight forward:

.input-container

perspective: 800px

.title transform: rotateX(270deg) opacity: 0 height: 0px -webkit-backface-visibility: hidden transition: all .25s ease-in transform-style: preserve-3d transform-origin: top center

.title-show transform: rotateX(360deg) opacity: 1 height: auto

The transition is triggered by adding the class title-show when you want to display the input box. \[/caption\]
