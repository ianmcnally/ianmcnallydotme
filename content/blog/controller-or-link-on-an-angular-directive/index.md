---
title: "Controller or Link on an Angular directive"
date: "2014-12-22"
---

Came across a big gotcha moment today. Turns out, controllers aren’t supposed to be used for DOM manipulation of a directive; they’re only intended for reusable directive logic. I found this out the hard way on a [tooltip](http://ia-n.com/post/105451132072/tooltips-with-templates) directive by inject $element, and expecting it to be whichever element I put the directive on. Problem is, the controller is only ever instantiated once, so it bound to the first element I put it on. I ended up using the compile function, since I needed to modify how the element compiles, otherwise I’d have used the link function.

To test all the logic independently of the directive still, I created a factory that provided a controller, and instantiated it in the compile function, taking in scope, element and attributes.
