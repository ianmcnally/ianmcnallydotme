---
title: "A better solution for mocking CSS modules in jest"
date: "2017-08-02"
---

I'm using CSS modules and testing with Jest in my latest project, 'cuz they're the best. But I kept wanting more from the css mocking experience in unit tests. The recommended [solution](https://facebook.github.io/jest/docs/webpack.html) using identity-obj-proxy wouldn't do it for me, because I had lots of duplicate classNames (e.g., `height.one`, `fontSize.one`) that led to ambiguity in unit tests.

I started by building a jest transform, then realized that was the wrong approach, because js files importing the css were being processed by babel-jest.

So, I went to looking back at `moduleNameMapper` in jest's config. I knew that I could manually read the directory of css files I wanted transformed, and build an object from that (with inspiration from Brent Jackson's [css-to-object](https://github.com/jxnblk/css-to-object)).

And I did it, and it worked! I ran it against an existing test suite to reveal any stress cases, and tweaked accordingly (looking at you breakpoints, pseudo classes, dashes in selectors).

It's up and public in its raw and newborn state as a [gist, here](https://gist.github.com/ianmcnally/a1727d96cab1f42d8a55ab9afa2fc0fc). Aiming to open source it as a module once the dust settles.

Yey, making things work!
