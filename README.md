# Sen ウェブサイト

## ファイル構成
- `index.html` … トップページ
- `works.html` … 作品一覧（12件）
- `about.html` … 会社概要・コンセプト
- `director.html` … 代表者プロフィール
- `contact.html` … お問い合わせフォーム
- `style.css` / `script.js` … 共通スタイル・スクリプト

## 公開前にやること

### 1. 作品（works.html / index.html）
各作品カードは次の3つを差し替えます。

```html
<div class="work-media has-image" data-yt="動画ID" style="background-image:url('images/work01.jpg');">
  <div class="ph"><div class="play"></div><span class="label">WORK 01</span></div>
</div>
<div class="work-info">
  <p class="cat">WebCM</p>
  <h3>作品タイトルを入力</h3>
</div>
```

- **サムネイル画像**：`images/` フォルダに画像（jpg/pngなど）を追加し、`style="background-image:url('images/ファイル名.jpg')"` の部分をそのファイル名に変更してください。横長(16:10程度)の画像がきれいに収まります。
- **動画**：`data-yt="動画ID"` に YouTube の動画IDを入力してください。動画IDは `https://www.youtube.com/watch?v=XXXXXXXXXXX` の `v=` の後ろの11文字です（例: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` なら `dQw4w9WgXcQ`）。サムネイルをクリックすると自動でその場に動画が埋め込まれ再生されます。
- 画像を設定したカードには class に `has-image` を付けてください（プレースホルダーの文字が非表示になり、再生ボタンだけが画像の上に表示されます）。画像がまだない作品は `has-image` を外し、`style` 属性を削除したままにしておけば、これまで通りグレーのプレースホルダー表示になります。
- 「作品タイトルを入力」の部分と、カテゴリ（WebCM / Sports など）も実際の内容に差し替えてください。
- `WORK 01` の見本として、1件目にサンプル画像パスとサンプル動画IDを入れています。実際のファイル・IDに差し替えてください。

### 2. お問い合わせフォーム（contact.html）
実際にメール送信できるようにするため、[Formspree](https://formspree.io)（無料プランあり）に登録し、発行されたフォームIDを以下に設定してください。
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
`YOUR_FORM_ID` の部分を、Formspreeで発行された実際のIDに置き換えてください。設定後、テスト送信して受信を確認することをおすすめします。

### 3. note連携
現在ナビゲーションの「note.」は `https://note.com/` にリンクしています。実際のnoteアカウントURLに差し替えてください（サイト内3箇所×5ページ=15箇所ありますが、全ファイルで `https://note.com/` を検索置換すれば一括で直せます）。

### 4. 代表者写真・作品サムネイル
`director.html` の点線ボックス（代表者写真をここに配置してください）に、実際の写真を差し込んでください。画像を追加する場合は `<img src="images/matsunaga.jpg" alt="松永隆之">` のようにdiv内を置き換えます。

### 5. 英語ページ（将来対応）
今回は日本語のみで制作しています。将来英語ページを追加する際は、各HTMLファイルをコピーして `index-en.html` のように用意し、ヘッダーに言語切り替えリンクを追加する形が拡張しやすいです。

## 公開方法
このサイトはビルド不要の静的HTMLです。フォルダごと以下のいずれかにアップロードすれば公開できます。
- Netlify / Vercel（フォルダをドラッグ＆ドロップするだけで公開可能）
- GitHub Pages
- お使いのレンタルサーバー（FTPでファイル一式をアップロード）
