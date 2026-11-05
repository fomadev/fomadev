---
title: Phive
description: VS Code extension that turns the PHP development environment into a Live experience with auto-reload, smart port management and HTTPS support.
githubUrl: https://github.com/fomadev/phive
language: TypeScript
order: 5
tags: [vscode, php, live-reload, devtools]
latestVersion: "1.2.1"
downloads:
  - version: "1.2.1"
    date: "2026-09-09"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.2.1/phive-1.2.1.vsix
  - version: "1.2.0"
    date: "2026-08-17"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.2.0/phive-1.2.0.vsix
  - version: "1.1.6"
    date: "2026-08-04"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.1.6/phive-1.1.6.vsix
  - version: "1.1.5"
    date: "2026-08-03"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.1.5/phive-1.1.5.vsix
  - version: "1.1.4"
    date: "2026-07-10"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.1.4/phive-1.1.4.vsix
  - version: "1.1.3"
    date: "2026-06-28"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.1.3/phive-1.1.3.vsix
  - version: "1.1.2"
    date: "2026-05-24"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.1.2/phive-1.1.2.vsix
  - version: "1.1.1"
    date: "2026-05-22"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.1.1/phive-1.1.1.vsix
  - version: "1.1.0"
    date: "2026-04-22"
    files:
      - os: universal
        label: VS Code extension (.vsix)
        url: https://github.com/fomadev/phive/releases/download/v1.1.0/phive-1.1.0.vsix
---

Phive is a VS Code extension for live PHP development. It serves your PHP
project locally, watches your files, reloads the browser on save, and handles
ports and HTTPS automatically.

## Highlights

- **Live reload** on save — PHP, `.css`, `.js`, `.json`, and `.env` files
- **Smart port management** — if 8000 or 9001 is busy, the next free port is used automatically
- **Custom ports** via `phive.port`
- **Custom PHP path** via `phive.phpPath` (XAMPP, Laragon, custom installs)
- **HTTPS support** with auto-generated self-signed certificates and a native reverse proxy
- **Multi-root workspaces** — Phive asks which folder to serve
- **Automatic restart** when a `.env` file changes
- **Path exclusions** via `phive.ignorePaths` (default: `node_modules`, `.git`, `vendor`, `cache`)
- **Debounced refresh** — consecutive fast saves collapse into one reload
- **Dynamic status bar** — shows the local IPv4 and port for network sharing

## Install

### From VSIX (manual)

1. Download the `.vsix` file for the latest version above.
2. In VS Code, open the Extensions view (`Ctrl+Shift+X`).
3. Click the `⋯` menu in the top-right corner → **Install from VSIX…**
4. Select the downloaded `.vsix` file.

### From the Marketplace

Phive is also available on the VS Code Marketplace — search for **Phive** by FomaDev.

## Configuration

| Setting | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `phive.port` | number | `8000` | Local PHP server port. Falls back to the next free port if busy. |
| `phive.phpPath` | string | _(system)_ | Custom path to the PHP executable. |
| `phive.reloadDelay` | number | `100` | Delay in milliseconds before the browser reloads. |
| `phive.ignorePaths` | string[] | `["node_modules", ".git", "vendor", "cache"]` | Paths excluded from live reload. |
| `phive.ssl` | boolean | `false` | Enable HTTPS with a self-signed certificate. |

## What's new in v1.2.1

Routine patch. Dependency security updates only (`open`, `ip-address`, `ws`). No breaking changes.

## Recent highlights

**v1.2.0** (Aug 2026) — HTTPS support via a native Node.js reverse proxy. Auto-generated self-signed certificates. Fixed SSL/TLS handshake when certificate paths are relative. Live reload script now uses `window.location.hostname` instead of a hardcoded IP.

**v1.1.6** (Aug 2026) — Architectural refactoring. Native log coloration in the Output panel.

**v1.1.5** (Aug 2026) — Automatic PHP server restart when a `.env` file is saved, with synchronized browser reload.

**v1.1.4** (Jul 2026) — `phive.ignorePaths` to exclude directories from live reload. Cross-platform path normalization.

**v1.1.3** (Jun 2026) — `phive.reloadDelay` to tune the reload cycle. Debounced refresh so fast consecutive saves trigger only one reload.

**v1.1.1** (May 2026) — Dynamic port conflict resolution. Licensing moved from MIT to the Fordima Public License (FPL).

**v1.1.0** (Apr 2026) — Custom PHP path, multi-root workspaces, `.css`/`.js`/`.json` watchers, dynamic status bar showing the local IPv4.

## Try the next version

A **v1.2.0-beta.0** pre-release was published in August 2026 to test the
HTTPS reverse proxy before its stable release. It has since been superseded
by **v1.2.0**, which is the recommended version.