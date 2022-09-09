---
layout: page
title:  GitHub Pages
permalink: /about/github-pages/
date:   2022-09-06
description: How to get the most from Jekyll Boilerplate and GitHub Pages.
nav-title: GitHub Pages
nav-level: About Jekyll Boilerplate
nav-order: 2000
nav-sitemap: true
nav-search: true
---

Some features won't work in the GitHub Pages flavour of Jekyll as they limit extensions for security purposes. However, you can use the GitHub [Jekyll Deploy Action](https://github.com/jeffreytse/jekyll-deploy-action){:target="blank"} to run your own build and publish to GitHub Pages

The Jekyll Deploy Action is really easy to set up and publishes the `_site` output to a branch in your repository. You just hook up GitHub Pages to the branch and it works.

That's what we're doing for this site, which runs on GitHub pages with a custom domain.

:::note

The settings for GitHub Pages are:

- Source: Deploy from a branch
- Branch: gh-pages /(root)

:::