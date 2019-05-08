---
title: "$window.open"
date: "2014-05-21"
---

If you’re doing a $window.open in Angular and getting the error:

`Referencing the Window in Angular expressions is disallowed`

[Turns out](https://github.com/angular/angular.js/issues/4853) you might be returning your $window.open call (especially if you’re writing Coffeescript). So just return `true` after it:

```
$scope.openSomething = ->
  $window.open '/something'
  true

```

And all your errors go away.
