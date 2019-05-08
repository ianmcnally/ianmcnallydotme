---
title: "Modernizr in Angular templates"
date: "2014-05-22"
---

Want to use Modernizr in your templates? It’s pretty handy:

```
<div ng-show="Modernizr.someFeature"></div>

```

Attach Modernizr to $rootScope:

```
$rootScope.Modernizr = Modernizr

```

And you’re good to go.
