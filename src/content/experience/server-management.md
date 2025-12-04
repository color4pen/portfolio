---
title: オンプレミスサーバー運用管理
company: 印刷会社
position: 社内エンジニア
period: 2019 - 2022
description: 社内オンプレミス環境におけるインフラ全般を担当。物理サーバー5台・仮想サーバー4台を管理し、Webサーバー、ストレージサーバー、ファイルサーバー、GitLabサーバー等の構築から運用まで一貫して担当しました。
achievements:
  - 物理サーバー5台・仮想サーバー4台の構築・運用を担当
  - Prometheus + Grafanaによる監視体制を構築
  - cronスクリプトとMinIOを活用したバックアップ体制を整備
  - GitLab CIによるCI/CDパイプラインの構築
  - Docker Composeを用いたコンテナ環境の構築・運用
  - 社内プロキシ環境における各種サーバー・コンテナのネットワーク設定
tech:
  - name: Linux
    category: Infrastructure
  - name: Ubuntu
    category: Infrastructure
  - name: CentOS
    category: Infrastructure
  - name: Nginx
    category: Infrastructure
  - name: PostgreSQL
    category: Database
  - name: Docker
    category: Infrastructure
  - name: Docker Compose
    category: Infrastructure
  - name: GitLab
    category: Tools
  - name: GitLab CI
    category: Tools
  - name: GitLab Runner
    category: Tools
  - name: Prometheus
    category: Tools
  - name: Grafana
    category: Tools
  - name: MinIO
    category: Infrastructure
  - name: Bash
    category: Tools
  - name: Vagrant
    category: Tools
---

## 役割・責任

**役割:** 社内エンジニア

インフラ構築・運用、監視基盤整備、CI/CD環境構築、アプリケーションリリースまで幅広く担当。

## 主な業務内容

### インフラ基盤の構築・運用

サーバーのスペック選定・設計から携わり、Linux（Ubuntu中心、CentOS経験あり）でサーバーを構築。Vagrantで仮想環境を構築し、物理・仮想サーバーの両方を管理しました。Nginx、PostgreSQLの設定、IPアドレス設定、OS定期更新、メンテナンス通知の運用など、新規構築から既存サーバーの保守まで一貫して担当。

社内プロキシ環境だったため、Linux、Docker、コンテナ内、GitLab、MinIO等あらゆる箇所でプロキシ設定が必要で、そのノウハウを蓄積しました。

### 監視・バックアップ体制の整備

Prometheus + Grafanaで監視基盤を構築し、サーバーリソースやログを可視化。問題の早期発見・対応ができる体制を整えました。

バックアップはcronでスクリプトを定期実行し、ファイルサーバーやMinIO（オブジェクトストレージ）に保存。MinIOはバックアップの他、seedデータ保存や自社サービスのS3実装検証にも活用しました。

### CI/CD・コンテナ環境の構築

GitLab/GitLab Runnerサーバーの運用に加え、.gitlab-ci.ymlを書いてCI/CDパイプラインを構築。開発・デプロイの自動化を実現しました。GitLabのバージョンアップやRunnerの障害対応も担当。

アプリケーションはDocker Composeでコンテナ化して運用。本番リリースのデプロイ手順を設計し、マイグレーション、seeder、必要なスクリプトの実行を行いました。障害時は古いコンテナに差し替えるロールバック手順も整備。