---
title: "Scrolling a page with a background image"
date: "2015-04-24"
---

I noticed some jank (a.k.a. non-smoothness) while scrolling a page with a background image.

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b34e4b0fca745eb3598/1430616971554//img.png)

The performance looked like this (green is browser paints) :

At the start of scroll, performance hovered a little too closely to 60 frames per second.

The solution was to change the **background-attachment**. By setting it to fixed, you don’t allow the background image to scroll with the page. This means the browser doesn’t have to rasterize and paint the image while you’re scrolling.

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b34e4b0fca745eb359b/1430616927632//img.png)

You’re left with a nice, flat timeline:

tl;dr

\[container-with-bg-image\] {
  background-attachment: fixed;
}

[Further reading](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
