# MEGAMOJI Pro  
MEGAMOJIに便利な機能を追加するブラウザ拡張機能です。  
  
## 機能  
クエリパラメーターで絵文字のプリセットを指定します。  
https://zk-phi.github.io/MEGAMOJI/?text=hello&font=normal+1em+%27NotoSerifBlack%27&color=333333&transparent=true&clip=3  
のように、`https://zk-phi.github.io/MEGAMOJI/?パラメータ名=値&パラメータ名=値...`という形式で指定します。
- `text`: 絵文字にしたい文字列を指定します。
- `font`: フォントを指定します。`normal 1em 'NotoSerifBlack'`のように、MEGAMOJI職人モードのフォント指定と同じ形式で指定します。ただし、`'`は`%27`にエンコードしてください。
- `color`: 文字色を指定します。`333333`のように、HEXカラーコードで指定します。
- `transparent`: 背景を透明にするかどうかを指定します。透明にしたい場合は`true`を指定します。したくない場合は何も指定しないでください。
- `clip`: 切り抜きを指定します。MEGAMOJIの**非**職人モード状態での、切り抜き指定セレクトボックスの番号をしていします。
  - 0: ぴっちり
  - 1: はみだす (アス比維持)
  - 2: おさめる (アス比維持)
  - 3: そのまま (長方形)
- ほかのパラメータについても順次対応中です。

## 使い方
1. このリポジトリの「Code」ボタンから「Download ZIP」します。
2. ZIPファイルを解凍します。
3. Chromeの拡張機能ページを開きます。
4. 右上の「デベロッパーモード」をオンにします。
5. 「パッケージ化されていない拡張機能を読み込む」をクリックします。
6. 解凍したフォルダを選択します。