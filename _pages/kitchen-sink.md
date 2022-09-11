---
layout: page
title:  Heading 1
permalink: /kitchen-sink/
date:   2022-09-06
authors: steve-fenton
description: The most common content components arranged for testing.
nav-title: Kitchen Sink
nav-level: 1
nav-order: 4000
published: true
nav-sitemap: true
nav-search: true
---

This page contains the most common content components, such as:

- [Block Quotes](#block-quote)
- [Code](#code)
- [Custom Elements](#custom-element)
- [Images](#images)
- [Lists](#lists)
- [Horizontal Rules](#horizontal-rule)
- [Links](#links)
- [Tables](#tables)
- [Text](#text)

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a. Montes nascetur ridiculus mus mauris vitae ultricies.

### Heading 3

Lectus nulla at volutpat diam ut. Tortor vitae purus faucibus ornare suspendisse. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Velit euismod in pellentesque massa. Quis commodo odio aenean sed. Quis auctor elit sed vulputate mi sit amet.

#### Heading 4

Condimentum lacinia quis vel eros. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. Dignissim cras tincidunt lobortis feugiat vivamus at. Luctus venenatis lectus magna fringilla urna.

##### Heading 5

Suspendisse faucibus interdum posuere lorem ipsum dolor. Ultricies lacus sed turpis tincidunt id aliquet risus. Volutpat est velit egestas dui id ornare arcu. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Enim eu turpis egestas pretium aenean pharetra magna. Nulla malesuada pellentesque elit eget.

###### Heading 6

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius morbi enim nunc faucibus a. Montes nascetur ridiculus mus mauris vitae ultricies.

## Block Quote

Markdown:

```markdown
> Quiet minds cannot be perplexed or frightened 
but go on in fortune or misfortune at their own 
private pace, like a clock during a thunderstorm. 
<cite>Robert Louis Stevenson</cite>
```

Result:

> Quiet minds cannot be perplexed or frightened 
but go on in fortune or misfortune at their own 
private pace, like a clock during a thunderstorm. 
<cite>Robert Louis Stevenson</cite>

## Code

Markdown:

`````markdown
Inline `code` and a code block.

    const elem = document.querySelector('.elem');

A code block with a language set.

```javascript
const elem = document.querySelector('.elem');
```
`````

Result:

Inline `code` and a code block.

    const elem = document.querySelector('.elem');

A code block with a language set.

```javascript
const elem = document.querySelector('.elem');
```

## Custom Element

Markdown:

```markdown
:::note
This is a custom div element with the class `note`
:::
```

Result:

:::note
This is a custom div element with the class `note`
:::

## Images

Markdown:

```markdown
![An old book front for Jekyll and Hyde](/assets/img/jekyll-and-hyde.webp){:loading="lazy"}
```

Result:

![An old book front for Jekyll and Hyde](/assets/img/jekyll-and-hyde.webp){:loading="lazy"}

## Lists

Markdown:

```markdown
1. Item
1. Item
   - Nested Item
1. Item

   Item additional paragraph.
```

Result:

1. Item
1. Item
   - Nested Item
1. Item

   Item additional paragraph.

## Horizontal Rule

Markdown:

```markdown
***
```

Result:

***

## Links

Markdown:

```markdown
<https://jekyll.stevefenton.co.uk/kitchen-sink/>

[Jekyll Boilerplate](https://jekyll.stevefenton.co.uk/ "The Jekyll Boilerplate Site")
```

Result:

<https://jekyll.stevefenton.co.uk/kitchen-sink/>

[Jekyll Boilerplate](https://jekyll.stevefenton.co.uk/ "The Jekyll Boilerplate Site")

## Tables

Markdown:

```markdown
| Item | One | Two | Three |
| :--  | :-: | :-: | :-:   |
| A    | 1   | 2   | 3     |
| B    | 2   | 3   | 4     |
| C    | 3   | 4   | 5     |
```

Result:

| Item | One | Two | Three |
| :--  | :-: | :-: | :-:   |
| A    | 1   | 2   | 3     |
| B    | 2   | 3   | 4     |
| C    | 3   | 4   | 5     |

## Text

Markdown:

```markdown
Text can use *emphasis* or **strong**. You can create\
line breaks.
```

Result:

Text can use *emphasis* or **strong**. You can create\
line breaks.