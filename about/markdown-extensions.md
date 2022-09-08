---
layout: page
title:  Markdown Extensions
permalink: /about/markdown-extensions/
date:   2022-09-06
nav-title: Markdown Extensions
nav-level: About Jekyll Boilerplate
nav-order: 2000
nav-sitemap: true
nav-search: true
---

Built-in markdown extensions are explained below.

## HTML Division Element

There is a markdown extension that allows you to insert `<div>` elements with one or more class names.

    :::class-one class-two
    Your markdown content
    :::

The output for this is:

    <div class="class-one class-two">
    Your markdown content
    </div>