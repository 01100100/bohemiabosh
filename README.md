# BohmeiaBosh

This repo contains the code for the website [shred2bohemia.com](https://shred2bohemia.com).

It is deployed to netlify [![Netlify Status](https://api.netlify.com/api/v1/badges/6f4819c3-2541-41c8-b37e-ae9c28a29092/deploy-status)](https://app.netlify.com/sites/bohemiabosh/deploys)

## Site

The Shred2Bohemia website is built using [Hugo](https://gohugo.io/), a static site generator and deployed to a [content delivery network](https://en.wikipedia.org/wiki/Content_delivery_network) managed by [netlify](https://www.netlify.com/).

A backend server must be deployed to collect form responses. This site is configured to send form data to a [`goatform`](https://github.com/01100100/goatforms) backend hosted using [`fly.io`](fly.io).

The site uses `goatcounter` analytics and is configured to send anonymous traffic data to an instance is also hosted on `fly.io`. I have a repo [https://github.com/01100100/goat](https://github.com/01100100/goat) that automates the deployment via CI/CD and git hub actions.

The aim of a good static site structure, is to split up and separate the different parts of a modern web page.

- Content data (text, images, geo-graphic data, urls)
- layout templates (display, fonts, colors)
- coding logic (tying the above two together and adding tracking and enable forms)

A good structure aims to

- Enable easy additions.
- Make it simple to refactor the site.
- Facilitate future Reuse the site.
- Compose complex things from simple blocks.

## Theme

Shred2Bohemia uses the [Hugo](https://gohugo.io/) static site generator with the [gradysx-hugo](https://themes.gohugo.io/themes/graysx-hugo/) theme.

## Content

[forestry.io](forestry.io) is a content management system front end designed to integrate on top of this github repo, and updates the content part of the static site data files via git-ops. It should provided a quick edit-preview-publish workflow. It was set up with Shred2Bohemia to provides a way to edit content in and encourages collaboration amongst developers and non-developers.

The content management system gui is available through the url [https://app.forestry.io/sites/apgkmy0gpobarq](https://app.forestry.io/sites/apgkmy0gpobarq).

## Repo structure

```bash
├── poetry.lock             -- (programming stuff)
├── pyprojectsd.toml        -- (programming stuff)
├── pyproject.toml          -- (programming stuff)
├── README.md               -- **THIS FILE**
└── site
    ├── archetypes
    │   └── default.md      -- (programming stuff)
    ├── config.toml         -- website config values like url and menu items
    ├── data
    │   └── homepage.yml    -- data for website like checkpoints, image paths, messages
    ├── layouts
    │   ├── index.html      -- main page template
    │   └── partials        -- sub templates included in the mainpage
    │       ├── footer.html
    │       ├── header.html
    │       └── head.html
    ├── static
    │   └── assets
    │       ├── favicon.png
    │       ├── img         -- images for the site
    │       │   ├── berlin-tv-tower.jpg
    │       │   ├── bg-masthead.jpg
    │       │   ├── bg-signup.jpg
    │       │   ├── bunker.jpg
    │       │   ├── demo-image-01.jpg
    │       │   ├── demo-image-02.jpg
    │       │   ├── elbesandstein.jpg
    │       │   └── ipad.png
    │       └── js
    │           └── scripts.js
    └── themes
        └── graysx
```
