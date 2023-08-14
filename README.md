# MEGAMOJI Pro  
MEGAMOJIに便利な機能を追加するブラウザ拡張機能です。  
  
## 機能  
クエリパラメーターで絵文字のプリセットを指定します。  
https://zk-phi.github.io/MEGAMOJI/?text=Hello&font=normal+1em+%27NotoSerifBlack%27&color=333333&transparent&clip=3  
のように、`https://zk-phi.github.io/MEGAMOJI/?パラメータ名=値&パラメータ名=値&パラメータ名=値...`という形式で指定します。
- `text`: 絵文字にしたい文字列を指定します。
- `font`: フォントを指定します。`normal 1em 'NotoSerifBlack'`のように、MEGAMOJI職人モードのフォント指定と同じ形式で指定します。
- `color`: 文字色を指定します。`333333`のように、`#`なしのHEXカラーコードで指定します。
- `transparent`: 背景を透明にするかどうかを指定します。このパラメータに値は不要です。`&transparent`と指定するだけでOKです。
- `clip`: 切り抜きを指定します。MEGAMOJIの**非**職人モード状態での、切り抜き指定セレクトボックスの番号を指定します。
  - `0`: ぴっちり
  - `1`: はみだす (アス比維持)
  - `2`: おさめる (アス比維持)
  - `3`: そのまま (長方形)
- `gradient`: グラデーションをオンにします。このパラメータに値は不要です。`&gradient`と指定するだけでOKです。
- `size`: 絵文字のサイズ指定です。`256`のように数字で指定してください。
- `outline`: 枠線の指定です。`ffffff,ff0000,00ff00,0000ff`のように、カンマ区切りで複数指定できます。色は`#`なしのHEXカラーコードで指定してください。
- `sample-preview`: サンプルのプレビュー表示をオンにします。このパラメータに値は不要です。`&sample-preview`と指定するだけでOKです。
- `align`: 文字の配置を指定します。
  - `justify`: 両端揃え
  - `center`: 中央揃え
  - `left`: 左揃え
  - `right`: 右揃え
- `effect`: 効果を指定します。`キラ,Foil`のようにカンマ区切りで複数指定できます。
- `background`: 背景色を指定します。`ffffff`のように、`#`なしのHEXカラーコードで指定します。
  

## 使い方
1. このリポジトリの「Code」ボタンから「Download ZIP」します。
2. ZIPファイルを解凍します。
3. Chromeの拡張機能ページを開きます。
4. 右上の「デベロッパーモード」をオンにします。
5. 「パッケージ化されていない拡張機能を読み込む」をクリックします。
6. 解凍したフォルダを選択します。

## その他
- [MEGAMOJI](https://zk-phi.github.io/MEGAMOJI/)
- [MEGAMOJIのGitHubリポジトリ](https://github.com/zk-phi/MEGAMOJI)