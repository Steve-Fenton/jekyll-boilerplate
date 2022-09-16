---
layout: page
title:  Analytics Config
permalink: /config/analytics/
date:   2022-09-06
authors: steve-fenton
keywords: jekyll boilerplate,configuration,config,analytics
description: How to configure analytics scripts in Jekyll Boilerplate
nav-title: Analytics
nav-order: 6
---

*Optional*

You should wrap analytics scripts in a host-name check to ensure they only run on your live website. The example below shows how to add Google Analytics. You should add your host name and GA ID.

```yaml
analytics_script: >-
  <script>
        function add_ga(id) {
          var script = document.createElement('script');
          script.setAttribute('async', 'async');
          script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;

          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', id, { 'anonymize_ip': true });
          gtag('set', 'allow_ad_personalization_signals', false);
        }
        if (document.location.hostname === 'your.hostname.com') {
          add_ga('G-YOUR-ID')
        }
      </script>
```

If you use a script loader or consent management tool, you would load it in the same way here.