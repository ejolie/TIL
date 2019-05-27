# Day1. React 시작부터 배포까지

CHEQUER 김동우

- 강의 자료 : https://docs.google.com/presentation/d/10Qzj_qIEPTNHAN3jK0cQDUap6N8LlwyxMXyRmVmGH98/edit?fbclid=IwAR2VjdiVOqbXlK70zBkDjF_amsptd3N8gV_LqKLNXsixvLr9D0v0hNfE-o4#slide=id.g57aa948673_0_2

jsdev.kr

## Why: React

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

1. CRA (Create React App)

```bash
npx create-react-app my-app
```

CRA는 기본이자 사실상 표준, 현업에서도 많이 사용한다.

2. Next.js by zeit

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

3. Self eject from CRA

```bash
npm run eject
```
