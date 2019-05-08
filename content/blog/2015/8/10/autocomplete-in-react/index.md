---
title: "Autocomplete in React"
date: "2015-08-10"
---

I was looking over some autocomplete/lookahead solutions, and I couldn't find anything that could fit well into a React project.

First off, HTML5 has <datalist>, but it's not well supported. Most libraries and polyfills rely on jQuery. I also took a look at some pre-existing React libraries, but they were labeled "Not production ready" and couldn't handle dynamic options.

So, without further ado, here's my cross-browser compatible demo, dynamically updatable autocomplete demo in React:

<p data-height="268" data-theme-id="0" data-slug-hash="waOyKY" data-default-tab="result" data-user="imcnally" class="codepen">See the Pen <a href="http://codepen.io/imcnally/pen/waOyKY/">Autocomplete in React</a> by Ian McNally (<a href="http://codepen.io/imcnally">@imcnally</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
