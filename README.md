# Jekyll Boilerplate

An opinionated boilerplate Jekyll site with its own theme, which allows you to set up a Jekyll site with no plugins.

The theme has variables you can use to customize it, or you can use it as a starting point to create a custom theme.

The YAML headers have custom properties that give you more control over how items are displayed.

## Your to do list

1. Edit `_config.yml`
   1. `title`
   2. `description`
   3. `owner`
   4. `url`
2. Add your analytics scripts to `analytics.html`
4. Add your icons to `/assets/icons/`

## Navigation

### Menu title

You can set the navigation to use an alternate name to the `title` text for menus (the main navigation and the breadcrumbs).

    nav-title: Short Title

### Show in sitemap

Set whether pages or posts should appear in the sitemap.

    nav-sitemap: true

### Show in search

Set whether pages or posts should appear in the search.

    nav-search: true

### Top-Level Pages

Top level pages are set to `1`.

    nav-level: 1
    nav-order: 3000

### Sub pages

Sub-pages reference their parent by title

    nav-level: Sample Page
    nav-order: 3000

## Extensions

### Pagination

Based on the deprecated `jekyll-paginate` plugin, but updated.

### Breadcrumbs

Based on `jekyll-breadcrumbs` but updated to work with the navigation front-matter.

### Markdown Extensions

There is a markdown extension for creating `<div>` elements with a class name (or names).

    :::class1 class2
    Text
    :::

Which outputs:

   <div class="class1 class2">
   Text
   </div>

You can use markdown within the element.

### Liquid Regex Replace

Replace all:

    {{ 'Replaces 1 All 2 Number 3' | regex_replace: '^[0-9]*-', '' }}

Replace one:

    {{ 'Replaces 1 One 2 Number 3' | regex_replace_once: '[0-9]*-', '' }}