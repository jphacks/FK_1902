# Kamatte!!

![Kamatte!!](https://github.com/jphacks/FK_1902/blob/dev/src/images/kamatte-logo-2.png)

- [Demo - YouTube](https://www.youtube.com/watch?v=lGfXmzBzebk&feature=youtu.be)

## 製品概要

### X Tech（X → 今回皆さんが選定した好きな言葉に書き換えてください）

- メンタルヘルスケア x Tech

### 背景（製品開発のきっかけ、課題等）

他の SNS では言えないような仕事の愚痴や日常の悩みごと、あるいは雑談などを友人や家族以外の誰かに話したい人や、誰かの悩みを聞いてあげたい人の需要を満たすためにこのアプリを開発した。

### 製品説明（具体的な製品の説明）

日常の悩みごとを話したい、かまって欲しいという人たちのニーズに答えたアプリ。
リアルタイムのチャットで不特定多数の人達が相談に乗ってくれます。
製品の強みは、話したい人がアプリ内通貨を相談に乗る人に満足度や相談に乗ってくれた回数等に応じて渡すというシステムです。
このシステムにより、相談に乗る人が少なくなるということを防ぎ、ユーザバランスを保つことができると考えています。
アプリ内通貨は、話したい人から相談に乗る人に譲渡された時点で換金やクーポンといった形に交換できるようにしてモチベーションの維持を目指しています。

### 特長

1. 何か話したいことがあるユーザが**アプリ内通貨を消費して「かまってルーム」を作成**し、話を聞いてあげたい人がかまってルームを選択することでチャットが開始

2. 話を聞いてあげた人は**アプリ内通貨を獲得してボーナス**を受け取れるようになる

3. かまってルームは「仕事」「家庭」「雑談」などの**話したいジャンルを 3 つまで**選択することができる

### 解決出来ること

自分が抱えている悩みを不特定の誰かに打ち明けることで、ストレス解消や精神的な安定に繋がることができる

### 今後の展望

アプリ内通貨の実装を行っていきます。
同時に、チャットだけでなく通話も実装していきたいと思います。
また、チャットルームの生存時間等をバッチ処理を通して管理して、よりリアルタイム性を求めていきます。

## 開発内容・開発技術

### 活用した技術

- [React Native](https://facebook.github.io/react-native/)
- [firebase](https://console.firebase.google.com/u/0/?hl=ja)

#### フレームワーク・ライブラリ・モジュール

- [package.json](https://github.com/jphacks/FK_1902/blob/dev/package.json)

#### デバイス

- iPhone (iOS ver.9.0 以上)
- Android OS 搭載のスマートフォン (ver.6.0 以上)

### 独自開発技術（Hack Day で開発したもの）

#### 2 日間に開発した独自の機能・技術

- チャットルームの作成・退出機能
- Google 認証後のプロフィール作成・編集
- UI デザイン

#### 特に力を入れたこと

- Atomic Design に基づいた設計・モデルの実装
