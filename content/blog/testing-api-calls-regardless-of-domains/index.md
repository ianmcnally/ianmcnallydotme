---
title: "Testing API calls regardless of domains"
date: "2015-04-09"
---

To test an API call in Angular (with jasmine), you inject $httpBackend, having it expect a method & URL call, then verify there aren’t any outstanding requests or expectations:

```js
afterEach(function(){
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
});

it('should GET from the API with parameters', function(){
  $httpBackend.expectGET('yourapi.com/api/parameters')).respond([]);
  TheResource.get();
})
```

But what if your API switches based on environment? Then your tests might fail when running outside of development.

Luckily, $httpBackend has got your back (I’ll take that pun, thankyouverymuch). You can add regular expressions to the expectGET (and the other METHODS), so your expectation is domain agnostic:

```js
var apiUrl = function(params) {
  return new RegExp('http.*(.com|000)/api' + params);
};
```

The regular expression is up to you. I wrote this one quickly to capture localhost:x000 or company.com.

Now my tests run free, and yours will too.
