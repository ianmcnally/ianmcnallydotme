---
title: "Stopping force pushes to master with a git hook"
date: "2015-08-04"
---

Today, my team ran into an issue where someone accidentally force pushed their git branch to master. There's no easy configuration change to make sure no one does this, so I ended up writing a pre-push hook.

A hook is a script called at one of several points in git's lifecycle, and a user has to simply supply their own hook file to run. So, for pre push I created a prepush.sh file. It runs after someone types "git push" but before the push actually happens. If the script exits with a failure, the push in cancelled. Here's the script:

```bash
### prepush.sh

#!/bin/sh

protectedBranch='master'
currentBranch=$(git rev-parse --abbrev-ref HEAD)

lastCommand=$(ps -ocommand= -p $PPID)
disallowedCommand='force|\\-f'

if \[\[ $lastCommand =~ $disallowedCommand \]\] && \[ $currentBranch = $protectedBranch \]; then
  echo "Force pushing to $protectedBranch is not allowed. Your push is rejected."
  exit 1
fi

exit 0
```

Then, I created a symlink to the git hooks directory from the shell file:

```bash
### setup-git-hooks.sh

#!/bin/sh

# the shell scripts path is relative to the .git/hooks directory
ln -s -f ../../prepush.sh .git/hooks/pre-push
```

Lastly, to automate the symlinking of the shell script (which ensures it runs on every developers machine), I added it to our npm scripts. This way, before each developer install node dependencies, the symlink (and therefore, the hook) will be installed.

### package.json

```javascript
{
  "scripts": {
    "preinstall": "./setup-git-hooks.sh",
  }
}
```
