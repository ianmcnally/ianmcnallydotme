---
title: "Angular providers"
date: "2015-03-17"
---

I got a [taste](https://github.com/fatlinesofcode/ngDraggable/pull/105#) of what it’s like to write a provider in Angular. The biggest reason to write one is to have a service configurable in a module’s `config` phase.

It’s a somewhat convoluted process, involving returning a `$get` function:

```
angular.module('ianSpeaker').provider('speakingService', function(){
  var speak;

  this.canSpeak = function(canSpeak) {
    speak = canSpeak;
  };

  this.$get = function(){
    return {
      saySomething : function(msg){
        if (speak) {
          console.log(msg)
        }
      }
    }
  };
});

```

All so you can set values on your module’s config:

```
yourApp.config(function(speakingServiceProvider){
  speakingServiceProvider.canSpeak(true);
});

```

And use the service:

```
yourApp.controller('MyController', function(speakingService){
  speakingService.saySomething('hey');
});

```
