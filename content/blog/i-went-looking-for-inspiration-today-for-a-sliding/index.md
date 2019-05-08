---
title: ""
date: "2014-07-16"
---

\[caption id="" align="alignnone" width="98.0"\]![  I went looking for inspiration today for a sliding checkbox, and didn’t find any clean implementations of it. So, I present to you the above, which I hope will become the slider of record for all the internet. 
<div></div>
  CodePen  and/or  gist . 
<div></div>
 The idea is to have an input and a corresponding label: 
<div></div>
  <input type=](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b36e4b0fca745eb3710/1430616922624//img.gif) Then you hide the input, allowing for the label to get acted on, which updates the input anyway. You can then transition between checked and unchecked states via the :checked pseudo selector. In this case, I’m modifying the x position of a label:after element, which consists of a circle:

input display: none

label display: block position: relative // non-functional styling height: 35px width: 70px background-color: white border: 1px solid #eaeaea transition: .125s all ease-in-out border-radius: 15px

&:after content : '' display: inline-block position: absolute left: 0 top: 0 transform: translate3d(0, 0, 0) transition: inherit // non-functional styling background-color: white border-radius: 15px border: 1px solid grey height: 30px width: 30px margin-top: 1px

input:checked + label background-color: #33CC00

&:after transform: translate3d(100%, 0, 0) "/> I went looking for inspiration today for a sliding checkbox, and didn’t find any clean implementations of it. So, I present to you the above, which I hope will become the slider of record for all the internet.

CodePen and/or gist .

The idea is to have an input and a corresponding label:

<input type="checkbox" name="check-1" id="check-1"/> <label for="check-1"></label>

Then you hide the input, allowing for the label to get acted on, which updates the input anyway. You can then transition between checked and unchecked states via the :checked pseudo selector. In this case, I’m modifying the x position of a label:after element, which consists of a circle:

input display: none

label display: block position: relative // non-functional styling height: 35px width: 70px background-color: white border: 1px solid #eaeaea transition: .125s all ease-in-out border-radius: 15px

&:after content : '' display: inline-block position: absolute left: 0 top: 0 transform: translate3d(0, 0, 0) transition: inherit // non-functional styling background-color: white border-radius: 15px border: 1px solid grey height: 30px width: 30px margin-top: 1px

input:checked + label background-color: #33CC00

&:after transform: translate3d(100%, 0, 0) \[/caption\]
