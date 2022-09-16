---
layout: page
title:  Jekyll Extensions
permalink: /about/jekyll-extensions/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,jekyll extensions
description: Information about baked-in extensions in Jekyll Boilerplate.
nav-order: 3000
---

There are no third-party dependencies in Jekyll Boilerplate, so a couple of extensions have been baked-in to provide key features.

## Pagination

The pagination extension handles paging for your articles, posts, or blogs.

It's based on the original `jekyll-paginate` plugin, but in part of the boilerplate, not a dependency.

## Breadcrumbs

The breadcrumbs extensions shows the path to the current content, to help users orient themselves within the site. It also adds structured data to help search engines understand the structure of the website.

It's based on `jekyll-breadcrumbs`, but is part of the boilerplate and works with the custom [front matter](/about/front-matter/).

## Authors

Authors are baked-in, allowing you to link posts to an author and display an author page, based on [Jet Holt's](https://jetholt.com/jekyll/){:target="_blank"} Jekyll articles.

It used the `authors` front matter, see the [front matter](/about/front-matter/) page for more information.

## Search

The built-in search uses `search.json` to get instant results. The search is perform client-side in real-time where JavaScript is enabled.

If JavaScript isn't enabled, or the data cannot be loaded, the search falls back to the external site search defined in your [site search configuration](/about/config-options/#search-options).

For some search providers, you might need to supply the site to search in a separate parameter to the query. If this is the case, set `search_fallback_site` to be the site-name parameter. `search_fallback_query` is for the search term.

## Liquid Translations

For text in template items, translations are retrieved from `_data/language.yaml`.

```yaml
navigation:
  title:
    en: Navigation
```

Language keys are lower-case ISO codes, so `en`, `en-gb`, `fr`, `fr-be`.

It is recommended that you add base language sets (i.e. `en`) before extending them with specific language sets (i.e. `en-us`). The specific language set only needs to supply items where there is a difference.

```yaml
car:
  wheel:
    en: wheel # will be used for en and en-US
  bonnet:
    en: bonnet
    en-US: hood
```

### Liquid Regex Replace

This has been included as it supports pagination features.

Replace all:

    {{ 'Replaces 1 All 2 Number 3' | regex_replace: '^[0-9]*-', '' }}

Replace one:

    {{ 'Replaces 1 One 2 Number 3' | regex_replace_once: '[0-9]*-', '' }}