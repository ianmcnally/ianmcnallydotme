---
title: "My advice for Angular and SASS"
date: "2014-08-01"
---

On a recent project, I was coming up with a style guide. I included these as tips, since they’re really just a collection of best practices I’ve incorporated or come up with having worked in a coffee script, angular, SASS stack for a couple years now.

### Coffeescript / Angular

1. Use classes for controllers.
2. Because your classes are controllers, it’s almost never necessary to attach things to $scope.
3. CS should be minified for non-dev environments, so use the array syntax in module definitions.
4. There are plenty of Angular module types. Use them, and keep those concerns separate!
    
    - Controllers, Services, Factories, Constants, Filters, Directives
5. Using jQuery directly isn’t necessary. Selectors can be gotten with `angular.element()`.
    
    - In case we swap out the DOM API at any point.
6. Coffeelint does the heavy CS style checking, but still, keep it clean and tight.
7. “Private” class methods should lead with an underscore.
8. Name a controller by purpose, i.e., NewToggle, and name the instance (`controllerAs`) name + controller, i.e., NewToggleController.

### SASS

1. Nesting more than three levels deep is stinky and should be avoided.
2. Each file should have a containing block, with all styles and children elements nested under.
3. You will never, ever need an ID. Classes and pseudo selectors FTW.
4. Get hip to [flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/); it’s the future.
5. When using flex, and it’s align and justify properties, you probably don’t need to float things.
6. Pages, widgets and directives should get their own stylesheet!
7. Don’t specify values in pixels (`px`). Use `%` or `rem`.

### HTML / Templates

1. Break up your templates and import them with ng-include.
    
    - It’s more reusable this way, and template importing is super fast since they’re compiled to JS strings (using a template caching [plugin](https://www.npmjs.org/package/grunt-angular-templates)).
2. Directives are awesome and the best way to customize behavior of an element.
3. There’s a crazy amount of built-in Angular directives and filters. And they’re hard to find in the documentation.
