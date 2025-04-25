# unofficial_site_niu_yozuna
## 環境構築
- node.js 22.13.1 https://nodejs.org/ja
- VSCodeからコマンドを打つ場合は下記を先に管理者PowerShellで打つ必要あるかも
  - `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`
- pnpmを導入
  - `npm install -g pnpm`
- `pnpm i`で必要なモジュールをインストール

## 環境変数
|変数名|値|
| ---- | ---- |
|ROBOTS|true/false trueで検索クローラーに検知許可|
|YOUTUBE_API_KEY|string youtubeAPIキーを設定|
|ENABLE_BASIC_AUTH|true/false trueでBasic認証追加|
|BASIC_AUTH_USER|string Basic認証ID|
|BASIC_AUTH_PASS|string Basic認証PASS|