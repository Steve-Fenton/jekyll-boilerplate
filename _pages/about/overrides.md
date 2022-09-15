---
layout: page
title:  Overrides
permalink: /about/overrides/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,overrides,files
description: A description of theme files you can override.
nav-order: 2000
---

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

