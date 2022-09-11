---
layout: page
title:  Front Matter
permalink: /about/front-matter/
date:   2022-09-06
authors: steve-fenton
description: A list of all custom front-matter features in Jekyll Boilerplate.
nav-title: Front Matter
nav-level: About Jekyll Boilerplate
nav-order: 2000
published: true
nav-sitemap: true
nav-search: true
---

There are several ways Jekyll Boilerplate gives you to customise the website using the YAML front-matter on pages and posts.

The front matter appears at the top of content, in a YAML block.

```markdown
---
layout: page
title:  Front Matter
---
```

## Standard Items

### All Content

Full details of standard [Jekyll front-matter](https://jekyllrb.com/docs/front-matter/) is on the Jekyll website.

- `layout`: The layout to be used for the content (or `null` to use no layout)
- `title`: The main title for the page, used in the `H1` tag (and as a fallback)
- `permalink`: Allows you full control of the published address of content (don't use this on paginated pages)
- `published`: Set this to `false` for drafts or to remove content
- `date`: The last udpated date, or date of the post - for pages this is signalled in `sitemap.xml`, so worth updating on changes. Use the format `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS +/-TTTT`

### Posts

- `categories`: Groups posts into sections
- `tags`: Tags are used to filter posts and for keywords
- `authors`: A reference to the author of a post, using the URL format, such as `steve-fenton` or `[steve-fenton, another-person]`

## Custom Items

- `excerpt`: Used on list pages (fallback `description`)
- `description`: Used in the meta tag and where exerpts are used on the site
- `nav-title`: Used in the site navigation, allowing a shorter title to be used in the menu (fallback `title`)
- `nav-section`: Where the content has child content, this allows the navigation section to be named separately to the content (fallback `nav-title` then `title`)
- `nav-level`: The name of the parent page, or `1` for top-level pages
- `nav-order`: Used to order the content in the site navigation
- `nav-sitemap`: Whether to add the content to `sitemap.xml`
- `nav-search`: Whether to add the content to the site search

## Full Example

As an example, here is the full front-matter for this page. In practice, you don't have to specify everything and can use defaults to reduce the amount of front-matter.

```markdown
---
layout: page
title:  Front Matter
permalink: /about/front-matter/
date:   2022-09-06
authors: steve-fenton
description: A list of all custom front-matter features in Jekyll Boilerplate.
nav-title: Front Matter
nav-level: About Jekyll Boilerplate
nav-order: 2000
published: true
nav-sitemap: true
nav-search: true
---
```
