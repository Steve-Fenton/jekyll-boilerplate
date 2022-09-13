---
layout: page
title:  Getting Started
permalink: /about/getting-started/
date:   2022-09-06
authors: steve-fenton
description: There are just a couple of tasks to turn the Jekyll Boilerplate into your own working website.
nav-title: Getting Started
nav-level: About Jekyll Boilerplate
nav-order: 1000
published: true
nav-sitemap: true
nav-search: true
---

To run Jekyll locally, set up the pre-requisites, download the code, and run a couple of commands.

- Install the [pre-requisites](https://jekyllrb.com/docs/)
- Download the [Jekyll Boilerplate code from GitHub](https://github.com/Steve-Fenton/jekyll-boilerplate)
- Run the `bundler` command from the root folder
- Run the site using `jekyll serve`

There are just a couple of tasks to turn the Jekyll Boilerplate into your own working website.

1. Edit `_config.yml`
   1. Edit the `title`
   2. Edit the `description`
   3. Edit the `owner`
   4. Edit the `url`
2. Add your analytics scripts to `analytics.html`
4. Add your icons to `/assets/icons/`

## Adjusting the Theme

You can then edit the CSS variables in `/assets/css/vars.css`, or completely replace the stylesheets. We strongly recommend sticking with the supplied HTML and using your CSS chops to make style changes.

## Writing Content

Check out the [custom front matter](/about/front-matter/) to see how you can control how content is displayed in navigation. You can set short-titles and section titles for menu items.

## Using Jekyll Boilerplate as a GEM

gemfile

    gem "fenton-jekyll-boilerplate", "~> 0.0.1"

_config.yml

    theme: fenton-jekyll-boilerplate

### Folders

articles
feed
search
sitemap

### Files

robots.txt
sitemap.xml
favicon.ico
