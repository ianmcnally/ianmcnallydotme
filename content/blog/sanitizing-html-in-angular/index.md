---
title: "Sanitizing HTML in Angular"
date: "2014-10-07"
---

If your Angular app is pulling down a string of HTML to display, and you want to use it as a model:

`<li ng-bind-html="someHtml"></li>`

Then use angular-sanitize. It’ll clean up your HTML for you.
