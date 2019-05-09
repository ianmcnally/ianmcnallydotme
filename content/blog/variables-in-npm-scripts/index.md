---
title: "Variables in npm scripts"
date: "2016-02-04"
---

Did you know you can have variables in your package.json? They can be very handy, especially when using npm scripts. Consider the following:

```javascript
{
  "main": "index.js",
  "scripts": {
    "start": "node $npm_package_main"
  }
}
```

It eliminates the need for copy-pasting. Any key can be referenced, beginning with `$npm_package_` and adding an underscore for every level you go down. Say you had a config object, where you stored reusable values, like a domain address, that's passed as an argument in a script:

```javascript
{
  "main": "index.js",
  "config": {
    "domain": "localhost:8000"
  },
  "scripts": {
    "start": "node $npm_package_main --domain $npm_package_config_domain"
  }
}
```

Super useful!
