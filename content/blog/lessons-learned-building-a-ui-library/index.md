---
title: "Lessons learned building a UI library"
date: "2018-01-24"
---

I'm off boarding this week from my current job, and I wanted to write up the technical directions and learnings I'd acquired building the [design system](https://styleguide.schoology.com/about). It's part personal philosophy, part lessons learned.

### Learn CSS grid

It makes layout really easy, and made Schoology's grid system possible. See: [https://cssgrid.io](https://cssgrid.io/), [https://www.youtube.com/layoutland](https://www.youtube.com/layoutland), [https://thecssworkshop.com/](https://thecssworkshop.com/)

### Build flexible components and avoid blackboxes

In the same way and html component, like `<select />` with `<option />` gives you components to mix and match, React components should follow a similar design pattern. It will allow for use cases to expand easily. Avoid black boxes that do a lot of work for you, and are controlled by an ever-expanding amount of props and overrides.

### Use compound components for complex UI pieces

The compound component design pattern will allow you build flexible, modular components (as stated above). They'll be easier to change, mix or match, and adapt as the future product needs evolve. See: [https://www.youtube.com/watch?v=hEGg-3pIHlE](https://www.youtube.com/watch?v=hEGg-3pIHlE), [https://blog.kentcdodds.com/advanced-react-component-patterns-56af2b74bc5f](https://blog.kentcdodds.com/advanced-react-component-patterns-56af2b74bc5f)

### Write clear, user focused unit tests

One big exception to DRY is in tests. Cleverness should generally be avoiding because reading and updating a test can be a high-stress scenario. Make sure your setup, descriptions, and assertions are all clear and human readable. Follow the behavior-driven-development style of [Given, When Then](https://martinfowler.com/bliki/GivenWhenThen.html) and more to the point - [Arrange, Act, Assert](https://xp123.com/articles/3a-arrange-act-assert/).

### Read about and plan accessibility before/as you're building

Check out sites and guides like [https://inclusive-components.design](https://inclusive-components.design/) and Smashing Magazine to figure out what you need for accessibility, and how to get there before you start coding.

### Resist using third party solutions

They're always tailored for someone else's use case, so build your own UI components. With cross-browser standards and compatibility at an all-time high, and really good layout techniques like css grid, there's never been a better time to wain off pre-existing open source solutions.

### Make it reusable

We've probably all heard don't repeat yourself, but sometimes we do. With atomic css, like in the design system, and modular components we're building, let's keep things clean and in one place.

Great pieces on scaling css: [http://mrmrs.github.io/writing/2016/03/24/scalable-css/](http://mrmrs.github.io/writing/2016/03/24/scalable-css/), [https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660), [https://css-tricks.com/oh-no-stylesheet-grows-grows-grows-append-stylesheet-problem/](https://css-tricks.com/oh-no-stylesheet-grows-grows-grows-append-stylesheet-problem/)

### Keep bundle sizes small

Make sure we're only bundling what we need to, take advantage of features like code splitting (see the styleguide) and externalizing dependencies and "production mode" optimizations like those from webpack.

### Keep up to date

Your dependencies, your feature use, your skills. Use fallbacks and progressive enhancements while you build for modern and up-to-date browsers and frameworks. For example, allow React components to return Arrays and Fragments, but provide a div-based fallback for projects that use older versions of React.

### Short feedback cycles

Keep your tests running fast, your error messages helpful, automate and document as much as you can.

### Collaborate

What we're building ultimately serves a business and user value. So keep product and design close, and talk changes through with them before making or changing a component.
