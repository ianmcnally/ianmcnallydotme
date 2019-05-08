---
title: "Subclasses in Javascript"
date: "2014-06-10"
---

If you aren’t spoiled by Coffeescript or a framework like Backbone, subclassing in Javascript isn’t straight forward. Check this out:

```
// Base Beatle class
function Beatle(name) {
  this.name = name;
}

Beatle.prototype.sayHello = function () {
  alert(this.name + ' wore Beatle boots.');
}

// Ringo, a Beatle subclass and drummer
function Ringo(){
  Beatle.call(this, 'Ringo');
}

// Use Object.create to break reference to parent's prototype.
Ringo.prototype = Object.create(Beatle.prototype);
Ringo.prototype.constructor = Ringo;

Ringo.prototype.sayHello = function() {
  alert('Peace and love!');
}

```
