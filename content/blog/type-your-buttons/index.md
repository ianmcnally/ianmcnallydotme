---
title: "type your buttons"
date: "2014-12-10"
---

Today I learned the hard way to put types on my buttons. On a form, I had a cancel button

`<button>Cancel</button>`

Which was accidentally being submitted on pressing enter. Turns out, it just needed type=“reset” (or type=“button”) for Angular to know not to fire an event on it, so:

`<button type="reset">Cancel</button>`

Worked like a charm. It seems by default, Angular will trigger a click on all buttons in a form, unless they’re type `button` or `reset`.

Yey for HTML standards.
