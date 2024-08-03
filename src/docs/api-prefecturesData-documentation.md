# API ドキュメント

## 概要

このドキュメントは、全都道府県取得のAPIについて説明します。各エンドポイントの使用方法、レスポンス形式について記載しています。

## エンドポイント一覧

1. [GET /api/prefectures/](#get-prefectures)

## エンドポイント詳細

### GET /api/prefectures/

- **概要**: すべての都道府県名、各idを取得します。
- **HTTPメソッド**: GET
- **レスポンス**:
  - **成功時**: 200 OK
    ```json
    {
      "result": [{
        "prefCode": id,
        "prefName": name
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
