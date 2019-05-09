---
title: "Testing input change in React"
date: "2015-05-06"
---

Today I was adding tests to [Farely](http://farely.io). I wanted to test that when you input a new value, it updates the state.

According to React's [testing documentation](https://facebook.github.io/react/docs/test-utils.html), I should be able to trigger a change with:

```js
var newValue = '27';
React.addons.TestUtils.Simulate.change(input.getDOMNode(), {target : {value : newValue}});
```

(Note: there's really no documentation on the second argument `{target: ...}`. Grumble.)

Then I could assert:

```js
expect(component.state.inputValue).toEqual(newValue);
```

But, as my tone might have implied, it's not _that_ straightforward. I finally landed on a relevant [Github issue](https://github.com/facebook/react/issues/3151). What you have to do is change the input's value manually, then call `change`:

```js
var newValue = '27';
input.getDOMNode().value = newValue;
React.addons.TestUtils.Simulate.change(input.getDOMNode());
```

Then you can assert to your heart's content, because the change will take place.

**Update:** it's been [fixed](http://ianmcnally.me/blog/2015/7/22/react-component-change-testing-works). No more manually setting the value!
