---
title: next-advanced-sitemap
description: Sitemap, sitemap index and robots.txt generator for Next.js App Router, with XML streaming and IndexNow support.
githubUrl: https://github.com/fomadev/next-advanced-sitemap
language: TypeScript
order: 6
tags: [nextjs, sitemap, seo, typescript]
latestVersion: "2.0.0"
downloads:
  - version: "2.0.0"
    date: "2026-10"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v2.0.0/next-advanced-sitemap-v2.0.0-dist.zip
  - version: "1.4.0"
    date: "2026-09-09"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.4.0/next-advanced-sitemap-v1.4.0-dist.zip
  - version: "1.3.10"
    date: "2026-08-17"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.10/next-advanced-sitemap-v1.3.10-dist.zip
  - version: "1.3.9"
    date: "2026-08-16"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.9/next-advanced-sitemap-v1.3.9-dist.zip
  - version: "1.3.8"
    date: "2026-08-16"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.8/next-advanced-sitemap-v1.3.8-dist.zip
  - version: "1.3.7"
    date: "2026-08-15"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.7/next-advanced-sitemap-v1.3.7-dist.zip
  - version: "1.3.6"
    date: "2026-08-14"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.6/next-advanced-sitemap-v1.3.6-dist.zip
  - version: "1.3.5"
    date: "2026-08-13"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.5/next-advanced-sitemap-v1.3.5-dist.zip
  - version: "1.3.4"
    date: "2026-08-11"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.4/next-advanced-sitemap-v1.3.4-dist.zip
  - version: "1.3.3"
    date: "2026-08-08"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.3/next-advanced-sitemap-v1.3.3-dist.zip
  - version: "1.3.2"
    date: "2026-08-07"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.2/next-advanced-sitemap-v1.3.2-dist.zip
  - version: "1.3.1"
    date: "2026-08-07"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.1/next-advanced-sitemap-v1.3.1-dist.zip
  - version: "1.3.0"
    date: "2026-08-05"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.3.0/next-advanced-sitemap-v1.3.0-dist.zip
  - version: "1.2.8"
    date: "2026-08-04"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.2.8/next-advanced-sitemap-v1.2.8-dist.zip
  - version: "1.2.7"
    date: "2026-08-03"
    files:
      - os: universal
        label: Distribution bundle
        url: https://github.com/fomadev/next-advanced-sitemap/releases/download/v1.2.7/next-advanced-sitemap-v1.2.7-dist.zip
---

An advanced sitemap generator for Next.js applications. It produces XML
sitemaps, sitemap indexes and `robots.txt` files, with streaming generation,
strict-mode validation and IndexNow support.

## Highlights

- **XML sitemaps**, **sitemap index** and **`robots.txt`** — one library
- **Streaming generation** for large sites (database cursors, async iterables)
- **Strict mode** that throws before invalid entries reach Search Console
- **IndexNow client** to notify Bing, Yandex, Seznam on every change
- **Google Images / Video / News** extensions with full schema validation
- **i18n support** via `xhtml:link` (hreflang alternates)
- **Optional route scanner** for App Router (`next-advanced-sitemap/scanner`)
- **TypeScript-first**, zero external dependencies, dual ESM/CJS

## Install

```bash
npm install next-advanced-sitemap