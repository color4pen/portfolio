---
title: iwill
description: 結婚式ゲスト管理Webアプリケーション
tech:
  - name: Next.js
    category: Frontend
  - name: TypeScript
    category: Frontend
  - name: Tailwind CSS
    category: Frontend
  - name: PostgreSQL
    category: Database
  - name: Prisma
    category: Backend
  - name: NextAuth.js
    category: Backend
  - name: Turborepo
    category: Tools
role: Solo Developer
period: "2024 - 2025"
featured: true
---

## Overview

結婚式のゲスト管理を行うWebアプリケーション。ゲストはLINEアカウントでログインし、出欠管理、写真・動画の共有、結婚式情報の確認などができます。

## Key Features

- **LINE認証**: LINEアカウントでのシームレスなログイン
- **出欠管理**: 出席/欠席/未定のステータス管理、ゲスト人数、食事制限、メッセージ
- **ギャラリー**: 写真・動画のアップロード・共有（管理者承認機能付き）
- **お知らせ配信**: カテゴリー別通知、既読管理
- **結婚式情報**: 日時、会場、アクセス情報、当日のタイムライン
- **FAQ**: よくある質問の管理

## Technical Highlights

- Next.js 14 App Routerによるモダンなアーキテクチャ
- Turborepoによるモノレポ構造（web、admin、docs）
- Server Actionsを使用（API Routes不使用）
- LINE OAuth認証（NextAuth.js）
- 時間制限機能（結婚式当日まで一部機能を制限）

## Architecture

```
iwill/
├── apps/
│   ├── web/          # メインのWebアプリケーション
│   ├── admin/        # 管理者用アプリケーション
│   └── docs/         # ドキュメントサイト
├── packages/         # 共有パッケージ
└── prisma/           # データベーススキーマ
```

### ルート構造

- **(authenticated)**: 認証が必要なページ
  - ホーム、マイページ、ギャラリー、結婚式情報、お知らせ、FAQ
- **(public)**: 公開ページ
  - ログイン、利用規約、プライバシーポリシー

## Data Models

- **User**: ゲストユーザー情報（LINE認証情報）
- **Attendance**: 出欠管理
- **Notification**: お知らせ配信
- **Media**: 写真・動画アップロード
- **WeddingInfo**: 結婚式基本情報
- **Schedule**: 当日のタイムライン
- **FAQ**: よくある質問

## Challenges Overcome

1. **LINE認証統合**: NextAuth.jsとLINE Providerの連携
2. **時間制限機能**: 環境変数による機能制限の実装
3. **モノレポ管理**: Turborepoによる複数アプリケーションの効率的な管理
4. **メディア管理**: 管理者承認機能付きの写真・動画アップロード
