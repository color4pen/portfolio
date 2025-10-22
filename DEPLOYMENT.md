# デプロイメントガイド / Deployment Guide

このポートフォリオサイトは、GitHub PagesまたはVercelに簡単にデプロイできます。

## GitHub Pagesにデプロイ

### 手順

1. **リポジトリ設定**
   - GitHubリポジトリの **Settings** → **Pages** に移動
   - **Source** で "GitHub Actions" を選択

2. **自動デプロイ**
   - `main` ブランチにプッシュすると自動的にデプロイされます
   - `.github/workflows/deploy.yml` ワークフローが実行されます

3. **デプロイ確認**
   - Actions タブでデプロイの進行状況を確認できます
   - 完了後、`https://<username>.github.io/<repository-name>/` でアクセス可能

### カスタムドメインの設定（オプション）

1. リポジトリの **Settings** → **Pages** → **Custom domain**
2. ドメイン名を入力（例：`portfolio.example.com`）
3. DNSプロバイダーで CNAME レコードを設定：
   ```
   CNAME portfolio.example.com <username>.github.io
   ```

## Vercelにデプロイ

### 方法1: Vercel CLI

```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
vercel

# プロダクションにデプロイ
vercel --prod
```

### 方法2: Vercel Dashboard

1. [Vercel](https://vercel.com) にアクセスしてサインイン
2. **New Project** をクリック
3. GitHubリポジトリをインポート
4. プロジェクト設定：
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Deploy** をクリック

### 方法3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## 環境変数（必要な場合）

もしAPIキーなどの環境変数が必要な場合：

### GitHub Pages
`.github/workflows/deploy.yml` に追加：
```yaml
env:
  VITE_API_KEY: ${{ secrets.API_KEY }}
```

### Vercel
ダッシュボードの **Settings** → **Environment Variables** で設定

## ビルドの確認

デプロイ前にローカルでビルドを確認：

```bash
# ビルド
npm run build

# プレビュー
npm run preview
```

## トラブルシューティング

### GitHub Pages

**問題**: ページが表示されない
- **解決**: `vite.config.ts` の `base` を確認
  ```typescript
  export default defineConfig({
    base: '/repository-name/',  // リポジトリ名を指定
  })
  ```

**問題**: CSSが適用されない
- **解決**: ビルドが正常に完了しているか確認
- Actions タブでログを確認

### Vercel

**問題**: ビルドエラー
- **解決**: Node.jsのバージョンを確認
  - `package.json` に追加：
    ```json
    "engines": {
      "node": ">=20.0.0"
    }
    ```

**問題**: ルーティングエラー
- **解決**: `vercel.json` を確認
- SPA向けの設定が必要な場合は追加

## パフォーマンス最適化

### 画像の最適化
- 画像を WebP 形式に変換
- 適切なサイズにリサイズ
- 遅延読み込みを検討

### バンドルサイズの最適化
```bash
# バンドルサイズを確認
npm run build

# アナライザーを使用（オプション）
npm install -D rollup-plugin-visualizer
```

## 更新とメンテナンス

### コンテンツの更新
1. `src/data/content.ts` を編集
2. 変更をコミット・プッシュ
3. 自動的に再デプロイされます

### 依存関係の更新
```bash
# パッケージの更新確認
npm outdated

# 更新
npm update

# または個別に
npm install package-name@latest
```

## セキュリティ

- 定期的に依存関係を更新
- GitHub Security alerts を有効化
- Dependabot を設定して自動更新

## サポート

問題が発生した場合：
- [GitHub Issues](https://github.com/yourusername/portfolio/issues)
- [Vite Documentation](https://vitejs.dev/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/pages)
