# Modan Post Client Program (SPA)

## このプログラムについて  ( https://modanpost.com )
このプログラムは応用プログラミング(Web)の最終レポート用に作成された、Web掲示板アプリのクライアントプログラムです。
これに対応するサーバープログラムもあわせて開発しました。→ https://github.com/YomogiBeta/ModanPostServer

クライアントプログラムはReactベースのNext.jsをライブラリとして選定し、Typescriptにて開発をしています。  
これを選定した理由は次のとおりです。
- JSX記法の利用にあたって、授業でも取り扱ったHTMLの知識が利用できる
- 配置を整えたり、スタイルを適用するのに授業でも取り扱ったCSSの知識が利用できる
- TypescriptはJavascriptに型をつけたものなので、授業でも取り扱ったJavascriptの知識が利用できる。
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

## 授業で取り組んだblogサイトからの改良点・工夫点(クライアントプログラム目線)

### 改良点
- ✅ モダンな技術で実装を一新しています。  
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
  - ✅ DigitalOceanにホスティング。mainブランチに変更があれば即座に本番に反映される。
  - ✅ ダークテーマ、ライトテーマの切り替えスイッチの実装

### 工夫点 
通信を行う処理は「SWR」というライブラリを用いて、ソースごとにカスタムhookを作成し、それを呼び出したり、コンポーネント分けを意識して実装したりなどなるべく綺麗なコードを書けるように意識しました。

## Licence
このプログラムをコピーし、ホスティングすることは禁止します。ただし、ホスティングされたサーバーに端末が最大１台まで
しか接続しない場合、これを許可します（ローカル環境での立ち上げを許可するという意味）

ただし、応用プログラミング(Web)の最終レポートとして評価するのに必要な場合に限り、
私の応用プログラミング(Web)の担当教授様及び、TA様に限ってはこの限りではないものとします。
