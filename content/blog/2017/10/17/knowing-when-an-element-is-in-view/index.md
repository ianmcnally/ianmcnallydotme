---
title: "Knowing when an element is in view"
date: "2017-10-17"
---

I started working on a lazy image loading component today. There are several pre-existing solutions on the internet, but nothing I found took a modern approach. That is, there's a new API called the [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) that makes in-view checking really simple.

First, you create the observer with a callback:

```
const observer = new IntersectionObserver(callback)
```

Then start observing a DOM node (e.g., one with ID my-element):

```
observer.observer(document.getElementById('my-element'))
```

Now, when that element goes in or out of view, the callback (above), is fired with an array of Intersection Observer entries (one entry for each item you're observing).

So, when the callback gets called, you can check if the element is intersecting:

```
// in the callback
const myCallback = (entries) => {
  const myElementEntry = entries[0]

  if (myElementEntry.isIntersecting) {
    // it is in view, do something!
  }
}
```

And when you want to stop listening, you can either remove the listener on that element:

```
observer.unobserve(document.getElementById('my-element'))
```

Or you can completely remove the listener (and all entries), with disconnect:

```
observer.disconnect()
```

Which is what I chose to do once my image element was in view.

[Sample component on Github](https://gist.github.com/ianmcnally/4b68c56900a20840b6ca840e2403771c)
