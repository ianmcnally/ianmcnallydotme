---
title: "ng-repeat list alias"
date: "2015-02-26"
---

In Angular, say you’ve got an ng-repeat, where you want to use the filtered list somewhere outside of the list, like:

```
<h3 ng-cloak>{{filteredList.length}} items in list</h3>
<ul>
  <li ng-repeat="item in list | filter:someFilter"></li>
</ul>

```

**Note:** this would not work.

Turns out Angular’s got your back. You can alias the filtered list using `as`. (Starting in version 1.3):

```
<li ng-repeat="item in list | filter:someFilter as filteredList"></li>

```

Then you’ve got it:

```
<h3 ng-cloak>{{filteredList.length}} items in list</h3>
<ul>
  <li ng-repeat="item in list | filter:someFilter as filteredList"></li>
</ul>

```

[source](https://code.angularjs.org/1.3.0-beta.17/docs/api/ng/directive/ngRepeat) & [inspiration](http://stackoverflow.com/questions/15316363/how-to-display-length-of-filtered-ng-repeat-data)
