---
title: "Event pooling in React"
date: "2015-08-18"
---

I've been [writing](http://codepen.io/imcnally/pen/waOyKY) a lookahead/autocomplete component in React, with a debounced onChange. I started to notice that my value changes would be out of sync with the debounced function, but work fine if there was no debounce. As of three days ago, React finally adding documentation on how they pool events. [Read on](https://github.com/facebook/react/pull/4634).

The long and short? It's there for performance. If you need to access the event asynchronously, call `event.persist()`.
