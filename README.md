# Career Portfolio

就活向けのポートフォリオサイトです。  
インターン、研究室での文章作成、個人開発の記録をまとめる構成にしています。

## Stack

- Astro
- TypeScript
- Markdown
- GitHub Pages

## Structure

- `src/pages` : トップ、記事一覧、記事詳細、タグ一覧
- `src/content/posts` : 実績記事
- `src/data/profile.ts` : プロフィールと外部リンク
- `src/layouts` : 共通レイアウト
- `src/styles` : 全体スタイル
- `.github/workflows/deploy.yml` : GitHub Pages デプロイ

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run check
```
