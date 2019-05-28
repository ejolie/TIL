2019년 5월 27일 화요일

페이스북 이노베이션 랩 : React 사용자를 위한 리액트 부트캠프

# Day2. React Front-End Development with TypeScript and AntDesign

CHEQUER 장기영

- 실습 프로젝트 : https://github.com/thomasJang/react-fed

## 1. CRA로 React-TS 프로젝트 시작하기

- 공식 문서 : https://facebook.github.io/create-react-app/

### CRA는 왜 써야 되나요?

ESlint, Prettier 등도 기본 장착

- CRA 없이 React 프로젝트를 만들려면 해야 하는 일들
  - index.html 형식에 맞도록 만들기
  - webpack 설치 및 설정 (loader, devServer...)
  - babel 설치 및 설정
  - React 설치 및 설정
  - TypeScript 설치 및 설정
  - HMR 설치 및 설정

**매번 프로젝트 시작할 때마다 달라짐**

### 시작하기

타입스크립트 사용시 뒤에 `--typescript`를 붙여준다.

```bash
create-react-app my-app
```

```bash
npm init react-app my-app
```

```bash
yarn create react-app my-app
```

### 폴더구조

#### index.html

유일한 html 파일. 이 하나를 가지고 전부 js를 가지고 앱을 만든다.

#### index.js

시작점. 꼭 있어야함.

cf.

- 모달, 팝업 같은 UI : 최상위로 올라와서 가상의 레이어에 만들어 놓은 다음 바디 맨 끝에 주입
- JSX : 간접적으로 DOM를 제어함, 직접적으로 body에 주입하는 건 사상에 안 맞음

#### `package.json` 명령어

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

`npm start`는 `npm run start`를 줄여서 말하는 것. `npm run` 다음 명령어를 붙이면 작동하게 되어있다.

해당 키 이름과 `pre`, `after`를 함께 쓸 수 있다.

#### App.js

## 2. react-app-rewired를 사용하여 less-loader 연결하기

react-app-rewired가 개발을 중단

### [craco](https://github.com/sharegate/craco)

CRACO(Create React App Configuration Override)

`craco.config.js` 파일만으로 eject 없이 CRA 설정을 커스터마이징 할 수 있다.

### 시작하기

```bash
yarn add @craco/craco

# OR

npm install @craco/craco --save
```

최근에는 `--save`가 기본적으로 적용되어 붙이지 않아도 된다. `--save-dev`만 써주면 된다.

### sass 설정

#### 1. node-sass 설치

```bash
npm install node-sass
```

### less 설정

#### 1. craco 설치

#### 2. craco-less 설치

```bash
npm install craco-less
```

#### 3. `craco.config.js` 설정

```js
// craco.config.js
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }]
};
```

## 3. antd, styled-components 사용

### 시작하기

#### 1. 설치

```bash
npm install antd styled-components @types/styled-components
```

#### 2. antd css import

ts 파일에서 import 해서 작업하는게 용이해서 index.ts 파일도 만듦

```
- styled/
  - less/
    - index.less
  - index.ts
```

```less
// index.less
@import "~antd/dist/antd.less";
```

```ts
// index.ts
import "./less/index.less";
```

#### 3. error

antd의 문제

less loader에 inline을 enable해줘야 함

less는 동적으로 변수를 받아 주입할 수 있는 시스템이 있어서

```js
// craco.config.js
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          javascriptEnabled: true
        }
      }
    }
  ]
};
```

### 로그인 폼 만들기

antd는 form validation이 훌륭

## 3-2. Markdown

### 시작하기

#### 1. 마크다운 패키지 설치

react-markdown vs markdown-to-jsx

- 패키지 선택 기준
  - dependency가 적어야 좋음
  - 다운로드 추이

```bash
npm install markdown-to-jsx @types/markdown-to-jsx
```

#### 2. raw loader 설치 및 설정

```bash
npm install craco-raw-loader
```

```js
// craco.config.js
const rawLoader = require("craco-raw-loader");

module.exports = {
  plugins: [
    {
      plugin: rawLoader,
      options: {
        test: /\.(md|txt)$/
      }
    }
  ]
};
```

## 4. Style and Theme in React.JS

### Flexbox

- direction : column과 row
  - row : flexbox 안의 아이템들이 좌에서 우로
  - column : flexbox 안의 아이템들이 위에서 아래로
- justify
- align



## 5. 효율적인 코드 작성 (destructuring, async, await)



## 6. Drag & Resizing (Resizing, ellipsis)
