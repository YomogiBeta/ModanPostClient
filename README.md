# Modan Post Client Program (SPA)

## このプログラムについて
簡易的なWeb掲示板アプリのクライアントプログラムです。
これに対応するサーバープログラムもあわせて開発しました。→ https://github.com/YomogiBeta/ModanPostServer

クライアントプログラムはReactベースのNext.jsをライブラリとして選定し、Typescriptにて開発をしています。  
これを選定した理由は次のとおりです。

- 昨今モダンなライブラリである

## 始め方
### Required
- Node.js
- yarn

### Commands
```
yarn
yarn dev
```

## 特徴
- アカウントについて
  - ✅ アカウント機能の追加 (登録、ログイン、認証など)
  - ✅ アカウントページの追加. (各種情報編集、プロフィール画像のアップロード)
- 投稿について
  - ✅ 投稿にユーザーネーム、アイコンが付随。
  - ✅ 内容に入力されたURLがハイライトされます。
  - ✅ 投稿の編集、削除はその投稿をしたアカウントのみが実行できるように。
  - ✅ 投稿に画像を４枚まで貼り付けできるように。また、各画像をクリックすると拡大表示される。
  - ✅ 投稿ページを廃止し、メインページからダイアログで投稿できるように。
  - ✅ 投稿前に動的に入力値をバリデーションし、不備があれば通信前にユーザーに修正を促すように。
  - ✅ 削除ページを廃止し、メインページからダイアログで削除できるように。
  - ✅ 投稿のデータは20投稿づつサーバーから取得するように。(ページネーション) 「さらに読み込む」を押すことで次の二十件が取得できる。
- コメントについて
  - ✅ 個別の投稿閲覧ページにてページを跨ぐことなくコメント送信できるように
  - ✅ 動的に入力値をバリデーションし、不備があれば通信前にユーザーに修正を促すように。
  - ✅ コメントの表示も投稿と同様にページネーションで取得（３０コメントづつ）。
- その他
  - ✅ ダークテーマ、ライトテーマの切り替えスイッチの実装

### 工夫点 
通信を行う処理は「SWR」というライブラリを用いて、ソースごとにカスタムhookを作成し、それを呼び出したり、コンポーネント分けを意識して実装したりなどなるべく綺麗なコードを書けるように意識しました。

## Licence
このプログラムをコピーし、ホスティングすることは禁止します。ただし、ホスティングされたサーバーに端末が最大１台まで
しか接続しない場合、これを許可します（ローカル環境での立ち上げを許可するという意味）
