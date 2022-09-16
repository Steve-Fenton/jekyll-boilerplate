---
layout: page
title:  Host Jekyll on GitHub Pages
permalink: /about/github-pages/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,github pages,github action
description: How to get the most from Jekyll Boilerplate and GitHub Pages.
nav-title: GitHub Pages
nav-order: 7000
---

GitHub use a sandbox version of Jekyll that limits some features for security purposes. To use all features, use the GitHub [Jekyll Deploy Action](https://github.com/jeffreytse/jekyll-deploy-action){:target="blank"} to run your own build.

You can copy [the Jekyll Boilerplate GitHub Action configuration](https://github.com/Steve-Fenton/jekyll-boilerplate/tree/main/.github/workflows) if you want to host your site on GitHub Actions.

The Jekyll Deploy Action is really easy to set up and publishes the `_site` output to a branch in your repository. All you need to do is set up GitHub Pages to serve the content in the branch.

That's what we're doing for this site, which runs on GitHub pages with a custom domain.

:::note

The settings for GitHub Pages are:

- Source: Deploy from a branch
- Branch: gh-pages /(root)

:::