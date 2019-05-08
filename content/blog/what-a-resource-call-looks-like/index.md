---
title: "what a $resource call looks like"
date: "2015-03-27"
---

Because I can never keep this straight, this is what a $resource call looks like:

```
// Resource = $resource(...)
// i.e., a POST:

new Resource(payload).$save(URLparameters);

```
