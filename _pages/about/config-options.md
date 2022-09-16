---
layout: page
title:  Configuration Options
permalink: /about/config-options/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,configuration,config
description: Items you can control through configuration
nav-order: 5000
---

Configuration can be a bit of a task, but it's not something you need to do regularly.

## Theme and Plugin Config

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

## Standard Config

*Required*

The following configuration entries are standard for all Jekyll Sites. You'll want to tailor them to your website.

```yaml
# Displayed in the site header
title: Jekyll Boilerplate
# Shown in the copyright footer
owner: Steve Fenton
# Website description
description: >-
  Jekyll Boilerplate is a theme-less, plugin-less clean starting point
  for Jekyll sites where you want to run only your own code.
# The subpath of your site, e.g. "/blog"
baseurl: ""
# The output folder (update this to match the baseurl, if you change it, e.g. _site/blog)
destination: _site
# The website URL
url: https://jekyll.stevefenton.co.uk
```

## Tailoring Config

*Recommended*

The following items tailor the website. The default values are shown below.

```yaml
# Sets the theme colour for browsers
theme_color_hex: 333333
# Sets the date format
date_format: "%b %-d, %Y" # i.e. Sep 5, 2022
# Whether to show exerpts on list pages
show_excerpts: false
```

## Language Config

*Recommended*

You can set the language option for the website. This selects the appropriate language from the `_data/language.yaml` file.

```yaml
# Sets the language of included text strings
language: en #en, fr, fr-be, etc
```

## Analytics Script Options

*Optional*

You should wrap analytics scripts in a host-name check to ensure they only run on your live website. The example below shows how to add Google Analytics.

```yaml
analytics_script: >-
  <script>
        function add_ga(id) {
          var script = document.createElement('script');
          script.setAttribute('async', 'async');
          script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;

          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', id, { 'anonymize_ip': true });
          gtag('set', 'allow_ad_personalization_signals', false);
        }
        if (document.location.hostname === 'jekyll.stevefenton.co.uk') {
          add_ga('G-YOUR-ID')
        }
      </script>
```

## Search Options

*Optional*

If the user has disabled JavaScript, or there is an issue with it such as a transient network fault or an error in third-party code, the search will fallback to a search provider. The settings are shown below alongside the default values. You don't need to specify this if you use the defaults.

```yaml
# A fallback search location
search_fallback_url: https://www.google.com/search
# The query parameter for the site to search (for Google, this is 'q')
search_fallback_site: q
# The query parameter for the fallback (for Google, this is 'q')
search_fallback_query: q
```

This results in a fallback search on Google of `site:jekyll.stevefenton.co.uk search terms`.

Each of the parameters is passed as a query string, in the case of Google, two separate `q` parameters:

```
/search?q=site%3Ahttps%3A%2F%2Fjekyll.stevefenton.co.uk&q=search+terms
       |^|                                             |^|
```

## Robot Options

*Optional*

You can change the contents of the `robots.txt` file used by crawlers using the `robots_txt` option. The default is shown below.

```yaml
robots_txt: >-
  User-agent: *
```

## Paging Options

If you don't set `page_size`, paging will be switched off.

```yaml
# Number of results per page
page_size: 4
# The path for articles (note, rename the "articles" folder if you change this)
paginate_path: "/articles/page-:num/"
# Should match the word for "page" above (including any separators, like -)
paginate_page: "page-"
```