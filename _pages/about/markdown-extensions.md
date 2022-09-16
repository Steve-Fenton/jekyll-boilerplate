---
layout: page
title:  Markdown Extensions
permalink: /about/markdown-extensions/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,markdown extensions
description: Examples of custom markdown extensions in Jekyll Boilerplate.
nav-order: 4000
---

Built-in custom markdown extensions for Jekyll Boilerplate are explained below.

## HTML Division Element

There is a markdown extension that allows you to insert `<div>` elements with one or more class names.

    :::note
    Your markdown content
    :::

The output for this is:

    <div class="note">
    Your markdown content
    </div>

And it looks like this:

:::note
Your markdown content
:::

