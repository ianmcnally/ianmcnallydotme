---
title: "Front end best practices"
date: "2015-06-23"
---

_I recently did an Tech Talk with Stride on Front End Best Practices. This interview originally appeared [Stride's blog](http://www.stridenyc.com/blog/2015/6/17/stride-tech-talk-ian-mcnally-on-front-end-best-practices)._

**When a new technology comes out, it often takes time and an active community to create standards. It happened with Angular and is now starting with React. How do you handle best practices for emerging technologies?**

First, I’d see how the creators and early adopters are writing for it. Seeing their code will give you some insight into how they’re thinking about the project, and what proper usage looks like. Similarly, keep up to date on changes, and don’t be afraid of changing your mind, and your code, accordingly.

It’s also important not to throw out all the knowledge you’ve accumulated in other projects. Let your experience inform how you approach your new project, and guide you through the less established parts of the new technology.

Ultimately, though, you’ll have to stick to something. Make sure you and your team feel good about the choices you’ve made.

**What is the most important thing a team can do for their website that they may not be doing now?**

Page load times and rendering performance are two areas that I think we, as an industry, need to spend more time and effort on. As more people access our sites on mobile devices, with varying hardware, data speeds, and data caps, keeping asset footprints small is paramount. Even after the assets download, getting something visible on the screen in a short amount of time is crucial.

Also, I think it’s about time we make accessibility a priority. Designing and building sites for the widest range of users is so important. I recommend checking out The Accessibility Project’s website.

**What are some ways to uphold front end best practices on a project?**

Right off the bat, start automating everything you can. That means code linters, coverage analysis and style checkers. Standardizing and enforcing those things will remove the nit-picky parts of code review, and will work towards a sense of coherence and conformity (the good kind).

Another aspect of establishing best practices is spreading that knowledge across the team. Pair programming and community-style code reviews both go a long way. It gives everyone a chance to both learn and teach, and can instill a sense of shared pride and ownership on everyone involved. Another effective form of knowledge sharing is lunch and learns. They are great at getting everyone together and focused on an issue, as well as showing others what’s possible.

**As a project grows, it becomes more important to write maintainable code. This can be especially hard for CSS. What’s the best way to approach writing stylesheets?**

There’s been plenty of attention paid to this issue recently, and some great ideas have come from it. Several approaches, like BEM and Smacss, are systems of class naming that increase consistency, readability and selector uniqueness. Alternatively, you can use a CSS pre-processor to allow for rule nesting, where you put classes under a single class blocks that essentially namespaces your styles. That’s not to say you can’t use BEM, Smacss, or the like, with a pre-processors. They can be quite complementary.

Other general advice would be: write good class names, use classes over tags (lookup is faster and classes allow for you to change the underlying implementation), don’t style IDs (by their nature, they’re not reusable), and be careful of excessive nesting (no more than three levels deep is a good rule of thumb).

**How can a team pick which front end framework to use? **

Start with some research. Take a few options, and really dig into them. Find out their strengths and weaknesses, look at how strong the community and documentation around them are, and think about how each could fit into your project.

After that, one or two should rise to the top. At this point, I’d recommend trying them out. Take the framework(s) for a test drive on a small piece of work. If you like it, you can continue on with it. If you don’t, you won’t have invested too much time in it.

Remember, besides the myriad of technical considerations, you and your team should enjoy writing in the new framework, and it should make people’s lives easier. If it does, you’ve got a winner on your hands.
