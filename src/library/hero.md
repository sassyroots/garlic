---
layout: base.html
title: Hero
tags:
  - patterns
  - design system
---

# {{ title }}

The hero component is used at the top of the home and issue pages.

### Content Model
Base Content (required for all pages)
- title: h1 - basic page title
- issue: number - optional
- when: date (format month year)
- podlink: link to podcast episode
  
Hero (required for all pages)
- hero
  - img: image
  - article: h2 - optional for pulling content from other pages
  - summary: text - required if using content from current page

Spotlight (optional for a sub feature, mostly used for home page)
_see [spotlight](/library/spotlight) for more information_

- spotlight
  - title: h2 - optional
  - subtitle: h3 - optional for using content from current page
  - summary: text - required if using content from current page
