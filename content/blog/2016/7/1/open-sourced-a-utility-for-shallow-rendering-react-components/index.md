---
title: "Open sourced: a utility for shallow rendering React components"
date: "2016-07-01"
---

After lots of copy/pasting a small utility that makes shallow rendering a React component a little easier, I've open sourced it. It's called **renderShallow**, and it's now on [Github](https://github.com/ianmcnally/render-shallow) and npm as [render-shallow](https://www.npmjs.com/package/render-shallow).

My motivation for it came when I started noticing that in most of the React component tests I wrote, I simply wanted a shallow rendered component to test. The [ShallowRenderer](https://facebook.github.io/react/docs/test-utils.html#shallow-rendering) API is a little verbose, between the creation and the getting of the output. So I started abstracting that (the .output returned from renderShallow). When I found myself wanting to rerender the component, either because of state or props changes, I added the ability to both re-fetch the output (rerender), or render the element again with new props (rerenderElement).
