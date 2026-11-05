---
title: Nyxj
description: High-performance JSON engine and micro-services framework for embedded systems and edge computing.
githubUrl: https://github.com/fomadev/nyxj
language: C
order: 2
featured: true
tags: [json, embedded, edge, c]
latestVersion: "1.0.0"
downloads:
  - version: "1.0.0"
    date: "2026-04-23"
    files:
      - os: windows
        label: Windows (x64)
        url: https://github.com/fomadev/nyxj/releases/download/v1.0.0/nyxj-v1.0.0-windows-x64.zip
      - os: linux
        label: Linux (x64)
        url: https://github.com/fomadev/nyxj/releases/download/v1.0.0/nyxj-v1.0.0-linux-x64.zip
      - os: linux
        label: Linux (ARM64)
        url: https://github.com/fomadev/nyxj/releases/download/v1.0.0/nyxj-v1.0.0-linux-arm64.zip
      - os: macos
        label: macOS (ARM64)
        url: https://github.com/fomadev/nyxj/releases/download/v1.0.0/nyxj-v1.0.0-macos-arm64.zip
---

Nyxj is a JSON engine and micro-services framework built in C.

## Highlights

- Speed-focused JSON parsing and serialization
- Designed for embedded and edge environments
- Protection against JSON-based DoS attacks

## Release notes (v1.0.0)

This is the first stable release of the Nyxj Engine, a high-performance JSON
processing engine and micro-service framework written in pure C. This version
establishes the core architecture for efficient JSON parsing, serialization,
and HTTP-based data exchange.

### Key features

- **Core parser** — Robust tree-based JSON parsing with comprehensive error reporting.
- **Serialization** — Full support for converting internal structures back to standard JSON.
- **API service** — Integrated HTTP server functionality powered by the Mongoose library.
- **Cross-platform** — Verified builds for Windows (x64), Linux (x86_64 / ARM64) and macOS (ARM64).
- **Developer tooling** — Automated build via Make and CI/CD through GitHub Actions.

### Technical specifications

- **Language:** C99 / C11
- **Dependencies:** Mongoose Networking Library (included)
- **Memory footprint:** Minimal, with proactive allocation management.

For source-based installation, refer to the `README.md` in the
[repository](https://github.com/fomadev/nyxj).