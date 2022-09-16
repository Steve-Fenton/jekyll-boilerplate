---
layout: page
title:  Search Config
permalink: /config/search/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,configuration,config,search
description: How to override the fall back search in Jekyll Boilerplate
nav-title: Search
nav-order: 7
---

*Optional*

If the user has disabled JavaScript, or there is an issue with it such as a transient network fault or an error in third-party code, the search will fallback to a search provider. The settings are shown below alongside the default values. You don't need to specify this if you use the defaults.

```yaml
# A fallback search location
search_fallback_url: https://www.google.com/search
# The query parameter for the site to search
search_fallback_site: q
# The query parameter for the fallback
search_fallback_query: q
```

This results in a fallback search on Google of `site:jekyll.stevefenton.co.uk search terms`.

Each of the parameters is passed as a query string, in the case of Google, two separate `q` parameters:

```
/search
    ?
    q=site%3Ahttps%3A%2F%2Fjekyll.stevefenton.co.uk
    &
    q=search+terms
```
