# 확장 프로그램(Extensions)이란?

본 게시물은 [What are extensions?](https://developer.chrome.com/extensions) 을 한국어로 번역한 글입니다. 생활코딩 강의를 보고 크롬 익스텐션 개발에 관심을 갖게 되어 번역을 진행했습니다.😃

확장 프로그램은 브라우저 경험을 사용자화 할 수 있는 작은 소프트웨어 프로그램입니다. 확장 프로그램을 통해 사용자는 크롬의 기능과 동작을 자신의 요구와 선호에 따라 조정할 수 있습니다. 이것은 HTML, 자바스크립트, CSS와 같은 웹 기술로 만들어졌습니다.

확장 프로그램은 좁게 정의되고 이해하기 쉬운  [단 하나의 목적(single purpose)](https://developer.chrome.com/single_purpose) 을 충족시켜야 합니다. 하나의 확장 프로그램은 다양한 요소와 여러 기능을 포함할 수 있으나 모든 것은 공통의 목적을 위한 것이어야 합니다.

![A screenshot of an extension's icon in the browser bar](https://developer.chrome.com/static/images/index/gmail-small.png)사용자 인터페이스(User Interface)는 최소화해야 하며 목적을 갖고 있어야 합니다. 사용자 인터페이스는  [Google Mail Checker 확장 프로그램](https://developer.chrome.com/samples#google-mail-checker) 과 같은 단순한 아이콘에서부터 전체 페이지 [덮어쓰기(overriding)](https://developer.chrome.com/override) 까지 가능합니다. 

확장 프로그램 파일들은 사용자가 다운받고 설치할 수 있는 하나의 `.crx` 패키지로 압축됩니다. 이것은 확장 프로그램이 평범한 웹 앱과 달리 웹 콘텐츠에 의존하지 않는다는 것을 의미합니다.

확장 프로그램은 [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) 을 통해 배포되며 [Chrome Web Store](http://chrome.google.com/webstore) 에 출시됩니다. 더 많은 정보를 원한다면, [store developer documentation](http://code.google.com/chrome/webstore) 를 확인해보세요.



## 🙌Hello Extensions

Hello Extensions 예제를 통해 확장 프로그램 개발을 쉽게 배워 봅시다. 먼저, 확장 프로그램 파일들을 저장하기 위한 새로운 디렉토리를 만들거나 [sample page](https://developer.chrome.com/extensions/samples#search:hello) 에서 파일들을 다운받으세요.

그 다음,  `manifest.json` 파일을 추가하고 다음의 코드를 작성해 넣으세요.

```json
  {
    "name": "Hello Extensions",
    "description" : "Base Level Extension",
    "version": "1.0",
    "manifest_version": 2
  }
```

모든 확장 프로그램은 manifest 파일이 필요합니다. 하지만 대부분의 확장 프로그램은 manifest 파일만으로 많은 일을 하지 않습니다. 이 예제의 확장 프로그램은 [`browser_action`](https://developer.chrome.com/browserAction) 필드 아래에 선언된 팝업 파일과 아이콘을 갖고 있습니다.

```json
  {
    "name": "Hello Extensions",
    "description" : "Base Level Extension",
    "version": "1.0",
    "manifest_version": 2,
    "browser_action": {
      "default_popup": "hello.html",
      "default_icon": "hello_extensions.png"
    }
  }
```

 [`hello_extensions.png` 이 파일](https://developer.chrome.com/static/images/index/hello_extensions.png) 을 다운받으세요.  `hello.html` 라는 이름의 파일을 생성하고 다음의 코드를 작성하세요.

```html
  <html>
    <body>
      <h1>Hello Extensions</h1>
    </body>
  </html>
```

이제 확장 프로그램 아이콘이 클릭되었을 때 `hello.html` 파일이 보입니다. 다음 단계는 키보드 단축키 명령어를  `manifest.json` 안에 작성하는 것입니다. 이 단계는 흥미롭지만 필수적인 것은 아닙니다.

```json
  {
    "name": "Hello Extensions",
    "description" : "Base Level Extension",
    "version": "1.0",
    "manifest_version": 2,
    "browser_action": {
      "default_popup": "hello.html",
      "default_icon": "hello_extensions.png"
    },
    "commands": {
      "_execute_browser_action": {
        "suggested_key": {
          "default": "Ctrl+Shift+F",
          "mac": "MacCtrl+Shift+F"
        },
        "description": "Opens hello.html"
      }
    }
  
  }
```

마지막으로 당신의 로컬 머신에 확장 프로그램을 설치하세요.

1. 크롬 브라우저에서 `chrome://extensions` 로 이동하세요. 주소창 오른쪽 상단에 있는 크롬 메뉴를 클릭하여 이동할 수도 있습니다.  **도구 더보기(More Tools)** 에 마우스를 올린 뒤  **확장 프로그램(Extensions)** 을 선택하세요.
2. **개발자 모드(Developer Mode)** 옆의 박스를 체크하세요.
3. **압축해제된 확장 프로그램을 로드합니다.(Load Unpacked Extension)** 를 누르고 당신의 "Hello Extensions" 확장 프로그램 디렉토리를 선택하세요.

축하합니다! 당신은 이제 팝업 기반의 익스텐션을 사용할 수 있습니다. 이 `hello_world.png` 아이콘을 클릭하거나 또는 키보드의 `Ctrl+Shift+F`를 누르면 됩니다.



## 🤔다음으로는?

1. [Getting Started tutorial](https://developer.chrome.com/getstarted) 를 진행하세요.
2. [Overview](https://developer.chrome.com/overview) 를 읽어 보세요.
3. [Chromium blog](http://blog.chromium.org/) 에서 최신 소식을 확인 하세요.
4. [chromium-extensions group](http://groups.google.com/a/chromium.org/group/chromium-extensions) 을 구독하세요.



## 🖥관련 영상

[Technical videos](http://www.youtube.com/view_play_list?p=CA101D6A85FE9D4B) 
[Developer snapshots](http://www.youtube.com/view_play_list?p=38DF05697DE372B1)

Content available under the [CC-By 3.0 license](http://creativecommons.org/licenses/by/3.0/)
