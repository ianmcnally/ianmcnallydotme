---
title: "Currency masking in React"
date: "2015-06-01"
---

I just open sourced a currency masker for React!

Check it out:

![ An input that is getting masked (really, re-evaluated) as currency. ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/556bb104e4b024eba5be4176/1433121034765//img.gif)

It takes a normal number input, and converts the last two digits into cents.

Using the mask makes number inputting faster, since a user only has to input digits, not dots too. It works great on mobile, with pattern="\\d\*", which launches the numeric keypad. Bigger numbers means less typing errors.

I just added it into [Farely](http://farely.io). The speed and accuracy on a numeric keypad will keep the impatient and the creeps at bay when you're trying to refill your metrocard.

[Source](https://github.com/imcnally/react-currency-masked-input) code is on Github.

And it's [published](https://www.npmjs.com/package/react-currency-masked-input) to npm!

So: `npm install react-currency-masked-input`!

[Github](https://github.com/imcnally/react-currency-masked-input) & [npm](https://www.npmjs.com/package/react-currency-masked-input)
