---
title: "Tooltips with templates"
date: "2014-12-17"
---

I’m working on an Angular project that uses [Angular UI Bootstrap](http://angular-ui.github.io/bootstrap/), and I wanted to improve the experience of the using the directive. To start, I wanted to use their support for HTML in a string. Out of the box, it isn’t a great solution, especially when we have a template cache for all our templates. Here’s the API I wanted, and that I ended up with:

`<hint="path/to/hint.html">`

Where hint, the directive, takes a the template URL.

So here’s what I had to do:

## Replace attributes on the directive.

I had to add tooltip attributes on any element, so I found a solution using a custom compile function:

```
app.directive 'hint',
['$compile', '$templateCache', 'Triggers',
($compile, $templateCache, Triggers) ->
  priority : 1001
  compile : (element) ->
    element.attr 'tooltip-html-unsafe', $templateCache.get element.attr 'hint'
    element.attr 'tooltip-placement', element.attr('hintPlacement') or 'bottom'
    element.attr 'tooltip-trigger', Triggers.OPEN
    element.removeAttr 'hint'
    fn = $compile element
    ($scope) -> fn $scope

```

As you can see, I’m adding custom attributes and removing `hint` to prevent a loop. Also important is `priority`, which sets this directive as one of the first to run on the element.

You’ll notice I used a custom trigger, so I can programmatically open and close the tooltip, which is setup in the module config, using `$tooltipProvide`r:

```
app
.constant 'Triggers',
  OPEN : 'openTooltip'
  CLOSE : 'closeTooltip'
.config ['$tooltipProvider', 'Triggers', ($tooltipProvider, Triggers) ->
  customTriggers = {}
  customTriggers[Triggers.OPEN] = Triggers.CLOSE
  $tooltipProvider.setTriggers customTriggers # open trigger : close trigger
]

```

## Getting attributes off a directive without isolating scope

One technique you can use to pass `$scope` evaluated attributes into your directive safely, or contain them, is to isolate the scope of the directive. On the tooltip, I wanted to watch the value of an attribute, `show-hint`, which, when truthy, would launch the tooltip. Here’s what I came up with:

`@scope.$watch @attrs.showHint, (show) => @timeout(@open, 0) if show`

This line runs in the constructor function for the directive’s controller. If the expression you attach to show-hint, ala:

`<hint="template.html" show-hint="SomeController.shouldIShowTooltip()">`

whenever `SomeController.shouldIShowTooltip()` returned `true`, the tooltip would launch.

## Programatically launching the tooltip

Normally, tooltips launch on mouse enter or hover. I wanted to override those. Like I showed above, you can specify the open and close events on `$tooltipProvider`, so the open and close functions for the directive just run `element.trigger`:

```
class HintController

  open : =>
    @element.trigger @Triggers.OPEN

  close : ->
    @element.trigger @Triggers.CLOSE

```

### Try it yourself

That’s it. Check it out for real on Codepen:

[http://codepen.io/imcnally/pen/Pwzbrg](http://codepen.io/imcnally/pen/Pwzbrg)
