---
title: 中古車の買取情報データベース開発
company: SES企業
position: フルスタックエンジニア（単独開発）
period: 2024年2月 - 2024年3月
description: 中古車買取・販売業者向けの買取情報管理システムの新規開発。
achievements:
  - 断片的な情報から業務フローを構築し要件化
  - 新規プロダクトのMVPを短期間で完成
  - 設計から実装・テストまで単独で完遂
tech:
  - name: Next.js
    category: Frontend
  - name: React
    category: Frontend
  - name: TypeScript
    category: Frontend
  - name: Tailwind CSS
    category: Frontend
  - name: PostgreSQL
    category: Database
  - name: LINE WORKS
    category: Tools
  - name: AWS
    category: Infrastructure
---

## 要件構築

クライアントと予定していた打ち合わせがことごとく中止した。二ヶ月という契約であったっためこちら側で「LINE WORKを使った画像や査定に関する情報のやり取りをしている。」、「査定に必要な情報は公式サイトのフォームの内容であること」などと言って断片的な情報から業務フローを構築。
それをシステム要件として設計を推進

## LINE WORKSを使ったシームレスなフォームに入力と認証問題解決

LINE WORKSで社員間の査定時の画像の共有や過去の査定の情報参照を行なっていた。
LINE WORKSアカウントでログインできるように認証機能を実装。LINE WORKSでシステムアカウントを作成し、チャットメニューからすぐに査定情報の入力ができるように開発

## Next.jsとServer Actionsを用いたシームレスなバックエンド実装

当時リリースされたばかりだったNext.jsのサーバーアクションを利用してシステムを開発。リクエストとレスポンスの型を適切に定義。メンテナンスがしやすいように実装を調整。
バックエンドのインフラコストをかけずにアプリケーションを開発しました。