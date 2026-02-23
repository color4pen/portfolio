---
title: スカブ速報 (Tarkov Threads)
description: Claude Codeによる記事生成を活用した、Escape from Tarkovの掲示板まとめサイト
tech:
  - name: Astro
    category: Frontend
  - name: TypeScript
    category: Frontend
  - name: Claude Code
    category: Tools
  - name: Vercel Analytics
    category: Tools
role: Solo Developer
period: "2026"
featured: true
---

## Overview

「スカブ速報」は、Escape from Tarkov（タルコフ）に関する掲示板の書き込みをまとめたサイトです。5ch、Reddit、Steamフォーラムなどから話題になったスレッドや議論を収集し、Claude Codeで記事生成を自動化しています。AIで1日で構築し、記事への人手の編集はゼロ。

## Key Features

- **AI記事生成**: Claude Codeによるスレッドからのトピック抽出・記事構成の自動化
- **横展開設計**: 他ジャンルへの展開を前提としたテンプレート構成
- **スレッドまとめ**: 5ch・Reddit・Steamからタルコフ関連の話題を収集
- **カテゴリ分類**: スレッドをカテゴリ別に整理

## Technical Highlights

- Astro 5によるSSG（静的サイト生成）
- Content Collectionsによるスレッドデータ管理
- Claude Codeでスレッドデータを渡すだけで記事が完成するワークフロー
- Vercel Analyticsによるアクセス解析
- ミリタリー調のUIデザイン

## AI活用のポイント

5000行以上の掲示板スレッドをClaude Codeに渡し、記事になりそうなトピックの抽出から、議論の対立構造の整理、概要の作成、レスの選別・構成までを自動化。人間が行うのはスレッドデータの収集とデプロイのみ。

既存の人力まとめサイトと記事品質で比較されるレベルの出力を実現しており、AI駆動のコンテンツ生成パイプラインの実証実験としても機能しています。
