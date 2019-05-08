---
title: "TIL $injector"
date: "2014-05-12"
---

I’d been programmatically injecting dependencies in an angular app by creating a new injector instance:

`$injector = angular.injector [moduleName]`

But it turns out you can inject `$injector`, your module’s instance of `angular.injector`, and call it as you normally would:

```
app.service 'myService', ($injector) ->
    $injector.get 'someinjection'

```
