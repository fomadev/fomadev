---
title: Foma Render Engine
description: High-fidelity email rendering micro-service. Interprets a proprietary `.fre` format and produces emails compatible with every client.
githubUrl: https://github.com/fomadev/foma-render-engine
language: Node.js
order: 8
tags: [email, nodejs, renderer]
license: FPL
latestVersion: "1.0.0"
downloads:
  - version: "1.0.0"
    date: "2026-04-06"
    files:
      - os: universal
        label: Release on GitHub
        url: https://github.com/fomadev/foma-render-engine/releases/tag/v1.0.0
---

A micro-service for high-fidelity email rendering. It interprets the
proprietary `.fre` format — a simplified HTML/CSS template syntax — and
produces emails that render identically across Outlook, Gmail, Apple Mail
and mobile clients.

## Highlights

- **Interprets the proprietary `.fre` format** (Foma Render Extension)
- **Compatible with all major email clients** — Outlook, Gmail, Apple Mail, mobile
- **Automatic CSS inlining** powered by Juice, for 100% client compatibility
- **Handlebars integration** for dynamic data injection (personalization)
- **Centralized layout** — one `layout.fre` for consistent branding across services
- **Dockerized** — ready to deploy with Node 22 Alpine
- **Used across the Fordima Inc. ecosystem** (FomaBank, Dzoket, and others)

## Architecture

| Layer | Technology |
| :--- | :--- |
| Runtime | Node.js 22 |
| Framework | Fastify |
| Template engine | Handlebars |
| CSS inlining | Juice |
| Container | Docker (Node 22 Alpine) |

## Included templates

- **`layout.fre`** — the global Foma branded framework, shared across all services
- **`otp.fre`** — security-first verification code template
- **`welcome.fre`** — onboarding template for new users

## How it works

A typical render request takes a template name, a data payload, and returns
the final HTML email with every style inlined:

```json
POST /render
{
  "template": "otp",
  "data": {
    "code": "482 913",
    "expiresIn": "10 minutes"
  }
}