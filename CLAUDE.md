# Portfolio Project

個人ポートフォリオサイト（Astro + Tailwind CSS）

## デプロイ情報

- **本番URL**: https://color4pen.github.io/portfolio
- **ベースパス**: `/portfolio`（GitHub Pages用）

## 開発環境

```bash
npm run dev    # 開発サーバー起動（localhost:4321）
npm run build  # 本番ビルド
npm run preview # ビルド結果のプレビュー
```

## ベースパス設定（重要）

### Astro設定

`astro.config.mjs`で環境に応じてベースパスを切り替えている：

```javascript
base: import.meta.env.PROD ? '/portfolio' : undefined
```

- **開発環境**: `BASE_URL = /`
- **本番環境**: `BASE_URL = /portfolio`

### リンクの書き方

Astroファイル内でのリンクは以下のパターンを使用：

```astro
// 正しい書き方
href={`${import.meta.env.BASE_URL}/blog`.replace('//', '/')}
href={`${import.meta.env.BASE_URL}/projects/${slug}`.replace('//', '/')}

// NG: ハードコードしない
href="/blog"  // 開発では動くが本番で壊れる
href="/portfolio/blog"  // 本番では動くが開発で壊れる
```

`.replace('//', '/')`は開発時に`BASE_URL`が`/`の場合に`//blog`となるのを防ぐため。

### Markdownコンテンツ内のリンク

ブログ記事などMarkdown内の関連記事リンクは**相対パス**を使用：

```markdown
// 正しい書き方（相対パス）
[関連記事](./other-article)

// NG: 絶対パスはBASE_URLが適用されない
[関連記事](/blog/other-article)
```

## プロジェクト構成

```
src/
├── content/           # Content Collections
│   ├── blog/          # ブログ記事（.md）
│   ├── projects/      # プロジェクト（.md）
│   └── experience/    # 職務経歴（.md）
├── pages/
│   ├── index.astro    # トップページ
│   ├── blog/          # ブログ一覧・詳細
│   ├── projects/      # プロジェクト詳細
│   └── experience/    # 経歴詳細
├── components/        # UIコンポーネント
└── layouts/           # レイアウト
```

## Content Collections

### ブログ記事のスキーマ

```typescript
{
  title: string,
  description: string,
  publishedAt: Date,      // YYYY-MM-DD形式
  tags: string[]          // optional
}
```

### プロジェクトのスキーマ

```typescript
{
  title: string,
  description: string,
  role: string,
  period: string,         // 文字列（"2025"や"2024-2025"）
  tech: { name: string }[],
  featured: boolean       // optional
}
```

### 経歴のスキーマ

```typescript
{
  title: string,
  description: string,
  company: string,
  position: string,
  period: string,
  tech: { name: string }[],  // optional
  achievements: string[]
}
```
