---
layout: page
title:  Getting Started
permalink: /about/getting-started/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,getting started
description: There are just a couple of tasks to turn the Jekyll Boilerplate into your own working website.
nav-order: 1000
---

Add the following to your `Gemfile`:

```ruby
gem "fenton-jekyll-boilerplate", "~> 0.0.15"
gem "fenton-jekyll-plugin", "~> 0.0.13"
```

Add the following to your `_config.yml`:

```yaml
theme: fenton-jekyll-boilerplate
plugins:
  - fenton-jekyll-plugin
```

Run `bundler` before you run `jekyll serve`.

The [full configuration file is available on GitHub](https://github.com/Steve-Fenton/jekyll-boilerplate/blob/main/_config.yml){:target="_blank"}.

The basic configuration changes to make are:

1. [Edit `_config.yml`](/config/)
2. Add your icons to `/assets/icons/`

### Additional Files and Folders

You can download the latest [starter pack](https://github.com/Steve-Fenton/jekyll-boilerplate/actions/workflows/build-jekyll.yml){:target="_blank"} by selecting the latest run and clicking on "starter-pack" in the artefacts.

- `_authors/`: Sample author data, which you can replace / extend
- `articles/`: This contains the list page that supports pages lists of articles

Jekyll version < 4.3.0

- `_data/language.yml`: Only required for versions of Jekyll prior to 4.3.0 - contains translations for the UI

## Adjusting the Theme

You can then edit the CSS variables in `/assets/css/vars.css`, or completely replace the stylesheets. We strongly recommend sticking with the supplied HTML and using your CSS chops to make style changes.

## Writing Content

Check out the [custom front matter](/about/front-matter/) to see how you can control how content is displayed in navigation. You can set short-titles and section titles for menu items.


## Running the Jekyll Boilerplate Code

If you want to download the code in the Jekyll Boilerplate repository on GitHub, follow these steps after downloading the code:

- Install the [pre-requisites](https://jekyllrb.com/docs/){:target="_blank"}
- Download the [Jekyll Boilerplate code from GitHub](https://github.com/Steve-Fenton/jekyll-boilerplate){:target="_blank"}
- Run the `bundler` command from the root folder
- Run the site using `jekyll serve`