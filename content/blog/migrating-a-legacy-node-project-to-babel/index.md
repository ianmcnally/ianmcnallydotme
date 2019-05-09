---
title: "Migrating a legacy node project to Babel"
date: "2015-11-25"
---

I’m working on a node project that has a mix of legacy and new code. The new code is written in ES2015 (a.k.a. ES6). The legacy code is your standard ES5, but with some unfortunate global variable leaks, oddly placed commas and semicolons, and remiss of unit tests.

We are using Babel’s [require](https://babeljs.io/docs/usage/require/) hook to transpile our code on the fly, using the [ES2015 preset](https://babeljs.io/docs/plugins/preset-es2015/). This means it runs on both new and legacy code.

By default, [one](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/) of the plugins that comprises the preset applies [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) to every file. It’s for module loading, and it makes modules ES6 spec compliant. This causes trouble for our legacy code. It’s non-strict mode compliant (a.k.a. _loose_), which causes runtime exceptions.

So, we were at a crossroads. We needed to either refactor the legacy code, or attempt to disable strict mode. In the ideal world, we’d do the former. In reality, a colleague had already tried that, but had to abandon it due to time constraints, and a lack of confidence in introducing large changes to an untested code base. So I headed to Babel’s Slack room where I got the tip I was looking for: how to (temporarily, I swear!) disable strict mode on the module plugin.

The solution involved removing the ES2015 preset and manually including all the plugins. For the troublesome modules plugin, I was able to pass a parameter setting strict mode to false. My .babelrc became:

```javascript
{
  "plugins": [
    "check-es2015-constants",
    "transform-es2015-arrow-functions",
    "transform-es2015-block-scoped-functions",
    "transform-es2015-block-scoping",
    "transform-es2015-classes",
    "transform-es2015-computed-properties",
    "transform-es2015-destructuring",
    "transform-es2015-for-of",
    "transform-es2015-function-name",
    "transform-es2015-literals",
    "transform-es2015-object-super",
    "transform-es2015-parameters",
    "transform-es2015-shorthand-properties",
    "transform-es2015-spread",
    "transform-es2015-sticky-regex",
    "transform-es2015-template-literals",
    "transform-es2015-typeof-symbol",
    "transform-es2015-unicode-regex",
    "transform-regenerator",
    ["transform-es2015-modules-commonjs", {"strict": false}]
  ]
}
```

(Note the last line, with the object in an array: `["transform-es2015-modules-commonjs", {"strict": false}])`

And my package.json ballooned by about 20 lines:

```javascript
{
  "dependencies": {
    "babel-plugin-check-es2015-constants": "^6.2.0",
    "babel-plugin-transform-es2015-arrow-functions": "^6.1.18",
    "babel-plugin-transform-es2015-block-scoped-functions": "^6.1.18",
    "babel-plugin-transform-es2015-block-scoping": "^6.1.18",
    "babel-plugin-transform-es2015-classes": "^6.2.2",
    "babel-plugin-transform-es2015-computed-properties": "^6.1.18",
    "babel-plugin-transform-es2015-destructuring": "^6.1.18",
    "babel-plugin-transform-es2015-for-of": "^6.1.18",
    "babel-plugin-transform-es2015-function-name": "^6.1.18",
    "babel-plugin-transform-es2015-literals": "^6.1.18",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.2.0",
    "babel-plugin-transform-es2015-object-super": "^6.1.18",
    "babel-plugin-transform-es2015-parameters": "^6.1.18",
    "babel-plugin-transform-es2015-shorthand-properties": "^6.1.18",
    "babel-plugin-transform-es2015-spread": "^6.1.18",
    "babel-plugin-transform-es2015-sticky-regex": "^6.1.18",
    "babel-plugin-transform-es2015-template-literals": "^6.1.18",
    "babel-plugin-transform-es2015-typeof-symbol": "^6.1.18",
    "babel-plugin-transform-es2015-unicode-regex": "^6.1.18",
    "babel-plugin-transform-regenerator": "^6.2.0",
  }
}
```

Now my code’s running smoothly, and I have a migration path set for my code base. Hooray!

![ Victory dance! ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/5655e027e4b0f06765dbac61/1448468526494/dance.gif)
