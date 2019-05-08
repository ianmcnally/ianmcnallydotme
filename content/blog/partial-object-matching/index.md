---
title: "Partial object matching"
date: "2014-07-24"
---

Oh [UnderscoreJS](http://underscorejs.org), you’ve done it again. I was looking to test partial matching from objects, i.e.,

Is `{id : 1}` in `{id : 1, name : 'ian'}`

Turns out with `_.matches` you can do:

```
partial = {id : 1}
complete = {id : 1, name : 'ian'}
_.matches(partial)(complete)
// returns true

```

From the docs:

> \_.matches(attrs)
> 
> Returns a predicate function that will tell you if a passed in object contains all of the key/value properties present in attrs.
> 
> var ready = \_.matches({selected: true, visible: true});
> 
> var readyToGoList = \_.filter(list, ready);
