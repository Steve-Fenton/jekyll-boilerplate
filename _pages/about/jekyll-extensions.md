---
layout: page
title:  Jekyll Extensions
permalink: /about/jekyll-extensions/
date:   2022-09-06
description: Information about baked-in extensions in Jekyll Boilerplate.
nav-title: Jekyll Extensions
nav-level: About Jekyll Boilerplate
nav-order: 4500
nav-sitemap: true
nav-search: true
---

There are no third-party dependencies in Jekyll Boilerplate, so a couple of extensions have been baked-in to provide key features.

### Pagination

Based on the deprecated `jekyll-paginate` plugin, but updated.

### Breadcrumbs

Based on `jekyll-breadcrumbs` but updated to work with the navigation front-matter.

### Liquid Regex Replace

Replace all:

    {{ 'Replaces 1 All 2 Number 3' | regex_replace: '^[0-9]*-', '' }}

Replace one:

    {{ 'Replaces 1 One 2 Number 3' | regex_replace_once: '[0-9]*-', '' }}