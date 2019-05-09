---
title: "Deciding on new technologies"
date: "2016-02-09"
---

In my day to day as a software consultant, I often help evaluate new technologies (be it a framework, library, language). Over time, I noticed certain questions and thoughts continued to come up. Things like – how’s the community around it? How many people are using it? Is it easy to learn? And so on.

Below is my effort to give voice to all the subtle feelings, the small questions and thoughts and everything else that happens while researching.

## Usage

It is important for a technology to have an engaged community or a strong interest in a community (i.e., React in front end dev circles). There are several ways to measure this, which include the following:

- Social media engagement - People are tweeting and writing blog posts about this tech. Their tone would be one of excitement or intrigue. Others may write about how they are adopting the new tech.
- Package downloads in a given month - Some package managers, like npm, give statistics on how many downloads a package will have over time. Anywhere in the thousands is good. For example, React and RxJS have ~1 million downloads per month.
- Github stars and forks - Another measure of usage, and peer engagement
- Amount of pull requests and their acceptance rate - Is the project actively being developed and improved? It’s also important to gauge how the maintainers regard changes. That will affect contribution, and by extension, adoption.
- Amount of open issues - How many there are and what severity. This will give you a sense of how ready it is (see also: production worthiness). It is also important to gauge maintainer quality. Are they helpful and open, or closed and prickly? The project won’t get far with bad contributors.

## Questions to ask

As a developer evaluating a new technology, there are a series of questions you may ask or that may be asked to you before adoption. The following questions should give you a good sense of whether or not the technology is the right choice now. The answer to each of these does not have to be a yes, but the majority of these questions should be answered positively.

### Advantages

- What are the technology’s advantages over the current offerings?
    - Also, what holes does it fill, or how does it improve current offerings?
- Could you solve the same problem with an existing piece of technology? (Put another way - what else could you do?)

### Design

- Is the documentation good?
- What does the project’s roadmap look like?
- Will you write less or better code with this technology?
- Does this technology align with the language or framework it is intended to be used with?
    - See their philosophies and design goals
- Is the source code well tested?

### Community engagement

- What excites you about this technology?
- Could you convince someone with no experience in this particular tech stack on this technology choice? (E.g., a seasoned ruby developer on webpack)

### Integration

- If the technology integrates into another system, do the two roadmaps and philosophies align?
- Is there an escape hatch in case this technology does not work? (E.g., rendering HTML from React components)
- Is it stable enough to use in production?
- Will/has/could this technology require a lot of churn? (E.g., React in early versions)
- How is the ecosystem surrounding this technology?

### Extended usage

- Besides its intended usage, can you see the technology being adopted in a different setting? (E.g., Redux in server-side apps)
- Do you see yourself working with this technology in one week, one month, one year, five years?

### Project adoption

- How would you convince another developer to change to this technology?
- What types of projects would this be useful for?
- Is this easy to adopt into an existing project?
- Is this easy for a junior to learn?
- Could you introduce this to a skeptical team in isolated pieces? (See also: escape hatch)
