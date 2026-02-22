---
title: Tarkov Ammo Analyzer
description: Escape from Tarkovの弾薬スクリーンショットをAIで解析し、性能評価を行うWebアプリケーション
tech:
  - name: Next.js
    category: Frontend
  - name: TypeScript
    category: Frontend
  - name: Tailwind CSS
    category: Frontend
  - name: Claude API
    category: Tools
  - name: Vercel
    category: Tools
  - name: Drizzle ORM
    category: Backend
  - name: Neon Database
    category: Database
role: Solo Developer
period: "2025"
featured: true
---

## Overview

Escape from Tarkovプレイヤー向けの弾薬分析ツール。ゲーム内の弾薬スクリーンショットをアップロードするだけで、Claude APIが画像を解析し、弾薬の性能評価や使用推奨シーンを提供します。

## Key Features

- **画像解析**: スクリーンショットから弾薬情報を自動認識
- **AI性能評価**: Claude APIによる詳細な弾薬性能分析
- **ドラッグ&ドロップ**: 直感的な画像アップロードUI
- **弾薬リスト**: 解析済み弾薬の一覧表示
- **結果モーダル**: 詳細な分析結果の表示

## Technical Highlights

- Next.js 14 App Routerによるモダンなアーキテクチャ
- Server Actionsを活用したAPI通信（API Routesは不使用）
- TypeScriptによる型安全な開発
- enumを使用せず`as const`パターンで型定義
- 環境変数の型安全なアクセス（lib/env.ts経由）

## Architecture

```
src/
├── actions/          # Server Actions（Claude API呼び出し）
├── app/              # Next.js App Router
├── components/       # React コンポーネント
├── hooks/            # React Hooks
├── db/               # データベース設定
└── lib/              # 純粋関数・型定義・定数
```

## Challenges Overcome

1. **画像解析精度**: Claude APIのビジョン機能を活用し、ゲーム内スクリーンショットから正確に弾薬情報を抽出
2. **UX最適化**: ドラッグ&ドロップによる直感的な操作性を実現
3. **型安全性**: enumを避け、as constパターンとstring literal unionで型安全性を確保

## Future Enhancements

- 複数弾薬の比較表示機能
- 診断履歴の保存・閲覧
- 弾薬データベース検索
- 武器・マップに応じた弾薬提案
- フリマ価格との費用対効果分析
