---
title: "Flex values in IE11"
date: "2017-12-18"
---

Today I Learned:

IE11 doesn't handle `flex` values in the same way that newer browsers do. Normally the value `flex: 1` is a shorthand for `flex-grow: 1`. But in IE11, that affects the flex-basis, and it was throwing my sizing off.

I thought using the flex shorthand would be safe, and I normally consider [shorthand an anti-pattern](https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/), since it makes refactors or overrides harder. But you never know what you'll find in Internet Explorer!
