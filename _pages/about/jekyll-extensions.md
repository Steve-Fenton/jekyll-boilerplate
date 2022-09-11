---
layout: page
title:  Jekyll Extensions
permalink: /about/jekyll-extensions/
date:   2022-09-06
description: Information about baked-in extensions in Jekyll Boilerplate.
nav-title: Jekyll Extensions
nav-level: About Jekyll Boilerplate
nav-order: 3000
nav-sitemap: true
nav-search: true
---

There are no third-party dependencies in Jekyll Boilerplate, so a couple of extensions have been baked-in to provide key features.

### Pagination

The pagination extension handles paging for your articles, posts, or blogs.

It's based on the original `jekyll-paginate` plugin, but in part of the boilerplate, not a dependency.

### Breadcrumbs

The breadcrumbs extensions shows the path to the current content, to help users orient themselves within the site. It also adds structured data to help search engines understand the structure of the website.

It's based on `jekyll-breadcrumbs`, but is part of the boilerplate and works with the custom [front matter](/about/front-matter/).

## Search

The built-in search uses `search.json` to get instant results. The search is perform client-side in real-time where JavaScript is enabled.

If JavaScript isn't enabled, or the data cannot be loaded, the search falls back to the external site search defined in `_config.yml`.

Example fallback:

```yaml
search_fallback_url: https://www.google.com/search
search_fallback_site: q
search_fallback_query: q
```

This results in a fallback search on Google of `site:jekyll.stevefenton.co.uk search terms`.

Each of the parameters is passed as a query string, in the case of Google, two separate `q` parameters:

```
/search?q=site%3Ahttps%3A%2F%2Fjekyll.stevefenton.co.uk&q=search+terms
        ^                                               ^
```

For some search providers, you might need to supply the site to search in a separate parameter to the query. If this is the case, set `search_fallback_site` to be the site-name parameter. `search_fallback_query` is for the search term.

### Liquid Regex Replace

This has been included as it supports pagination features.

Replace all:

    {{ 'Replaces 1 All 2 Number 3' | regex_replace: '^[0-9]*-', '' }}

Replace one:

    {{ 'Replaces 1 One 2 Number 3' | regex_replace_once: '[0-9]*-', '' }}