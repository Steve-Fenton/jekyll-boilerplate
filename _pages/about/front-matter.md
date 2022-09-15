---
layout: page
title:  Front Matter
permalink: /about/front-matter/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,front matter
description: A list of all custom front matter features in Jekyll Boilerplate.
nav-order: 3000
---

There are several ways Jekyll Boilerplate gives you to customise the website using the YAML front matter on pages and posts.

The front matter appears at the top of content, in a YAML block.

```markdown
---
layout: page
title:  Front Matter
---
```

## Standard Items

### All Content

Full details of standard [Jekyll front matter](https://jekyllrb.com/docs/front-matter/) is on the Jekyll website.

- `layout`: The layout to be used for the content (or `null` to use no layout)
- `title`: The main title for the page, used in the `H1` tag (and as a fallback)
- `permalink`: Allows you full control of the published address of content (don't use this on paginated pages)
- `published`: Set this to `false` for drafts or to remove content
- `date`: The last udpated date, or date of the post - for pages this is signalled in `sitemap.xml`, so worth updating on changes. Use the format `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS +/-TTTT`

### Posts

- `categories`: Groups posts into sections
- `tags`: Tags are used to filter posts and for keywords
- `authors`: A reference to the author of a post, using the URL format, such as `steve-fenton` or `[steve-fenton, another-person]`

## Custom Items

- `excerpt`: Used on list pages (fallback `description`)
- `description`: Used in the meta tag and as a fallback for `excerpt`
- `keywords`: Used for the keywords meta tag

### Navigation Controls

The navigation controls allow you to control how pages appear in the navigation. In general, you only need to set these value on "top level" pages, or where you want to shorten text in the menu. The `nav-order` is useful in all cases where a page appears in a menu.

- `nav-level`: Set to `1` for "top-level" pages, or `0` to remove from navigation. Not required elsewhere.
- `nav-order`: Used to order the content in the site navigation
- `nav-title`: Used in the site navigation, allowing a shorter title to be used in the menu (fallback `title`)
- `nav-section`: Where the content has child content, this allows the navigation section to be named separately to the content (fallback `nav-title` then `title`)

### Featured Images

Features images are added to open graph data and used in some list views.

Set both the image and the alt text:

- `banner-image`: An image used in list views and open-graph data
- `banner-image-alt`: Used where the banner image is shown on a page

### Exclude From Sitemap / Search

By default, pages, posts, and authors are included in sitemaps and site search.

Use the following to remove them:

- `nav-sitemap: false`: To remove entries from the XML sitemaps
- `nav-search: false`: To remove entries from the site search


## Recommended Front Matter

The following front matter provides the best general experience, including setting SEO features


```markdown
---
layout:           page
title:            Front Matter
permalink:        /about/front-matter/
date:             2022-09-06
authors:          steve-fenton
keywords:         jekyll,boilerplate,front matter
description:      A list of all custom front matter features in Jekyll Boilerplate.
nav-order:        2000
banner-image:     /assets/img/2022/09/featured-700.webp
banner-image-alt: Description of the banner image
---
```

## Full Example

As an example, here is the full front matter for this page. In practice, you don't have to specify everything and can use defaults to reduce the amount of front matter.

```markdown
---
layout: page
title:  Front Matter
permalink: /about/front-matter/
date:   2022-09-06
authors: steve-fenton
description: A list of all custom front matter features in Jekyll Boilerplate.
nav-title: Front Matter
nav-order: 2000
banner-image: /assets/img/2022/09/featured-700.webp
banner-image-alt: Description of the banner image
nav-sitemap: false
nav-search: false
---
```
