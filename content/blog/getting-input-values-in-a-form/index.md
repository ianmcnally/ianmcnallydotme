---
title: "Getting input values in a dynamic form"
date: "2016-06-30"
---

Today I was [experimenting](http://codepen.io/ianmcnally/pen/VjbWNm/) with how to get all the values in a form. The form was dynamic, so I didn't know the input and textareas that could be in it. So I turned to my old standby [document.forms](http://ianmcnally.me/blog/2016/5/26/native-form-validation-in-browsers) (supported in \_all\_ browsers!).

When I started iterating over the form (document.forms\[formname\]), which is an [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection), I noticed that all non-input or textarea elements were filtered out (even if an input was nested inside a label). That means I can easily map over the inputs, get their values, and do as I wish with them!

Consider the following form:
```html
<form name="hey">
  <label><input name="innie" value="i am an input" /></label>
  <textarea name="textie">i am a text area</textarea>
  <p></p>
</form>
```

In my javascript, if I convert it to an array, I can map over the form's inner elements and get values from them!!! Like so:

```javascript
const mapInputNamesToValues = () => {
  const form = document.forms.hey
  const formAsArray = [].slice.call(form)

  return formAsArray.reduce((result, input) => {
    result[input.name] = input.value
    return result
  }, {})

}

// note: you could convert to an array and reduce in one line
// via [].reduce.call(form, callback)
// but I chose to separate it for clarity.
```

Play with the demo on [Codepen](http://codepen.io/ianmcnally/pen/VjbWNm/):

