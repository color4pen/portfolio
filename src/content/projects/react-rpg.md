---
title: React RPG
description: React + TypeScriptで実装した2DターンベースRPGエンジン。Claude Codeを使用して約5時間で開発。
tech:
  - name: React
    category: Frontend
  - name: TypeScript
    category: Frontend
  - name: Vite
    category: Tools
  - name: Canvas API
    category: Frontend
  - name: Claude Code
    category: Tools
role: Solo Developer
period: "2025"
featured: true
---

## Overview

Unity風のアーキテクチャをReact + TypeScriptで再現したRPGゲームエンジン。Claude Codeを使用して約5時間で開発しました。

### プロジェクト規模

- **コード行数:** 約8,900行
- **ファイル数:** 63ファイル
- **開発時間:** 約5時間（Claude Code使用）

## Key Features

### コアシステム
- タイルベース2Dマップ移動
- カメラ追従システム
- 複数マップ・ワープポイント

### バトルシステム
- ターン制パーティバトル（最大4人 vs 最大3体）
- コマンド選択（攻撃/スキル/アイテム/防御）
- 敵AI（aggressive/defensive/random）
- 経験値・レベルアップ

### パーティ・アイテムシステム
- 4人パーティ管理
- キャラクタークラス（勇者/戦士/魔法使い/ヒーラー）
- 装備システム（武器/防具/アクセサリ）
- 回復・ダメージ・状態異常治療アイテム

### NPC・UI
- ツリー型ダイアログシステム
- ショップ・宿屋
- ステータス表示・インベントリ管理

## Architecture

```
src/
├── components/          # React UIコンポーネント
│   ├── game/           # GameObject, Transform, Renderer
│   └── ui/             # 再利用可能UIコンポーネント
├── models/             # ゲームロジッククラス
├── engine/             # コアエンジン
│   ├── GameEngine.ts   # メインゲームループ・状態管理
│   ├── BattleEngine.ts # ターン制バトルシステム
│   └── DialogueEngine.ts
└── types/              # TypeScript型定義
```

### 採用パターン

- **Entity-Component-System (ECS) 風**: Unity風のGameObject構造
- **Observer パターン**: GameEngineがPublisher、ReactコンポーネントがSubscriber
- **Factory パターン**: アイテム・ステータス効果の生成
- **MVC的な層分離**: View(React) / Controller(Engine) / Model

## Technical Highlights

- TypeScript strict modeで型安全性を確保
- 責務の明確な分離（Model/View/Controller）
- 拡張性の高いFactory/Observerパターン
- Unity風の理解しやすいアーキテクチャ
- オブジェクト指向による高い拡張性（新しい敵・アイテム・スキルの追加が容易）
