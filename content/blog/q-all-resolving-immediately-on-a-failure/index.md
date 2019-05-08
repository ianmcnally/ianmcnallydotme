---
title: "$q.all resolving immediately on a failure!"
date: "2014-06-05"
---

Oh, the madness. I spent most of the day figuring out why my batch of async requests was finishing abruptly when one request failed. Turns out it’s a [feature](http://stackoverflow.com/questions/19944922/what-happens-with-q-all-when-some-calls-work-and-others-fail) of `$q.all`.

The term `all` is misleading in that case, isn’t it? I want _all_ of my requests to finish before calling the callbacks.

Sigh. It’s probably time to add a new feature to my [angular deferred library](https://github.com/imcnally/angular-promises).
