# Portfolio Website

モダンでレスポンシブなポートフォリオサイトです。

## 🚀 技術スタック

- **Vite** - 高速なビルドツール
- **React** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク

## ✨ 機能

- 📱 レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- 🌓 ダークモード対応
- 🎯 スムーススクロール
- 📊 5つのセクション構成
  - Hero（ヒーロー）: 名前、肩書き、自己紹介
  - Skills（スキル）: 技術スタック（フロント/バック/インフラ/マネジメント）
  - Experience（経歴）: 職務経歴（時系列）
  - Projects（プロジェクト）: 個人開発プロジェクト
  - Contact（お問い合わせ）: GitHub/LinkedIn/Email

## 🛠️ セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# リント
npm run lint
```

## 📁 プロジェクト構成

```
src/
├── components/         # Reactコンポーネント
│   ├── Header.tsx     # ヘッダー（ナビゲーション・ダークモード切替）
│   ├── Hero.tsx       # ヒーローセクション
│   ├── Skills.tsx     # スキルセクション
│   ├── Experience.tsx # 経歴セクション
│   ├── Projects.tsx   # プロジェクトセクション
│   ├── Contact.tsx    # お問い合わせセクション
│   └── Footer.tsx     # フッター
├── data/
│   └── content.ts     # コンテンツデータ（分離管理）
├── App.tsx            # メインアプリケーション
└── main.tsx           # エントリーポイント
```

## 🎨 カスタマイズ

`src/data/content.ts` ファイルを編集することで、表示内容を簡単にカスタマイズできます：

```typescript
export const heroData = {
  name: "あなたの名前",
  title: "あなたの肩書き",
  description: "自己紹介文",
};

// その他のデータもこのファイルで管理
```

## 🚢 デプロイ

### GitHub Pages

1. リポジトリの Settings > Pages で "GitHub Actions" をソースとして選択
2. メインブランチにプッシュすると自動デプロイされます

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

または：

```bash
npm i -g vercel
vercel
```

## 📄 ライセンス

MIT License
