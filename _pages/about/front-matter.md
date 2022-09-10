---
layout: page
title:  Front Matter
permalink: /about/front-matter/
date:   2022-09-06
description: A list of all custom front-matter features in Jekyll Boilerplate.
nav-title: Front Matter
nav-level: About Jekyll Boilerplate
nav-order: 2000
nav-sitemap: true
nav-search: true
---

There are several ways Jekyll Boilerplate gives you to customise the website using the YAML front-matter on pages and posts.

## Standard Items

- `layout`: The layout to be used for the content
- `title`: The main title for the page, used in the `H1` tag (and as a fallback)
- `date`: The last udpated date, or date of the post - for pages this is signalled in `sitemap.xml`, so worth updating on changes
- `description`: Used in the meta tag and where exerpts are used on the site
- `excerpt`: Used on list pages (fallback `description`)

## Custom Items

- `nav-title`: Used in the site navigation, allowing a shorter title to be used in the menu (fallback `title`)
- `nav-section`: Where the content has child content, this allows the navigation section to be named separately to the content (fallback `nav-title` then `title`)
- `nav-level`: The name of the parent page, or `1` for top-level pages
- `nav-order`: Used to order the content in the site navigation
- `nav-sitemap`: Whether to add the content to `sitemap.xml`
- `nav-search`: Whether to add the content to the site search


