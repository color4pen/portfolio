---
title: こえおきば (Koeokiba)
description: 声優向けのボイスサンプルポートフォリオサービス
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
  - name: Stack Auth
    category: Backend
  - name: Vercel Blob
    category: Tools
  - name: Neon
    category: Database
role: Solo Developer
period: "2024"
featured: true
---

## Overview

声優やナレーター向けのボイスサンプルポートフォリオサービス。自身のボイスサンプルをアップロード・管理し、公開プロフィールとして共有できるプラットフォームです。

## Key Features

- **ボイスサンプル管理**: 音声ファイルのアップロード・編集・削除
- **公開プロフィール**: ユーザー名ベースの公開ページ（/[username]）
- **ダッシュボード**: サンプル管理、プロフィール設定、アップロード機能
- **認証システム**: Stack Auth（Neon Auth経由）による安全なユーザー認証
- **ファイルストレージ**: Vercel Blobによる音声ファイルの管理

## Technical Highlights

- Next.js 16 App Routerによる最新アーキテクチャ
- Prisma 7によるデータベース管理（分割スキーマ構成）
- Neon PostgreSQLによるサーバーレスデータベース
- Infisicalによる環境変数管理
- Server Actionsのセキュリティパターン（権限検証、入力バリデーション）

## Architecture

```
app/
├── api/              # APIルート
├── dashboard/        # ダッシュボード（認証必須）
│   ├── samples/      # ボイスサンプル管理
│   ├── settings/     # プロフィール設定
│   └── upload/       # アップロード
├── [username]/       # 公開プロフィール
└── handler/          # 認証ハンドラー

lib/
├── db.ts             # Prismaクライアント
├── routes.ts         # ルート定義（一元管理）
├── logger.ts         # ログ出力
└── types.ts          # 型定義
```

## Challenges Overcome

1. **認証とデータベースの統合**: Neon AuthとPrismaの連携、外部テーブルの管理
2. **ファイルストレージ**: 音声ファイルのアップロード・配信をVercel Blobで実現
3. **セキュリティ**: Server Actionsでの権限検証パターンの確立

## Development Practices

- ルート定義の一元管理（lib/routes.ts）
- 専用ロガーの使用（console.log禁止）
- マイグレーションファイルによるDB変更管理
- 日本語コミットメッセージ
