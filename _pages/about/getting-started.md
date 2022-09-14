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

Add the following to your `Gemfile`:

gem "fenton-jekyll-boilerplate", "~> 0.0.8"
gem "fenton-jekyll-plugin", "~> 0.0.4"

Add the following to your `_config.yml`:

theme: fenton-jekyll-boilerplate
plugins:
  - fenton-jekyll-plugin

Run `bundler` before you run `jekyll serve`.

### Additional Files and Folders

You can download the latest [starter pack](https://github.com/Steve-Fenton/jekyll-boilerplate/actions/workflows/build-jekyll.yml) by selecting the latest run and clicking on "starter-pack" in the artefacts.

- `_authors/`: Sample author data, which you can replace / extend
- `articles/`: This contains the list page that supports pages lists of articles

Jekyll version < 4.3.0

- `_data/language.yml`: Only required for versions of Jekyll prior to 4.3.0 - contains translations for the UI

### Overrides

Files in the theme will be used, unless you supply an alternate version of the same file. This means you can just use things out of the box, or you can override one or more files.

We have some recommended files to customise, as well as a list of more advanced replacements you can make.

#### Recommended

- `assets`
  - `css`
    - `vars.css` see [vars.css on GitHub](https://github.com/Steve-Fenton/jekyll-boilerplate/blob/main/assets/css/vars.css)
  - `icons` see [icons on GitHub](https://github.com/Steve-Fenton/jekyll-boilerplate/tree/main/assets/icons)
    - `android-chrome-192x192.png` (192x192)
    - `android-chrome-512x512.png` (512x512)
    - `apple-touch-icon.png` (180x180)
    - `favicon.ico` (48x48)
    - `favicon-16x16.png` (16x16)
    - `favicon-32x32.png` (32x32)

#### Advanced

- `/assets/css/main.css` see [main.css on GitHub](https://github.com/Steve-Fenton/jekyll-boilerplate/blob/main/assets/css/main.css)
- `/assets/css/code.css` see [code.css on GitHub](https://github.com/Steve-Fenton/jekyll-boilerplate/blob/main/assets/css/code.css)

##### Sitemap and Feeds

- `assets`
  - `sitemap`
    - `atom.xml`: A feed of recent posts, for feed readers and subscriptions
    - `sitemap.xml`: A sitemap list that points to the authors, pages, and posts site maps
    - `authors.xml`: A sitemap for authors
    - `pages.xml`: A sitemap for pages
    - `posts.xml`: A sitemap for posts

##### Robot File

We recommend you adjust your robot file via the `site.robots_txt` variable. If you really want to replace it with your own, override the theme file:

- `assets`
  - `sitemap`
    - `robots.txt`: Uses `permalink: /robots.txt` to push the file to the base folder

##### Search

- `assets`
  - `search`
    - `search.json`: Data for the site search feature
    - `search.md`: The search page (you could override this to place content above the search)
    - `404.html`: Page not found includes a search box - uses `permalink: /404.html`

