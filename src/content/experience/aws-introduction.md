---
title: AWSの社内導入
company: 印刷会社
position: 社内エンジニア
period: '2022'
description: 自部署の取り組みでクラウドインフラの導入をしました。AWSの料金見積もりなども含めてAWSがどうして安全なのか、データをクラウド上に置くことに問題がないかなど資料を作成して自社を説得させながら対応を進めました。
achievements:
  - AWSを自社に導入
  - サーバーコストの削減
  - 自社CMSなどをサーバーに構築
tech:
  - name: AWS
    category: Infrastructure
  - name: EC2
    category: Infrastructure
  - name: RDS
    category: Infrastructure
  - name: S3
    category: Infrastructure
  - name: CloudFront
    category: Infrastructure
  - name: Route 53
    category: Infrastructure
  - name: VPC
    category: Infrastructure
  - name: IAM
    category: Infrastructure
---

## AWS導入調査

具体的にどのようにネットワークを構築するのか、そのために必要なサービスが何でそれがどのぐらいかかるかなど利用する上で自社で把握していなければならない内容をまとめて適宜チェック

## AWS環境構築

当時IaCの概念を知らなかったのでコンソールから手動でリソースを立ち上げ、VPCにサブネットを切ってpublicとprivateにサーバーを構築して自社CMSパッケージをホスティングしました。
サーバーのスペックなどはテンプレートを用意して複製可能にしました。
