---
title: "Sleep display from the command line"
date: "2014-06-11"
---

I like putting my display to sleep when I walk away from the computer. It saves energy, prompts for a password on return and is faster than waking the machine from sleep.

To make the sleeping process faster, I wanted to make an [Alfred](http://alfredapp.com) workflow. The workflow would just run a command in Terminal. The problem? Until OS X 10.9, there was no such command, and now there is!

```
pmset displaysleepnow

```

Wham, bam, thank you Mavericks!

Here’s what the workflow looks like:

![](http://static1.squarespace.com/static/554569a4e4b0b68214c1f5d9/55457b34e4b0fca745eb358d/55457b36e4b0fca745eb3767/1430616926381//img.png.com/s/m0lnomnt4mkkmyd/display-sleep.alfredworkflow)Dropbox

### Or, to create it

1. Click + (bottom left) to create a workflow
    
2. Inside the new workflow, click + (top right) then Triggers > Hotkey.
    
3. Enter a keyword. I like _dsleep_.
    
4. Click + to add an Action. Choose Run Script.
    
5. Inside the script’s text field, add `pmset displaysleepnow`.
    
6. Enjoy.
