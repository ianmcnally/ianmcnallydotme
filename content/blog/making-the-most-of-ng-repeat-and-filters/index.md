---
title: "Making the most of ng-repeat and filters"
date: "2015-03-19"
---

Not too long ago, I [wrote](http://ia-n.com/post/112154470242/ng-repeat-list-alias) about storing the value of a filtered ng-repeat. But what if I wanted the display to show the filtered results, but I wanted to use the un-filtered results somewhere else in the template.

Consider this example:

```
<input ng-model="searchText" />
<ul>
  <li ng-repeat="item in getItems() | filter:searchText as items"></li>
</ul>
<span>{{items.length}} items!</span>

```

If `getItems()` returns two items, the span will show `2 items!`. Once we start entering search text, `getItems()` will still return two items, but the repeat will be filtered. Then, the span would show `1 items!` or `0 items!` depending on what our `searchText` was.

To make sure the item count persists even when a user is filtering, you can modify how you assign the output of `getItems()`:

```
<li ng-repeat="item in (items = getItems()) | filter:searchText"></li>

```

In that example, `items` is being assigned before filtering. So our items will remain the same, even when a user is searching. And when they search, the display will only show the filtered results.

Putting it all together:

```
<input ng-model="searchText" />
<ul>
  <li ng-repeat="item in (items = getItems()) | filter:searchText"></li>
</ul>
<span>{{items.length}} items!</span>

```

Voila.
