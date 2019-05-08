---
title: "Disabling file drag to upload in IE9"
date: "2014-05-22"
---

On the project I’m working on, the worst browser we have to support is IE9. It’s not a bad problem to have since there are worse. Still, we have to work around it for some things, like file upload.

We’re using a file upload [plugin](https://github.com/blueimp/jQuery-File-Upload) to handle browser file uploading, and on modern browsers we have a nice drop zone:

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b36e4b0fca745eb379a/1430616928194//img.png/blueimp/jQuery-File-Upload/wiki/Browser-support#drag--drop)can’t handle dragging a file into the browser, so we want to hide that box. Modernizr doesn’t have a good way to test for this, so I added a custom test:

```
Modernizr.addTest 'dragfiles', ->
  !document.getElementsByClassName('ie9').length

```

Which works with the current HTML conditional:

```
<!--[if IE 9 ]>    <html lang='en' ng-app='LessonBuilder' id='ng-app' xmlns:ng='http:&#x2F;&#x2F;angularjs.org' class='ie ie9'> <![endif]-->

```

The Modernizr test may not be pretty, but it works, and can be extended or modified in the future.

So now, the markup for the box is:

Given you’ve got [Modernizr on $rootScope](http://ia-n.com/post/86508173547/modernizr-in-angular-templates) of course.
