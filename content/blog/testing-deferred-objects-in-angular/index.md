---
title: "Testing deferred objects in Angular"
date: "2014-10-29"
---

Consider the two code blocks below. They’re unit testing an asynchronous function `service.getThing`, that returns an initial promise, to be resolved at a later time.

So, try and spot the difference between the blocks. It’s a subtle detail that no one else eluded to on the web, that I could find at least. A careful read of Angular’s $q docs finally did it for me. (For the impatient, the correct solution is _B_).

_A_

```
thing = service.getThing() # returns deferred.promise
deferred.resolve someResponse # manual resolve, behind the scenes of `getThing`
$rootScope.$apply()
expect thing
  .toEqual expectedThing

```

_B_

```
thing = null
service.getThing() # returns deferred.promise
  .then (response) -> thing = response
deferred.resolve someResponse # manual resolve, behind the scenes of `getThing`
$rootScope.$apply()
expect thing
  .toEqual expectedThing

```

_A_ is what I started with. I’m manually resolving the async request behind `service.getThing`. At this point, `thing` is a promise, and when I call `$rootScope.$apply`, `thing` should be updated to the resolve value `someResponse`.

That didn’t work. At that point, `thing` is still a promise. At that point, I was cursing the rootScope apply gods.

So, check out _B_. I’m initializing the response value `thing`, and updating it in a callback to `service.getThing`. What I’m not doing is reusing the promise. And this works. Do the rootScope apply, and `thing` is now your resolve value `someResponse`.

It’s subtle and a little bit of magic, but we made it. Good job, you.
