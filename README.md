# diljits.com

Personal portfolio and blog of Diljit Singh. Built with [Astro](https://astro.build),
Tailwind CSS and MDX, deployed to GitHub Pages on every push to `main`.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in ./dist
npm run preview  # serve the production build
```

## Where things live

```text
src/
├── site.ts              name, description, nav links, socials, contact link
├── content/blog/        blog posts (.md / .mdx), one file per post
├── data/projects.ts     project cards on the home page
├── data/renders.ts      images on the /renders page
├── components/          one small .astro file per piece of UI
├── layouts/             BaseLayout (every page), PostLayout (blog posts)
├── lib/posts.ts         blog helpers: sorting, tags, reading time
├── scripts/             hero animation: ASCII field, keycaps, text scramble
├── styles/global.css    colours, fonts and the few shared styles
└── pages/               one file per route
```

## Common edits

**Write a blog post.** Add `src/content/blog/my-post.mdx`. The file name becomes
the URL (`/blog/my-post`).

```mdx
---
title: "My post"
description: "One sentence shown in lists, search results and link previews."
date: 2026-01-31
tags: ["astro", "css"]
draft: true   # optional: visible in `npm run dev`, hidden on the live site
---

Post body in Markdown.
```

The post then shows up on its own on the home page, `/blog`, its tag pages,
the RSS feed (`/rss.xml`) and the sitemap.

**Add a project.** Add an entry to `src/data/projects.ts`.

**Add a render.** Upload the image to the R2 bucket and add its file name to
`src/data/renders.ts`.

**Change colours or fonts.** Edit the variables at the top of
`src/styles/global.css`. Light and dark follow the visitor's system setting.

**Change nav, socials or the contact link.** Edit `src/site.ts`.
