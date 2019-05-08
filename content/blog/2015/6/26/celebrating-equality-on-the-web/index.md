---
title: "Celebrating equality on the web"
date: "2015-06-26"
---

I joined in the web development community's celebration of the US ruling for marriage equality by adding a rainbow to [Farely](http://farely.io) today.

\[caption id="" align="alignnone" width="642.0"\]![ Celebrating equality on Farely ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/558dce61e4b0eb531c03652d/1435356773479/farely-rainbow.jpg) Celebrating equality on Farely \[/caption\]

If you want it to, here's the CSS ([source](http://dev.w3.org/csswg/css-images-4/)):

body:before {
  content: "";
  position: fixed;
  z-index: \-1;
  top: 0;
  bottom: 0;
  right: 0;
  width: 60px;
  background-image: linear-gradient(to right, red 5%, orange, yellow, green, blue, purple 95%)
}
