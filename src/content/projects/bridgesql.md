---
title: BridgeSQL
description: Lightweight PHP library that simplifies PDO by providing one interface for 10 database systems.
githubUrl: https://github.com/fomadev/bridgesql
language: PHP
order: 7
tags: [php, pdo, database, sql]
license: FPL
latestVersion: "2.0.2"
downloads:
  - version: "2.0.2"
    date: "2026-06-28"
    files:
      - os: universal
        label: Release on GitHub
        url: https://github.com/fomadev/bridgesql/releases/tag/v2.0.2
  - version: "2.0.1"
    date: "2026-05-13"
    files:
      - os: universal
        label: Release on GitHub
        url: https://github.com/fomadev/bridgesql/releases/tag/v2.0.1
  - version: "2.0.0"
    date: "2026-04-21"
    files:
      - os: universal
        label: Release on GitHub
        url: https://github.com/fomadev/bridgesql/releases/tag/v2.0.0
  - version: "1.0.4"
    date: "2026-01-13"
    files:
      - os: universal
        label: Release on GitHub
        url: https://github.com/fomadev/bridgesql/releases/tag/v1.0.4
  - version: "1.0.0"
    date: "2026-01-13"
    files:
      - os: universal
        label: Release on GitHub
        url: https://github.com/fomadev/bridgesql/releases/tag/v1.0.0
---

BridgeSQL simplifies PDO usage with a unified interface across **10 database
systems**. One API, one set of methods, one mental model — for MySQL,
PostgreSQL, SQLite, Oracle and more.

## Highlights

- **One API for 10 database systems** — MySQL, MariaDB, PostgreSQL, SQLite, SQL Server, Oracle, IBM DB2, Firebird, Informix, Sybase
- **PHP 8.0+** with native type binding via `match` expressions
- **Secure by default** — prepared statement emulation disabled, real data types
- **Debug timeline** — `getDebugLog()`, `getLastQuery()`, transaction markers with timestamps
- **ACID transactions** — `beginTransaction()`, `commit()`, `rollBack()` with state safety
- **Zero dependencies** — only PDO is required
- **Distributed under the Fordima Public License (FPL)**

## Install

**Composer** (recommended)

```bash
composer require fomadev/bridgesql