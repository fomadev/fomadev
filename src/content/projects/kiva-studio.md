---
title: Kiva Studio
description: The graphical desktop client for KivaDB. Browse and edit data, run commands, manage users and watch server health.
language: Flutter
order: 9
featured: true
tags: [gui, desktop, flutter, kivadb, early-access]
license: FCL
image:
  src: /screenshots/kiva-studio-data.png
  alt: Kiva Studio data browser showing a key-value workspace with editable values.
latestVersion: "0.1.0"
downloads:
  - version: "0.1.0"
    files:
      - os: windows
        label: Windows (x64) — Early Access
        url: /downloads/kiva-studio-windows-x64.zip
---

Kiva Studio is the graphical client for [KivaDB](https://github.com/fomadev/kiva-db).
Connect to a database on your computer or on a remote server, browse and edit
its data, run commands, manage users and watch the server's health. One code
base for **Windows, Linux and macOS**, built with Flutter.

> **Early Access.** Kiva Studio is fully functional and ready to use, but its
> public versioning has not started yet. The current build is an early-access
> release — features may evolve based on feedback.

## What you can do

| Screen | Purpose |
| :--- | :--- |
| **Connect** | Host, port, user, password. Recent connections remembered (never passwords). |
| **Data** | Browse, filter, edit keys with validation. Set expiry. Live refresh on external changes. |
| **Query** | Build filters without writing commands. See the execution plan (index or scan). AI similarity search on embeddings. |
| **Console** | Full `kivadb` shell with history. Multi-line documents. Run `.kva` files with line tracking. |
| **Activity** | Live changes and alerts: fragmentation, integrity, replication, failed logins. |
| **Users** | Manage accounts, roles, passwords, workspace grants. Admin only. |
| **Server** | Keys, storage, replication, compression, integrity, maintenance operations. |

## Security

- TLS with certificate fingerprint verification (like SSH). Trust on first use.
- Password required for any remote connection (KivaDB enforces the same rule server-side).
- Three roles: `admin`, `editor`, `viewer`. The UI hides what a role cannot do; the server refuses it anyway.

## Compatibility

Works with both **KivaDB 2.0** and **1.x**, adapting to the version the server announces:

- **2.0**: workspaces grouped by project, `date`/`datetime`/`time` types, grant-based access, landing-workspace control.
- **1.x**: flat workspace list, personal `u_<name>` workspace, the original seven types.

## Platform support

- **Windows** — available now (Early Access build)
- **Linux and macOS** — planned

## License

Kiva Studio is distributed under the Fordima Commercial License (FCL).
The source code is not publicly available.