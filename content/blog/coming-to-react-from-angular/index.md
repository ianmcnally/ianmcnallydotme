---
title: "Coming to React from Angular"
date: "2015-03-05"
---

_Note: This article was originally published on [Stride’s blog](http://www.stridenyc.com/blog/2015/3/4/coming-to-react-from-angular)._

My friends started using it, [Stride](http://www.stridenyc.com) clients started asking for it, and it’s been getting serious buzz on the internet. So I realized it was time for me to learn React.

I’ve been an Angular guy for the past couple years, and I’ve gotten pretty good at it. I’ve seen its nooks and crannies, and I’ve grown fond of it.

But, like I said, it was hard to ignore React.

It’s fast, it’s light, it’s new and shiny. So I dug in. I recently released an app, [Farely](http://farely.io), which I’d [written](https://github.com/imcnally/farely) in Angular. (Note: I didn’t use directives like I should have.) I thought it’d be the perfect opportunity to try out React, since the app could be composed of components. It also wouldn’t need anything React doesn’t offer, like routing or complex data modeling.

And so I began [the project](https://github.com/imcnally/farely-react). Below are my thoughts and observations, should they help inform your library choices. I’ll assume you’ve been introduced to React and Angular, since there are great articles written about them [elsewhere](https://egghead.io).

## Getting started

### Tech stack

Angular with Coffeescript were my go-tos. React doesn’t play well with Coffeescript, so I decided to write it in ES6. Why not lean into the future? Accordingly, some of my points in this post will deal ES6 and not necessarily React.

To easily get started with the two, I created a [skeleton project](https://github.com/imcnally/react-es6-gulp-playground), with the help of [gulp](http://gulpjs.com).

To handle transpiling ES6 to ES5, I used 6to5, now known as [babel](http://babeljs.io). Finally, to handle module loading, I used [browserify](http://browserify.org). I’m really digging the `import` statements in ES6. Also, having all the source code build to one file, with all dependencies, means I can have a lean [index.html](https://github.com/imcnally/farely-react/blob/master/src/layout.html) with `async` and `defer` tags.

## Thoughts and observations

I kept a pros and cons list while I was working. I resisted the urge to copy and paste that, or resort to a listicle. Instead, I grouped my thoughts, below, into general areas.

### Markup

After watching some tutorials online, I was concerned that React forced you into `<div>` soup, since you can only return a single element from a render function. The markup in the Angular Farely looked like:

```
<section>
  <form>
    <!-- Inputs -->
  </form>
  <ul>
    <!-- Fare amounts -->
  </ul>
  <p>
    <!-- Instructions -->
  </p>
</section>

```

So, I already had my containers. Breaking them up into components was easy:

```
import React from 'react';
import FareInput from './components/fare_input.jsx';
import Instructions from './components/instructions.jsx';
import PurchaseOptions from './components/purchase_options.jsx';

var App = React.createClass({
  render () {
    return (
      <main className="fare-calculator">
        <FareInput />
        <PurchaseOptions />
        <Instructions />
      </main>
    )
  }
});

React.render(<App />, document.body);

```

Turns out I was worrying for nothing. Still, I do feel a disconnect between the actual HTML that’s rendered and what I’m writing in jsx. All rendered elements contain `data-reactid`. It does get easier to visualize with [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).

While we’re on the topic of jsx, I’ll say that I was thrown off with the non-standard attributes. For instance, this HTML:

```
<label for="myinput" class="pretty-label">
  <!-- ... -->
</label>

```

In jsx:

```
<label htmlFor="myinput" className="pretty-label">
  <!-- .... -->
</label>

```

It’s something I got used to, but like I mentioned, it contributes to a feeling of distance between the markup and rendered HTML.

Also, I miss Angular’s form validation.

### HTML + JS

Continuing on the subject of markup, I like that a React component has the code and markup in one place. Angular separates templates into their own files which are referenced in code. Optionally, it allows for HTML strings. Other frameworks like Ember and Backbone support either strings or separate template files, often with their own syntax on top of it (I’m looking at you, [handlebars](http://handlebarsjs.com) and [mustache](https://mustache.github.io)).

With React components, there’s no switching files. Jsx allows you to [write](https://github.com/imcnally/farely-react/blob/master/src/components/purchase_options/purchase_options.jsx) HTML inside the render function of a component, with javascript both inside and outside of it. (Side note: syntax highlighting support is avaiable for Sublime Text and Webstorm).

### Hello again, Javascript

React really brings you back to writing Javascript. Angular forces you into a new paradigm, like services, factories, modules, filters, etc. You’re almost always returning a function, that returns a function. They had their reasons, having started the project in 2009. I think Angular 2.0 will address that, too, and be much leaner. But still, I’m talking Angular 1.3 here.

Since I’m using browserify, I can make use of node built-ins, like Event Emitter, and node modules. Also, I can use imports/requires instead of homemade dependency injection like Angular. With ES6, I wrote classes. I used events.

I enjoyed not having to attach things to `$scope`, or return functions that returned functions that did something, or list my dependencies in any other place besides [package.json](https://github.com/imcnally/farely-react/blob/master/package.json).

Angular also has a tendency to do things its own way, like changing the context of a function that was referenced in a template. It has its own lifecycle, too, which sometimes needs encouragement (see: `$scope.$apply`, `$scope.$digest`, `$timeout`).

### Boilerplate code and manual binding

While Angular’s two-way data binding can cause some headaches (see lifecycle comments above), man it makes things easy. Models change automatically, from either direction. It takes care of empty values for you, as well as exposing some common functions, like checking is something is defined. In React, you manually set states with handlers. I spent the longest time coercing input value types, with React. It can feel regressive.

Another bit of manual work was putting together a lot of the boilerplate code. To better organize the app, I used [flux](https://facebook.github.io/flux/) â€“ the architectural pattern-cum-library. It requires the setup of [actions](https://github.com/imcnally/farely-react/blob/master/src/actions/fare_actions.js), [stores](https://github.com/imcnally/farely-react/blob/master/src/stores/fares.js) and a [dispatcher](https://github.com/imcnally/farely-react/blob/master/src/dispatchers/app.js), both of which require some mental overhead and spread responsibility over several files and directories.

### Best practices

Like any new project, best practices are still being developed. That’s one of the harder things about transitioning right now. Angular, and other frameworks, are pretty well established. Even the API is changing!

While that will get ironed out in the future, the fact that React is just a piece of what you’d get in a framework (the V in MVC, as they like to say) leads developers to piece it together with other libraries. It’s a little like the Wild West right now, but I’ve seen it with [Backbone](http://www.thomasboyt.com/2013/12/17/using-reactjs-as-a-backbone-view.html), [Ember](http://discuss.emberjs.com/t/can-reactjs-be-used-as-a-view-within-emberjs/3470/3), and …gasp… [Angular](http://mono.software/posts/Improving-AngularJS-long-list-rendering-performance-using-ReactJS/).

### Web standards

I’ve long been a proponent of the web. It can be anywhere and everywhere, it has decades of history and a rich set of standards. I like that Angular is positioned to work with web components. There is also a library for automatic accessibility tagging. That’s not the message I get from React, between jsx and React Native.

### Testing

Jasmine and Angular make a great team. You can inject dependencies in your test, mock them, or spy on them. Karma, the test runner, supports any browser, including PhantomJS for headless testing. With React and [Flux](http://facebook.github.io/flux/docs/testing-flux-applications.html), [Jest](https://facebook.github.io/jest/docs/tutorial-react.html) is recommended. It’s Facebook’s layer on top of Jasmine. It uses a virtual DOM instead of a browser or PhantomJS. This can make debugging hard, but it does run on the command line so it’s good for continuous integration. Interestingly, Jest mocks dependencies by default, but allows you to easily override that.

Note: remember to put `jest.dontMock`s above imports/requires. That took me a few minutes of head banging to figure out.

You can see the basics of setting it up with gulp [here](https://github.com/imcnally/farely-react/commit/3813d28f8c0767db3bb4d671529e1a4811911f35).

### Miscellaneous notes

- React has great warnings about usages, like when it told me I didn’t have to bind a function in a component.
- React supports server side rendering out of the box. Huge!
- I’m excited to see what React Native brings.
- You can `require('React')` and `require('react')`, which probably shouldn’t be possible. You’ll receive the cryptic error: `Cannot read property 'firstChild' of undefined`.

## Concluding remarks

So did I like React? Am I ditching Angular for it? Forgetting React altogether?

As you can expect, the answer is more nuanced than a yes or no. I found that I like React, especially once I got over the cognitive dissonance relating to jsx and the new jargon. What React does â€“ components, fast DOM updating, controlling data flow â€“ makes it a great tool. What it doesn’t do so well â€“Â routing, data modeling, etc. â€“ means that it won’t necessarily replace your framework of choice any time soon. Still, I’m going to keep my eye on it, and keep working with it. It’s fun to use and has a lot of potential.
