---
title: "Input validity in the HTML spec"
date: "2015-06-25"
---

Last night, while staving off insomnia, I started working on an enhancement to [react-currency-masked-input](http://github.com/imcnally/react-currency-masked-input).

I wanted an empty input value (i.e., when a user deletes all text from the input) to be replaced (a.k.a masked) as `null`, but invalid input (in this case, any non-digits were invalid) to replaced as `0.00`. The solution sounds simple: check the input value before it's replaced. But it's not that easy! Both empty input and invalid input (input that doesn't match the `pattern` attribute's expression) get passed as an empty string.

To illustrate that, both events look like:

```js
// the event when input cleared OR when bad input
event = {
  // the target is our input
  target: {
    value: ''
  }
}
```

But, in swooped the HTML spec that saved me. Enter HTML [ValidityState](https://html.spec.whatwg.org/multipage/forms.html#validitystate).

The `<element>.validity` is an object with many different states of validation, including `valid`, `tooLong`, `tooShort`, and the most important for me: `badInput`.

```js
// an example element's ValidityState object, i.e., 
{
  badInput: false
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: false,
  valueMissing: true
}
```

As the key suggests, `badInput` is set to `true` when the input does not match the pattern expression, so when I enter `'abc'` into this input:

```html
<input type="number" pattern="\d*" />
```

The elements validity state includes:

```js
// the event fired on bad input on the element
event =  {
  target: {
    value: '',
    validity: {
      badInput: true // tada!
      // ...
    }
  }
}
```

In contrast, when I delete all my text from the above input, `validity.badInput` is false (and `validity.valueMissing` is true).

Putting it all together, if I want to return null for an empty input, but return zero for bad input, my masking function includes:

```js
// var input = document.getElementsByTagName('input')[0]
input.addEventListener('change', function(event) {
  var replacedValue;
  if (!event.target.value) {
    replacedValue =  (event.target.validity.badInput) ? '0' : null;
  }
  // ... do stuff with the replaced value
});
```

Thanks HTML spec!
