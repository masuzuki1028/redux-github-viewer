# Redux Github Viewer

React+ReduxでGithub Viewerを実装しましょう。</br>
実際にGithub REST APIを叩くのは次課題なので、
この課題は**React Router**と**Redux**の利用にフォーカスしましょう。

demo: https://version1-workspace.github.io/ws-0500-redux-github-viewer/

## 課題で身に着けること

- Reduxでの状態管理
- Atomicデザインでのコンポーネント設計
- React Routerでのページ設定とページ遷移
- Eslint + Prettier
- モーダルの実装
- メニューの実装
- Hooks API

## 課題の進め方

### 0. 課題用リポジトリの作成

フォークでなく個人のアカウントにリポジトリ を作成してください。

### 1. yarn, create-react-appを利用してReactをインストール

1. reactをインストール

```
yarn create react-app redux-github-viewer
```

### 2. Eslint Prettierのセットアップ

##### 1. 静的解析ツールのeslintとpretteirをセットアップする

- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)

##### 2. 使用しているエディタにeslint, prettierのプラグインを導入

```
[使用しているエディタ] eslint or prettier プラグイン
```

で検索してインストールしてみてください。詰まった場合は適宜質問ください。

### 3. 実装に必要な概念を学ぶ

##### Atomic Designによるコンポーネント設計

[Atomic Designとは何か](https://www.codegrid.net/articles/2017-atomic-design-1/)

下記ようなディレクトリ設計にすると、うまくいきやすいです。

```
src - components -+
                  | - atoms/
                  | - molecules/
                  | - organisms/
                  | - templates/
    - pages/
```

##### Redux

主にメインコンセプト部分中心に

- [Redux.js公式](https://redux.js.org/introduction/getting-started)
- [Redux入門【ダイジェスト版】10分で理解するReduxの基礎](https://qiita.com/kitagawamac/items/49a1f03445b19cf407b7)]
- [Redux 入門 〜Reduxの基礎を理解する〜](https://qiita.com/soarflat/items/bd319695d156654bbe86)

**サンプル**

[Redux Todo List](https://jsfiddle.net/version1/u4y0j1qv/latest)

##### SPA(Single Page Application)

- [SPA(Single Page Application)ってなに？](https://digitalidentity.co.jp/blog/creative/about-single-page-application.html)
- [シングルページアプリケーション（SPA）の導入メリット＆デメリット](https://www.oro.com/ja/technology/001/)
- [SPA(Single Page Application)の基本](https://qiita.com/takanorip/items/82f0c70ebc81e9246c7a)
- [React Router](https://reactrouter.com/en/main)

### 4.デモをみながらGithubViewerを実装

- Pull Reqeustページは仮置きしているのででものようにタイトルだけ書いたページを置いておいてください。

- 一箇所で長時間はまってしまった場合は別の機能を実装するか質問するようお願いします。

##### チェックリスト

- [☓] reactのリポジトリの作成
- [☓] yarnでのパッケージインストール
  - [☓] redux, react-reduxのインストール
  - [☓] redux-devtoolsのインストール
  - [☓] react-routerのインストール
  - [☓] styled-componentsのインストール
  - [☓] eslint+prettierのインストール
  - [☓] react-modalのインストール
- [☓] ヘッダーの実装
  - [☓] ヘッダーロゴの実装
  - [☓] ヘッダーリンクの実装
  - [☓] メニューの実装（ライブラリを使わずに実装)
- [☓] topページの実装
  - [☓] タブの実装(react-router等ライブラリは使わずに実装）
- [ ] issueページの実装
  - [ ] 一覧表示
  - [ ] issueフィルタ機能の実装
  - [ ] issue作成(react-modalを使って実装)
  - [ ] issue更新(react-modalを使って実装)
  - [ ] issue削除(全て選択のチェックボックスも実装）
- [ ] プロフィールページの実装（userストアにデータベタ書きしたものを表示だけ）
- [ ] レスポンシブ対応

### 5. サイトとして公開

1. gh-pagesモジュールを追加

```
$ yarn add -D gh-pages
```

2. package.jsonのscriptsに下記コマンドを追加

```
"predeploy": "react-scripts build"
"deploy": "gh-pages -d build"
```

3. packcage.jsonにhomepageの属性を追加

```
  "homepage": "https://[アカウントID].github.io/[リポジトリ名]" // Github Pagesで公開するURL
```

4. コマンドを実行

```
$ yarn run deploy
```
