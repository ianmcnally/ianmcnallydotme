---
title: "Angular Promises 0.2.0"
date: "2014-06-06"
---

I’ve just updated my library for deferred objects in Angular. Now you can wait for all your asynchronous tasks to be complete before continuing!

Presenting:

`Deferred.all` - Returns a single promise, which is fulfilled when all `promises` are resolved or rejected.

`Deferred.until` - Returns a single promise, which is fulfilled when all `promises` are resolved or until a promise in `promises` is rejected.
