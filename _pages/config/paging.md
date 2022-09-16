---
layout: page
title:  Paging Config
permalink: /config/paging/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,configuration,config,paging
description: Paging configuration options for Jekyll Boilerplate
nav-title: Paging
nav-order: 5
---

*Optional*

If you don't set `page_size`, paging will be switched off.

```yaml
# Number of results per page
page_size: 4
# The path for articles
paginate_path: "/articles/page-:num/"
# Should match the word for "page" above
paginate_page: "page-"
```