---
title: "Equality of shallow javascript arrays"
date: "2015-04-02"
---

Today, I was working on a UI bit where you click on a modal to add or remove some items from a list. I wanted the modal to have a shallow copy of the items list, so that a cancel wouldn’t update the original items list. Only save would. Since code is worth a thousand explanations:

```
//-controller.js

var items = ['Clean room', 'Do laundry'];

openModal = function() {
  modal.open(items.slice()); // passing in items to modal
};

//-modal.js

remove = function(item) {
  _.pull(items, item);
}

cancel = function() {
   this.close();
}

```

So when `modal.cancel` is called, `controller.items` should be unmodified.

In my unit test (jasmine, below), I wanted to test that `modal.items` was a shallow copy.

```
expect(modal.items).not.toEqual(controller.items);
// Fail

```

But that doesn’t work. `slice` returns an new array, but maintains the references inside the array. This subtlety is lost on `toEqual`, and lodash/underscore’s `_.isEqual`. Plain javascript to the rescue:

```
expect(modal.items !== controller.items).toBe(true);
// Pass

```

Oh yeah.

To cover my bases, I still used `toEqual` to test that `controller.items` was passed to `modal.items` so my test looked like:

```
expect(modal.items).toEqual(controller.items);
expect(modal.items !== controller.items).toBe(true);
// Pass

```
