---
title: "14 tips for better front end testing"
date: "2016-05-20"
---

Today Stride [published](http://blog.stridenyc.com/14-tips-for-better-front-end-testing) a set of tips I put together for testing your front end code. I had some fun with it, by turning it into a Buzzfeed-style listicle.

Here it is in syndication:

## 1\. Test output (how the DOM changes), not what happen behind the scenes (implementation)

Think about the user’s perspective and how they would interact with the component(s). Testing output allows you to change implementation, without affecting output. That means tests only break when there’s an actual functionality change.

![ Garth fears change ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f52c6d51cd44d1863b770/1463767768419//img.gif)

## 2\. Make reusable components that can be tested in isolation

They’re easier to test and makes tracking down changes faster.

![ Reduce, reuse, recycle ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f52f4d51cd44d1863b92b/1463767801585//img.gif)

## 3\. Cut down on the amount of DOM rendering in tests

When setting up your tests, prefer \`before\` not \`beforeEach\` to cut down on repeat renderings. It can slow things down considerably.

![ Liz Lemon says ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f530fd51cd44d1863ba31/1463767832924//img.gif)

## 4\. Isolate mutations to tests contexts

Relying on other cases mutating state or DOM leads to brittle tests that are hard to refactor or reason about. Test blocks contexts should be self-sufficient. Resist the urge to share data.

![ Beyonce's Miss Independent ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f534cd51cd44d1863bcb8/1463767890396/6359153007743852141642216303_giphy-2.gif)

## 5\. Be explicit and don’t abstract too much setup or repetition

By writing out and repeating steps, it’s easier to scan the code while under stress.

![ The Beatles, repeating ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f5382f8baf3f38debabf8/1463767950943//img.gif)

## 6\. Choose a tool that allows you to isolate cases for a faster feedback cycle.

Have and use the ability to isolate a test or tests, without running them all. It’s easier to focus and faster to find the change.

![ Forever alone cat ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f5399f8baf3f38debacb3/1463768252017//img.gif)

## 7\. Turn on source maps, if applicable

Get pointed to the source code quicker, if you’re using a compiler.

![ What year is it? Also, RIP Robin Williams ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f53baf8baf3f38debadb9/1463768273982//img.gif)

## 8\. Use a headless browser and rerun tests on file change

The key to TDD is speed, speed, speed.

![ A headless ghost spins a pole ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f53fef8baf3f38debafb9/1463768088915//img.gif)

## 9\. Allow for in-browser debugging

For the times you just need that Chrome dev tools. (And maybe Firefox or Safari)

![ A really strange web browser ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f5423f8baf3f38debb0d9/1463768113632//img.gif)

## 10\. Have consistent names for your test blocks

File names, methods, modules

![ Belle swings across her library on a ladder ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f543bf8baf3f38debb1a5/1463768133886//img.gif)

## 11\. Make your \`describe\`s, \`context\`s, \`it\`s human readable

Mad lib style: \[Module name\], when \[state\], (and), it \[behavior\]

![ It's a mad, mad, mad lib world ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f544ff8baf3f38debb237/1463768155014//img.gif)

## 12\. Include polyfills if testing on different browsers

Browsers behave differently, especially older versions of PhantomJS versus something like Chrome. A polyfill like es5-shim will get you to parity.

![ Show browser variations no mercy ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f5466f8baf3f38debb2f7/1463768183658//img.gif)

## 13\. Use a pluggable expectation system for more meaningful assertions

For example, chai-jsx (or expect-jsx or jasmine-expect-jsx), if you’re using React, allows you to assert with JSX on a component. Same goes for libraries like immutable, sinon, bluebird.

![ Plug it in, plug it in ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f5481f8baf3f38debb3c2/1463768207039//img.gif)

## 14\. Fail the build on console.error

A third party developer is politely telling you there’s been a horrible problem, without crashing your app (isn’t that all you can ask for in a client-side app?). This happens with prop type validation errors in React.

![ Leslie NO-OPE ](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/573f549bf8baf3f38debb494/1463768230890//img.gif)
