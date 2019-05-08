---
title: "Grid layouts in flex box"
date: "2015-02-26"
---

Some colleagues brought up layouts today. The team just started using flex box instead of Bootstrap’s grid (yey!), and someone mentioned this article:

[Don’t use flexbox for page layout](http://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/)

So, I created a pen to try and prove Jake wrong (no offense, Jake):

[My pen](http://codepen.io/imcnally/pen/RNJoWz?editors=110)

By using flex-basis, I effectively set a min width for the containers that shouldn’t grow. Then the main container fills the rest of the space. For content in the main container, you could just have a max-width container.
