---
title: "Repeating keys in vim on OSX"
date: "2016-02-20"
---

In vim, holding down a key can save you a lot of repeated effort. In newer versions of osx, holding down a key was disabled, to allow for a special character entry dialogue. In every blog post about disabling this feature, I found the blunt force approach of turning off it globally. It didn't sit well with me, because sometimes I _do_ want to use special characters, and it's harder to do without the entry dialogue. 

The one weird trick to disable in vim? You can turn off the press-and-hold behavior for specific applications! For vim, it's:

`defaults write org.vim.MacVim ApplePressAndHoldEnabled -bool false`

(_Enter that in your terminal_)

If you need to do this for other apps, check out the listings inside ~/Library/Preferences, and remove the .plist from end of the title (e.g., org.vim.MacVim.plist).

Happy coding!
