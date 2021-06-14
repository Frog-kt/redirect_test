# Cross domain redirect
クロスドメインでのリダイレクトの挙動について検証するためのリポジトリ。

ここではOAuthとは関係なく、外部ドメインに対しての302リダイレクトの検証を行うためのミニマムなコードとなっています。

## 検証アプリの起動

**IdP-Front**
http://localhost/
```bash
cd idp-front
npm install # node_modulesのインストール
npm run dev # サーバー起動
```

**IdP-API**
http://localhost:3000/
```bash
cd idp-api
npm install # node_modulesのインストール
npm run dev # サーバー起動
```

**Client**
http://localhost:3030/
```bash
cd client-api
npm run dev # サーバー起動
npm install # node_modulesのインストール
```

## システム構成

### サーバーの構成とフロー
```
        localhost:80                    localhost:3000                 localhost:3030
      ┌────────────────┐              ┌────────────────┐             ┌────────────────┐
      │    IdP Front   │              │     IdP API    │             │     Client     │
      │                │              │                │             │                │
      └───────┬────────┘              └───────┬────────┘             └───────┬────────┘
              │                               │                              │
              │     (1)POST /redirect         │                              │
              ├──────────────────────────────►│                              │
              │                               │                              │
              │(2)302 localhost:3030/callback │                              │
              │◄──────────────────────────────┤                              │
              │                               │                              │
              │     (3) GET /callback         │                              │
              ├───────────────────────────────┼─────────────────────────────►│
              │                               │                              │
```

### CORSの設定
IdP APIのCORS設定
```js
app.use(cors({ origin: "http://localhost:80", credentials:true}));
```

ClientのCORS設定
```js
app.use(cors({ origin: "http://localhost:80", credentials:true}));
```

## 試したこと