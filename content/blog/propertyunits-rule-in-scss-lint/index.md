---
title: 'PropertyUnits rule in SCSS Lint'
date: '2015-04-06'
---

Feeling proud about my latest open source contribution. This time, it’ to [SCSS Lint](https://github.com/brigade/scss-lint).

I added a rule that enforces the units used on element(s).

From the docs:

## PropertyUnits

Configure which units are allowed for property values.

By default a value may have any kind of unit. You can adjust which units are allowed globally by setting the global option. Alternately, you can specify a list of units for a single property by adding it to the properties option, e.g.

```ruby
PropertyUnits:
  global: ['em', 'rem', '%'] # Allow relative units globally
  properties:
    border: ['px'] # Only pixels
    'line-height': [] # No units allowed
    margin: ['em', 'rem']
```

With the above configuration, the following issues would be reported:

```css
p {
  border: 1rem solid blue; /* rem not in `border` list */
  line-height: 55px; /* px not in `line-height` list */
  padding: 10px; /* px not in `global` list */
  margin: 10%; /* % not in `margin` list */
}
```
