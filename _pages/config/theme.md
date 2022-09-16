---
layout: page
title:  Theme Config
permalink: /config/theme/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,configuration,config,theme
description: Required theme config for Jekyll Boilerplate
nav-title: Theme
nav-order: 2
---

*Required*

Ensure the following configuration is added to the bottom of your `_config.yaml` file.

```yaml
collections:
  authors:
    output: true
    permalink: author/:title/

defaults:
  -
    scope:
      path: ''
      type: authors
    values:
      layout: author

theme: fenton-jekyll-boilerplate
plugins:
  - fenton-jekyll-plugin
```
