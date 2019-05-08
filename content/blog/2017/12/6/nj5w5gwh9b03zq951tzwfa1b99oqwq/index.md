---
title: ""
date: "2017-12-06"
---

I was on a [podcast](https://www.stridenyc.com/podcasts/34-styles-css-js) about CSS recently, and the transcript just launched. Here are some edited (for clarity) excerpts of my answers:

### How is CSS different from programming languages?

I feel like you go from programming and thinking about things and you know, calling functions and structures and stuff in CSS definitely a leap, you know? Styling, it’s definitely a leap jumping from a programming language to CSS because the way CSS rules interact with one another and how the order of operations of what gets loaded when and stuff and that all affects the display and how something looks and how it behaves.

I think a lot of debugging and figuring out why is it looking the way it is, is through a lot of accumulated knowledge which you can't express in the same way you might express something through object-oriented programming or whatever.

## What's the deal with BEM, SMACSS, etc.?

what BEM is and SMACSS and is just a level of semantics like a way of writing a CSS selector that will help you theoretically write more maintainable CSS by effectively componentizing styles under a block

## How can you safely modify CSS rules?

\[0:06:01.2\] IM: Yeah, right? There is a couple of articles I think that came out this year. One was called like a Unified Styling for CSS, I don’t know? I’m butchering the title of that by this guy named Mark Dalgleish and also Chris Coyier CSS tricks wrote about scaling CSS, links in the show notes.

\[0:06:23.3\] MN: Show notes, now we got to put them on the show notes.

\[0:06:27.2\] IM: And third shout out, Adam Morris wrote about scaling CSS last year. He did like a lot of research and kind of like a survey of just going to websites and seeing how they wrote their CSS and you know, what was like the duplication and, you know, did CSS code bases grow and how are they maintained and was there any order to it? What Chris Coyier’s and Adam Morris’s article especially talked about is basically most CSS code bases only ever grow, like over time.

There hasn’t been a technical solution or a semantic solution to improve it, or not improve it but to decrease the rate of growth, the cons and growth without a lot of dropping because like Dave have said, people are terrified of removing styles, which is probably a cocktail of misinformation, some poor previous CSS writers and like you know, just the nature of CSS because the cascade is actually really powerful if you use it to its affect.

\[0:07:29.9\] DA: It’s pretty easy to have a global style somewhere and not really be fully aware of what all it’s impacting.

\[0:07:36.2\] IM: Yeah, exactly. The point of these articles is like, all right, if every technique or technology is scaling up over time, what actually works? The sort of conclusion was atomic CSS, there is no one technology but the idea of sort of single rule, single use classes that can be repeated sort of infinitely.

## Can you make automatically generated CSS classes deterministic?

I’ve been using a CSS in JS solution but I’ve been using CSS modules so you write your CSS and you have web packs CSS loader handle that so it will – when you import the CSS in JavaScript, you get an object and the keys are like, the CSS classes are the keys and the value is you know, your big, long generated string.

You can actually give it a template for like what kind of selectors you want so in development, I’ll have like the nice pretty BEM looking ones, speaking of BEM. Then in development, I just give the poor product and QA testers and be five hashes. Which, you know, I mean, presumably it saves some space in the final bundle size and stuff. I know, I’ve heard some Twitter chat about like, killing the web because like, you’re making scraping really hard and I do sympathize with that but honestly, I haven’t done a lot of scraping.

## What's Houdini mean for CSS?

Yeah the thinking behind there right? It is similar to how in JavaScript we have Polyfills and feature flags and all these stuff where you can try out upcoming features or features that are now all in browsers. We don’t really have that for CSS but there is a CSS engine deep below in the recesses of your browser and every browser and I think the Houdini Project is an effort to sort of expose that and allow essentially Polyfills to be built for it.

## Cross-browser compatibility

Life’s been good with the Evergreen browsers. Oh man in the last couple of places I worked they’re just like, “Whatever is the latest.” I’m like, “Okay cool” and I think like Emmanuel you’re talking about prefixes, browser prefixes and stuff, I think CSS grade is like such an awesome case study and how it’s developed in the community but not so released before it was really flushed out and once it was flushed out it was like, “Oh psych.” You know grid is instantly in 70% of the browsers in two weeks whereas like Flexbox was built and churned over three years and then before that, you MS this, WebKit that. Opera, whatever Opera’s thing is, shout out to the one Opera user in the world.

## Why is there so much controversy in putting CSS in JS?

Well I think with any new way of doing things there is always cognitive dissonance for a while. I remember it was early 2014 I was just getting asked to check out React and I was like, “htlm my JavaScript? I just spent my whole career avoiding it and then here we are” and I was like, “This is stupid.” But to their credit, the Facebook team on their docks were like, “This is going to seem weird but give it five minutes,” and after five minutes, I was still annoyed.

But then five minutes more, five minutes more, I was like, “Well there is a lot of power here.” So fast forward to now, most of the initially has gotten used to JSX and React in the component paradigm and so the new, the latest innovation I think has been CSS and JS and I think it come from a real place of wanting control. Since we’re talking about components and state, we want to be able to control the CSS in a programmatic way. So got to get that into JavaScript so I think CSS and JS was maybe a logical next step for frameworks that got used to putting HML in a lot of control inside a component or a review.

\[0:23:46.2\] IM: I think that was probably the knee jerk reaction. I was like, “Ugh inline styles?” Because the first few CSS and JS solutions, if memory serves me, were essentially in lining styles.

\[0:23:55.7\] DA: Oh yeah, important styles right there.

\[0:23:57.9\] IM: Yeah, oh Aphrodite was doing automatic imports in after every rule I think for a while. I think that changed but, you know, I can see having a heart attack. Be like, “Import everything?” But I think there had been some great solutions that have come out. Dave was telling me about Fela before the podcast came up and I honestly haven’t heard of it and I consider myself someone with the ear to the ground and so Fela was new to me.

The styled components looks really great, glamorous, glamour, there is a bunch of them now. I feel like an old timer saying, “I prefer my CSS modules.” So that is not even that new. But I remember pitching CSS modules a couple of years ago and they’re like, “We don’t get this,” and now CSS modules are like the old thing. Just like yeah, here I am like, “Let’s write CSS and let’s import in JavaScript,” and people are like, “Oh we’ve been there bro. We’re installing Fela,” you know?

the need I saw fulfilled by CSS and JS, which was also filled by CSS modules was the ability to conditionally apply CSS in your React components or your JavaScript framework. You know I’ve seen in angular too and all that stuff and so that’s why I want it. But the other problems around CSS like performance around generating classes for different rules and stream them together automatically. Building one style sheet that you can ship off and cutting down on a lot of duplicates and composition and stuff that was solved by CSS modules for me.

So I don’t – the only thing that CSS modules doesn’t have that I can see people wanting though I haven’t quite found the need for it is to dynamically build a CSS rule. So say if I am building on a grid and I want a row and I want it to be row span 10 then if I am using CSS modules, I have to have a CSS class that’s grid span 10.

### Who's going to win?

Well to buy myself some time, I will say that I remember I started my career as a software developer in the early 2010. So I think my first job was in 2011 and I think around that time backbone was invoked and you know backbone was a response to the j-query stuff and j-query was a response to, “Oh crap we want dynamic data in html”. So then after backbone, I came on angular and I guess the industry too was like, “Oh Angular is like got built in data binding, and then like, wow that solves the huge pain in the ass about Backbone,” right?

And then so on and so on and then Rack came out and it was like light bulb moment or branding splitting moment and you’re like, “Oh the state, the model of using state and declarative components is super powerful.” I think that’s had a huge effect I think on the JavaScript framework community and I think you have seen that happen. It’s trickled down to view and to an extent angular too and maybe Polymer, #userplatform, yes. Oh man this endless Twitter wars between Polymer, yeah WebCon.

So that was a huge tangent to buy myself some time thinking about. So I don’t think anything is going to win. I think a lot of these solutions are very good. The decision really comes down to like does AB or C technology work for your team? You know, can it meet the goals of the product, which is why we build software in the first place to deliver some value in the world, and do the people in your team feel comfortable with it?

Yeah, you know, I’ve been on teams that love JS and I was like, “I don’t know if I love it but let’s do it,” you know?
