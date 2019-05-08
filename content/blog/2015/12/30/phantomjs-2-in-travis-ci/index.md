---
title: "PhantomJS 2 in Travis CI"
date: "2015-12-30"
---

I was continuing work on my [web boilerplate](http://ianmcnally.me/blog/2015/12/22/2016-web-boilerplate) (note: now moved under the stride-nyc org) when I decided to add [Travis CI](http://travis-ci.org) integration for builds.

Travis CI is triggered on pushes to certain branches and on pull requests. To configure it, you create a .travis.yml file in your repository. My tests are running using a forked [PhantomJS 2 launcher](https://www.npmjs.com/package/karma-phantomjs2-launcher) with Karma, which makes running your tests against PhantomJS 2 really easy, while we wait for official support. So, what's the problem? The launcher works great locally, but doesn't work on Travis CI's Ubuntu machines.

After some Googling, I landed on [a post](https://mediocre.com/forum/topics/phantomjs-2-and-travis-ci-we-beat-our-heads-against-a-wall-so-you-dont-have-to) by Mediocre Labs. It describes how to pre-install a custom built PhantomJS 2 binary on Travis CI. That part worked just fine, but I still found myself fighting with the PhantomJS2 launcher which wouldn't recognize the custom binary, as well as the PhantomJS v1 launcher, which requires an npm dependency on PhantomJS, which isn't an option.

I worked around it by explicitly pointing to the TravisCI custom PhantomJS binary in my build task. It nicely overrides the binary location for the PhantomJS2 launcher. So putting it all together, here's the build task:

`env PHANTOMJS_BIN=/usr/local/bin/phantomjs karma start`

And the .travis.yml config to download the custom PhantomJS 2 binary:

before\_install:
  - wget https://s3.amazonaws.com/travis-phantomjs/phantomjs-2.0.0-ubuntu-12.04.tar.bz2
  - tar -xjf phantomjs-2.0.0-ubuntu-12.04.tar.bz2
  - sudo rm -rf /usr/local/phantomjs/bin/phantomjs
  - sudo mv phantomjs /usr/local/phantomjs/bin/phantomjs

And if you're really curious, [here's the project](https://travis-ci.org/stride-nyc/web-boilerplate-2016) on Travis CI.

Happy coding!
