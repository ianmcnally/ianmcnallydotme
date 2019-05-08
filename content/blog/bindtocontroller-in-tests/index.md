---
title: "bindToController in tests"
date: "2015-03-26"
---

In an Angular directive, you can use the `bindToController` property to set your $scope injections on the controller instance. It all works great, but things get murky when it comes to testing.

If you want to pass in mock data in a directive controller during a test, you have to modify how you instantiate the controller. It turns out a third argument to $controller is boolean called `later` that’ll return a function.

On that function’s `instance` property, you can add your mock injections. Then when you invoke the function, you’ll get the controller instance with your mocks attached.

A quick example:

### controller

```
angular.module('todoapp', [])
.directive('todoList', function(){
  scope: {
    items: '='
  },
  bindToController: true
  controller: 'Todo'
})
.controller('Todo', function(){
  var controller = this;

  controller.amountOfTodos = function(){
    return controller.items.length;
  };
});

```

### test

```
describe('getAmountOfTodos', function(){
    var controller = $controller('Todo', {}, true);
    angular.extend(controller.instance, {
      items: [
          'Take out laundry'
      ]
    });
    controller = controller();

    it('returns the count of todo items', function(){
      expect(controller.getAmountOfTodos()).toEqual(1);
    });
});

```

[Props.](http://stackoverflow.com/questions/25837774/bindtocontroller-in-unit-tests) and [open issue](https://github.com/angular/angular.js/issues/9425).
