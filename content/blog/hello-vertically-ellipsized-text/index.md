---
title: "Hello, vertically ellipsized text!"
date: "2014-11-06"
---

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b35e4b0fca745eb3662/1430616928453//img.png)

Isn’t that something?

The style is rather simple:

```
overflow: hidden
text-overflow: ellipsis
display: -webkit-box
-webkit-box-orient: vertical
-webkit-line-clamp: 6

```

Gone are the old days of:

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b35e4b0fca745eb3665/1430616931696//img.png)

```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap

```
