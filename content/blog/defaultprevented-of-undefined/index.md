---
title: "'defaultPrevented' of undefined"
date: "2014-05-07"
---

Stuck on this today, with Angular:

`Cannot read property 'defaultPrevented' of undefined`

Turns out someone had an errant jasmine spy on $rootScope.$broadcast. Just put `.andCallThrough()` on the spy, and bam! Errors gone.
