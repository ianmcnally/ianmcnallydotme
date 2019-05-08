---
title: "Choosing a javascript framework"
date: "2015-06-03"
---

I gave a talk recently on why a client might want to adopt a javascript framework. They were writing their own presentation layer, and were debating adding either Angular or React. Here are the notes for my presentation.

_Note: Excuse the contrived "datas" examples everywhere. I modified it to keep the company secret._

## Benefits of using a widely-adopted framework

- Less time spent teaching new hires
- Do more, write less
- Maintainability & knowledge sharing
- Community support for questions
- Plugins
- Testing
- 3rd party tools are well vetted for bugs, speed
- reduce AJAX calls, reduce number of trips, potential failure
    - share data between views
    - dynamic templates
    - faster page transitions
- would make transitioning to single-page app easy (if/when)

## What Angular does well

- Dependency injection
- Highly testable
- Separation of concerns
- Component/module pattern; app is a composition of modules
- Two-way data binding
- Declarative HTML
- Templates rendering to JS strings behind the scenes
- Great ecosystem

https://angular.io/docs/js/latest/quickstart.html

## What Angular doesn’t do well

- Keep view and controller close
- Different provider types are functions that return functions
- Doesn’t feel like writing Javascript
- Upgrade path to version 2.0

## What React does well

- View and controller code in one file
- Promotes uni-directional data flow
- Follows existing javascript patterns
- Component-based
- Can be easily dropped into any existing project

https://facebook.github.io/react/docs/why-react.html

## What React doesn’t do well

- Unstable ecosystem
- Being the “V” in MVC is limiting

## Other JS frameworks

- Polymer & web components
- Ember (testing is hard!)
- Backbone

Meh.

## Plain JS page

$.get(‘/api/datas’)
.done(function(response){
       var ul \= $(‘<ul class\=“datas”\>’);
  $.each(response.datas, function(data){
    ul.append($(‘<li class\=“data”\>’, data.name + data.cashMoney));
  });
  document.body.appendChild(ul);
});

$(‘.new\-data\-button’).click(function(event){
  event.preventDefault();
  event.stopPropagation();
  $.post(‘/api/datas’).done(function(response){
    $(‘.datas’).append($(‘<li class\=“data”\>’,
    data.name + data.cashMoney);
  });
});

## React version

import React from ‘react’;

class Datas extends React.Component {

  addNewData () {
    $.post(‘/api/datas’).done(function(response){
      this.setState({datas: response.datas});
    });
  }

  render () {
    var datas \= this.state.datas.map(function(data){
      return <li className\=“data”\>{data.name} {data.cashMoney}</li>;
    });
    return (
      <section\>
        <ul className\=“datas”\>
          {datas}
        </ul>
        <button onClick\={addNewData}\>Add new data</button>
      </section>
    )
  }
}

React.render(<Datas />, document.body);

## Angular version

<body ng-app\=“app”\>
  <datas\></datas\>
</body\>

<!-- directive template -->
<section\>
  <ul class\=“datas”\>
    <li ng-repeat\=“data in DatasCtrl.datas”\>{{data.name}} {{data.cashMoney}}</li\>
  </ul\>
  <button ng-click\=“DatasCtrl.addNewData(data)”\>Add new data</button\>
</section\>

// app.js
angular.module(‘app’, \[‘datas’\]);

// data-module.js
angular.module(‘datas’, \[\])
  .directive(function() {
    return {
      templateUrl: ‘app/views/directives/datas.html’,
      restrict: ‘E’,
      replace: true,
      controller: ‘DatasController’,
      controllerAs: ‘DatasCtrl
    }
})
.controller(‘DatasController’, function(DatasResource){
  this.datas \= DatasResource.get();

  this.addNewData \= function(data){
    this.datas.push(data);
    new DatasResource(data).save();
  };
})
.factory(‘DatasResource’, function($resource) {
  return $resource(‘/api/datas’);
})

## Should you adopt one?

Give it one, both, or another a try. Make the scope of the work small.

Choose one if you all enjoy writing in it, and it makes your lives easier.
