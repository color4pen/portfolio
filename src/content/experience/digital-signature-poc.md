---
title: 電子署名システムPoC
company: 印刷会社
position: クラウドエンジニア / PM
period: "2020"
description: 電子署名システムのPoC（概念実証）プロジェクト。AWS上に電子署名基盤を構築し実現可能性を検証。
achievements:
  - AWS上に電子署名システムのプロトタイプを構築
  - セキュアな署名・検証フローを実現
  - 技術的実現可能性を実証し本格導入への道筋をつけた
tech:
  - name: AWS
    category: Infrastructure
  - name: Lambda
    category: Infrastructure
  - name: API Gateway
    category: Infrastructure
  - name: S3
    category: Infrastructure
  - name: DynamoDB
    category: Database
  - name: Cognito
    category: Infrastructure
  - name: KMS
    category: Infrastructure
  - name: CloudFormation
    category: Infrastructure
---

## プロジェクト概要

電子署名システムのPoC（概念実証）プロジェクト。ペーパーレス化推進の一環として、AWS上に電子署名システムのプロトタイプを構築し、技術的実現可能性を検証しました。

## 役割・責任

**役割:** クラウドエンジニア / PM

- プロジェクトマネジメント
- システムアーキテクチャ設計
- AWS環境構築
- PoC実施・検証

## 主な業務内容

### 要件定義・調査

電子署名システムに必要な機能と技術を調査。

**担当:**
- 電子署名の法的要件調査
- 技術選定・比較検討
- 要件定義書作成
- PoC計画策定

**成果:**
- 明確な技術要件の策定
- 実現可能性の高い計画立案
- 関係者との認識統一

### サーバーレスアーキテクチャ設計

AWSサーバーレスサービスを活用したシステム設計。

**担当:**
- システム全体のアーキテクチャ設計
- API設計
- データベース設計
- セキュリティ設計

**成果:**
- スケーラブルな構成
- コスト効率の高い設計
- 保守性の高いアーキテクチャ

### AWS環境構築

CloudFormationによるインフラのコード化。

**担当:**
- CloudFormationテンプレート作成
- Lambda関数実装
- API Gateway設定
- Cognito認証設定

**成果:**
- 再現性の高いインフラ
- 自動化されたデプロイ
- Infrastructure as Code実践

### 電子署名機能実装

署名生成・検証機能の実装。

**担当:**
- 署名生成API実装
- 署名検証API実装
- KMSによる鍵管理
- タイムスタンプ連携

**成果:**
- セキュアな署名機能
- 法的要件を満たす実装
- 高速な処理性能

### 文書管理機能

署名対象文書の保管・管理機能。

**担当:**
- S3による文書保管
- DynamoDBによるメタデータ管理
- アクセス制御
- 版管理機能

**成果:**
- 安全な文書管理
- 効率的な検索機能
- 監査ログの記録

### PoC検証・評価

プロトタイプの動作検証と評価。

**担当:**
- 機能テスト実施
- パフォーマンステスト
- セキュリティ検証
- ユーザビリティ評価

**成果:**
- 技術的実現可能性の実証
- 課題の洗い出し
- 本格導入への提言

## 技術スタック

- **AWS:** Lambda, API Gateway, S3, DynamoDB, Cognito, KMS, CloudFormation
- **言語:** Python, Node.js
- **その他:** Git, Postman, OpenAPI

## 成果・学び

- サーバーレスアーキテクチャの実践経験
- 電子署名技術の深い理解
- PoCプロジェクトの進め方
- CloudFormationによるIaC実践
- AWS KMSによる暗号化管理
- PMとしてのプロジェクト推進力
