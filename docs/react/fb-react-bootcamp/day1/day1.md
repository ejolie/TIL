2019년 5월 27일 월요일

페이스북 이노베이션 랩 : React 사용자를 위한 리액트 부트캠프

# Day1. React 시작부터 배포까지

CHEQUER 김동우

- 강의 자료 : https://docs.google.com/presentation/d/10Qzj_qIEPTNHAN3jK0cQDUap6N8LlwyxMXyRmVmGH98/edit?fbclid=IwAR2VjdiVOqbXlK70zBkDjF_amsptd3N8gV_LqKLNXsixvLr9D0v0hNfE-o4#slide=id.g57aa948673_0_2

jsdev.kr

React Korea - 6/22 Meetup 예정

## 1. Why: React

### SPA

- 왜 SPA가 나왔는가?
  결국엔 고객의 요구사항 때문. 페이지 리로드가 경험적으로 부자연스럽기 때문에

- MPA
  요청을 페이지 단위로 보냄. 페이지는 이미 서버 상에서 렌더링된 상태. 브라우저는 그리기만 함.

- React vs Vue vs Angular
  React 샐러리가 Vue보다 높다.

### React

1. Virtual DOM
   매우 빠른 렌더링.

   인메모리에 가상의 돔 트리. 돔 트리의 변경점만 한번에 브라우저에 요청

2. Component
   높은 재사용성 & 빠른 개발.

3. JSX
   선언적, 직관적, 높은 생산성.

   XML 코드, 안 닫으면 안됨. 파일, 코드 하나 안에서 스타일도 선언하고 jsx로 뷰도 선언하고 라이프 사이클도 선언하는 방식.

### React 시작하기

#### 1. CRA (Create React App)

```bash
npx create-react-app my-app
```

CRA는 기본이자 사실상 표준, 현업에서도 많이 사용한다.

#### 2. Next.js by zeit

```bash
npm install next react react-dom
npm init
```

- 특징

  - 서버 사이드 렌더링
  - 빠른 페이지 로드를 위한 코드 스플리팅
    필요한 코드만 불러와주는 기능
    cf. 전 세계 평균 인터넷 속도 7mb
  - 간단한 클라이언트 사이드 라우팅 (page based)
  - HMR(Hot Module Replacement)를 지원하는 Webpack 기반의 개발 환경
  - Express나 다른 Node.js HTTP 서버와 함께 구현할 수 있음
  - Babel이나 Webpack 설정으로 커스터마이징 가능

- 단점
  - 페이지 라우팅을 강제하여 유연하게 만들기 힘듦

#### 3. Self eject from CRA

```bash
npm run eject
```

eject하여 Webpack 설정을 바꿔 사용할 수 있다. 단점은 CRA의 추후 업데이트 사항을 적용할 수 없다.

## 2. React의 특성: 구조, 렌더링, 라이프 사이클

### JSX (JavaScript eXtension)

### Props & State

- Props : 단방향 데이터 바인딩
  불변, 변경시 리렌더링

- State : 컴포넌트의 로컬 상태
  불변, 변경시 리렌더링
  불변 : 속 안에 있는 데이터는 변하지 않고 주소값만 바뀐다. ex) `Object.assign()`

### 라이프 사이클

결국엔 자주 사용하는 것만 사용하게 됨
`getDerivedStateFromProps()`, `componentDidMount()`, `componentDidUpdate()`

이 부분이 가장 어려움. 반복적으로 학습해야 한다.

## 3. React 개발 스택: JS or TS? Redux or MobX?

### TypeScript

큰 회사의 프로젝트라면, 작은 서비스라도 개발 효율을 생각한다면 사용하는 게 좋다.

- 장점

  - 생산성
  - 안정성
  - 편의성
    자동완성

- 단점
  - 러닝커브

객체나 컴포넌트나 어떤 타입을 갖고 있는지 선언해줘야 한다. ex) `FC`는 Functional Component

### 상태 관리

Props는 부모로부터만 전파되기 때문에, 모든 상태를 부모로부터 받는 것은 비효율적임

따라서, 앱의 전역적 상태관리를 필요로 하게 됨

#### 1) Redux

Flux 패턴
Event driven

- 단점
  - 액션 코드와 액션에 대한 반응인 리듀서 코드가 많이 필요함. 그에 따른 피로감
  - 혼자서는 못 쓰고 middleware 필요 (saga, thunk, observable...)

#### 2) MobX

Reactive Programming : 상태로부터 무언가를 일으킴

## 4. Styling: styled-components vs emotion vs jss

### 1) Default

인라인으로 만들려먼 camel case를 써야하므로 번거로움

### 2) styled-components

### 3) emotion

styled-components 보다 조금 더 진화함

styled-components와 호환이 쉬워서 요새 많이 사용

인라인 코드처럼 생긴 css 기능도 지원함

컴포넌트가 어떤 스타일을 가졌는지 한 눈에 알기 쉬운 장점

### 4) JSS

## 5. 프로젝트 폴더 구성: Components or Atomic

정답은 없다.

### 1) Components

- Pages

  - react-router 같은 걸 썼을 때 라우팅 되는 페이지 단위를 구분
  - ex) Home, Shop, Cart, User

- Containers

  - 공용으로 사용되는 컴포넌트 집합
  - ex) List, Table, Profile

- Components

  - 재사용 가능한 작은 컴포넌트
  - ex) Button, Input, Heading

- Stores

- Actions

### 2) Atomic Design

- Atoms

- Molecules

- Organisms

- Templates

- Pages

## 6. 브라우저 라우팅: React Router

웹 서비스는 url이 있고 url에 따라 뷰가 달라지는 것을 라우팅이라 한다.

**브라우저 라우팅** : 서버로 url 요청을 보내지 않고, 브라우저의 history API를 사용하여 url이 변경되고 이에 따라 페이지 렌더링이 변경된다.

### React Router DOM

#### 1) Switch

일치하는 첫 번째 것만 렌더링하고 나머지는 렌더링 하지 않는다.

다 일치하지 않으면 NoMatch

#### 2) Link

로그인이 필요한 페이지에서 로그인으로 넘길 때 많이 사용

#### 3) withRouter

가장 많이 사용하는 것은 withRouter

withRouter로 컴포넌트를 감싸면 this.props 안에 match, location, history를 주입해준다.

#### React Router Location & History

- location : 객체가 바뀌었을 때 해야하는 행동들을 위해 사용

- history : 코드로서 url을 조작해야 할 때 사용. Link를 많이 사용함.

## 7. Hot Module Replacement: React Hot Loader

### HMR != live reload

CRA를 사용하면 webpack이 제공하는 HMR은 사용할 수 있다.

이것은 사실 live reload, state는 사라지고 ui는 초기화된다.

js를 바꿔치기 해서 상태를 유지한 상태로 개발을 할 수 있는 것이 HMR

CRA 2.0부터 eject하지 않고 craco를 설치하여 HMR 사용 가능

## 8. 검색 엔진을 위한: SSR(Server-side rendering)

### SSR을 해야 하는 이유?

- 구글과 네이버에서 서비스를 제대로 크롤링해서 가기 위해서
- 소셜 미디어에서의 오픈 그래프를 달성하기 위해서
- 성능

### CSR

React는 SPA - 검색 엔진 로봇이 봤을 땐 텅 빈 html 파일 밖에 없다.

### SSR

이미 React가 그리고자 하는 DOM이 그려진 상태의 html 파일

### Google & Naver

#### googlebot

구글봇이 SPA 렌더링을 12초를 기다리므로 빈도가 낮을 수 밖에 없다.

#### Yeti

### CRA: cra-universal

```js
// before
ReactDOM.render(...)

// after
ReactDOM.hydrate(...)
```

- `hydrate` : CSR 결과와 SSR 결과를 비교해서 같은지 확인. 같아야 함.

```bash
# Start CRA client
npm start

## Start CRA server, then open http://localhost:3001 in your browser
npx cra-universal start
```

3001번 포트는 SSR 사이트가 된다.

- 문제점
  - BrowerRouter 코드
  - `componentDidMount()`에서 GitHub Data 가져오는 코드

기술적 난이도가 높고 굉장히 까다롭다.

### Next.js

다 된다.

페이지 마다 `getInitialProps()` 라는 async한 메서드를 제공한다. 노드의 리퀘스트 형태. 이 메서드 안에서 Data Fetch 같은 async 작업을 수행하면 Props가 된다.

## 9. 배포하기: S3 / GitHub / Heroku / Zeit / Lambda / ECS

### S3

정적 사이트 호스팅

다른 주소로 요청이 오면 404 Fallback을 index.html로 설정 -> 결국 모든 라우팅, 요청을 index.html로 설정

- 매우 저렴한 비용
- SSR 불가로 정적 페이지에 적합
  ex) Resume같은 1 페이지 (오픈 그래프는 html head에 때려박으면 됨)

### GitHub

```bash
npm install gh-pages
```

- 글로벌 CDN으로 매우 빠름. S3는 리전이 있어서 더 느림
- SSR 불가로 정적 페이지에 적합

### Heroku

- SSR 가능, node를 실행할 수 있는 인스턴스 제공
- Free (sleeps after 30 mins of inactivity)
  해결책 : Heroku caffein (30분 마다 요청)

### Zeit: Now

AWS Lambda와 같은 Serverless Devlopyment (인스턴스 X)

Heroku처럼 인스턴스로도 사용 가능

- Free, Unlimited, Pay as you Grow

### Lambda (Serverless)

문서를 보면 굉장히 어렵다.

### ECS

Docker 기반으로 구성

React 프로젝트를 배포하기에 좋은 환경

스케일업 쉬움, 무중단 배포 쉬움

## QNA

- MobX -> Redux?

  별로 없는듯..

  cf. Redux-observable : MobX처럼 Reactive 가능, but 차라리 MobX를 쓰는게 나음

  

  - MobX의 단점?
    - magic이 많음. 왜 이렇게 되는지 모르는 코드가 많음.

    - 정형화된 형태 X

      해결책 : mobx-state-tree 사용하면 tree 형태의 store 사용 가능



- GatsbyJS

  cf. Docusarus - 비슷한 정적 사이트 빌드 툴



- Context API
  - 장점
    - React 코드로 작성, 쉬움
  - 단점
    - 자체만으로는 mutable, 형태 강제 불가, 스파게티 코드가 되기 쉬움
    - 퍼포먼스가 떨어짐, overhead



- React Hooks 

  MobX 동작 방식과 비슷

  cf. mobx-react-lite : Hooks로 MobX 사용

  cf. apollo-client : 다른 개념. graphQL 데이터를 React DOM에 직접 바인딩. UI와 Data가 너무 밀접한 듯.



- 요즘에는 Functional Component 트랜드

  Redux : 보일러 플레이트 코드가 너무 많은게 단점

  취업을 생각한다면 Redux는 무조건 해야 하고, 개인적으로 MobX 시도해보는 것을 추천



- 리액트는 일단 SSR 고려를 한다고 하면 Node 인스턴스가 있어야 함

  Node - single thread

  SSR 안 한다면 정적 파일을 제공하는 것이므로 Flask나 어느 곳이든 상관 X
