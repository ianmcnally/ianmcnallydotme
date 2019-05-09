---
title: 'Karma tests running twice on change'
date: '2015-09-03'
---

My current project's been plagued with duplicate test runs on a single file change. We're using webpack and karma, and it's a [documented](https://github.com/webpack/karma-webpack/issues/44) problem. Someone pointed me to a [solution](https://github.com/nikku/karma-browserify/issues/67#issuecomment-84281528) that worked for browserify + karma setup, and it turned out to work for my situation too!

Since our karma-webpack config was processing any .js, .es6 or .jsx file, a change in a spec file was triggering a change there, on top of karma triggering a change on the files it was serving to the browser. A quick patch to the list of files karma handles disabled watching of the spec files, while continuing to serve them:

```javascript
// in karma.conf.js
{
  files: [
    // ... other files paths
    {
      pattern: './path/to/tests/**/*.js',
      watched: false,
      included: true,
      served: true,
    },
  ]
}
```

And the rest was history.
