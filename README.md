# Population Transition Graph

## 概要

このリポジトリは、人口推移グラフアプリケーションです。

## インストール

プロジェクトをクローンし、依存関係をインストールします。

```bash
git clone https://github.com/limoza/population_transition_graph.git
cd population_transition_graph
yarn install
```

## 環境設定

`.env.development.local` ファイルをプロジェクトのルートディレクトリに作成し、以下の環境変数を設定してください。

```
NEXT_PUBLIC_RESAS_API_KEY=your_api_key_here
```

## スクリプト

以下のスクリプトを使用できます。

```bash
# 開発サーバーを起動
yarn dev

# プロジェクトをビルド
yarn build

# ビルドしたプロジェクトを起動
yarn start

# ESLintでコードをリント
yarn lint

# テストを実行
yarn test
```

## ドキュメント・テストケース

以下のドキュメントを確認し、開発を行なってください。
また、開発時はテストケースに基づいてテストを行なってください。

- `src/docs/`
  - `api-populationData-documentation.md`
    - 人口推移データ取得に関するドキュメントです。
  - `api-prefecturesData-documentation.md`
    - 都道府県データ取得に関するドキュメントです。
  - `selected-prefecture-documentation.md`
    - 都道府県選択状態管理に関するドキュメントです。
  - `test-cases.md`
    - 開発時のテストケースです。
