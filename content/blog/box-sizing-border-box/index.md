---
title: "box-sizing: border-box"
date: "2014-05-28"
---

A good [tip](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) for keeping your div sizing sane is to set all elements box-sizing to border-box.

```
*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

```
