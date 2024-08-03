# API ドキュメント

## 概要

このドキュメントは、人口推移グラフアプリケーションのAPIについて説明します。各エンドポイントの使用方法、リクエストパラメータ、レスポンス形式について記載しています。

## エンドポイント一覧

1. [GET /api/population/:id](#get-apipopulationid)

## エンドポイント詳細

### GET /api/population/:id

- **概要**: 特定の都道府県の人口データを取得します。
- **HTTPメソッド**: GET
- **リクエストパラメータ**:
  - **URLパラメータ**:
    - `id` (number, required): 取得したい都道府県のID
- **レスポンス**:
  - **成功時**: 200 OK
    ```json
    {
      "boundaryYear": 2020,
      "data": [{
        "label": "総人口",
        "data": [{
          "year": year,
          "value": value
        }[]]
      }]
    }
    ```
  - **失敗時**: 403 Forbidden
    ```json
    {
      "error": "Forbidden"
    }
    ```
  - **失敗時**: 404 Not Found
    ```json
    {
      "error": "404. That's an error."
    }
    ```
