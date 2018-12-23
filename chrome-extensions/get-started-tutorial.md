# 시작 튜토리얼

확장 프로그램은 여러가지 구성 요소들의 결합을 통해 만들어집니다. 이 요소들은 [background scripts](https://developer.chrome.com/background_pages.html), [content scripts](https://developer.chrome.com/content_scripts.html),  [options page](https://developer.chrome.com/optionsV2), [UI elements](https://developer.chrome.com/user_interface.html) 와 다양한 로직 파일을 포함합니다. 확장 프로그램의 구성 요소들은 HTML, CSS, 자바스크립트와 같은 웹 개발 기술로 만들어집니다. 구성 요소들은 확장프로그램의 기능에 의존하며, 모든 옵션을 필요로하지 않을 수도 있습니다.

이 튜토리얼은 유저가 [developer.chrome.com](https://developer.chrome.com/) 페이지의 배경색을 바꿀 수 있게 해주는 확장 프로그램을 개발하는 것입니다. 여기서는 확장 프로그램의 구성 요소 간의 관계를 보여주기 위해 많은 핵심 구성 요소들을 사용할 것입니다. 

먼저, 확장 프로그램 파일들을 넣을 새로운 디렉토리를 생성해주세요. 

완성된 확장 프로그램은 [여기](https://developer.chrome.com/extensions/examples/tutorials/get_started_complete.zip) 에서 다운 받을 수 있습니다.



## 💪Manifest 생성하기

확장 프로그램은 [manifest](https://developer.chrome.com/extensions/manifest) 파일과 함께 시작됩니다. `manifest.json` 파일을 생성하고 다음의 코드를 작성하세요. [여기](https://developer.chrome.com/extensions/examples/tutorials/get_started/manifest.json) 서 코드를 다운받아도 됩니다.

```json
  {
    "name": "Getting Started Example",
    "version": "1.0",
    "description": "Build an Extension!",
    "manifest_version": 2
  }
```

현재 상태에서, manifest 파일을 포함하는 디렉토리는 개발자 모드를 통해 확장 프로그램으로 추가될 수 있습니다.

1. `chrome://extensions` 으로 이동하여 확장 프로그램 관리 페이지를 열어 보세요.
   - 크롬 메뉴로도 확장 프로그램 관리 페이지를 열수 있습니다. 크롬 메뉴에서 **도구 더보기(More Tools)** 에 마우스를 올려 놓고 **확장 프로그램(Extensions)** 을 클릭하세요.
2.  **개발자 모드(Developer mode)** 옆에 있는 토글 스위치를 클릭하여 개발자 모드를 활성화하세요.
3. **압축해제된 확장 프로그램을 로드합니다.(LOAD UNPACKED)** 버튼을 클릭하고 확장 프로그램 디렉토리를 선택하세요.

짜잔! 확장 프로그램이 성공적으로 설치되었습니다. manifest 안에 아이콘이 없기 때문에, 확장 프로그램을 위한 일반적인 툴바 아이콘이 만들어질 것입니다.



## 👍Instruction 추가하기

확장 프로그램이 설치되었지만, instruction이 존재하지 않습니다.  `background.js` 파일을 만들어 [background script](https://developer.chrome.com/background_pages.html) 를 추가하거나  [여기](https://developer.chrome.com/extensions/examples/tutorials/get_started/background.jsdownloading it) 에서 완성된 파일을 다운받을 수 있습니다. 이제 이 파일을 확장 프로그램 디렉토리 안에 넣어주세요.

Background scripts 와 다른 많은 구성 요소들은 반드시 manifest 파일 안에 추가되어야 합니다. Backbround script를 manifest 파일 안에 기재하면, 확장 프로그램은 어떤 파일을 참조해야 하는지, 그 파일은 어떻게 동작해야 하는지를 알게 됩니다.

```json
  {
    "name": "Getting Started Example",
    "version": "1.0",
    "description": "Build an 확장 프로그램!",
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "manifest_version": 2
  }
```

이제 확장 프로그램은 자신이 일시적인 background script를 포함한다는 것을 알게 되었으며 이 스크립트가 필요로 하는 중요한 이벤트들을 위해 추가된 파일을 스캔할 것입니다. 

이 확장 프로그램은 설치되자마자 지속적인 변수로부터 정보를 얻고자 할 것입니다. 우선, Background script 안에  [`runtime.onInstalled`](https://developer.chrome.com/runtime#event-onInstalled) 을 위한 리스닝 이벤트를 포함시키세요. `onInstalled` 리스너 안에서, 확장 프로그램은 [storage](https://developer.chrome.com/storage) API를 사용하여 값을 설정할 것입니다.  이를 통해 확장 프로그램의 다양한 구성 요소들은 그 값에 접근하거나 값을 업데이트할 수 있게 됩니다.

```js
  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
  });
```

[storage](https://developer.chrome.com/storage) API를 포함한 대부분의 API는 확장 프로그램이 알 수 있도록 manifest 파일 내의 `"permissions` 필드에 기재되어야 합니다. 

```json
  {
    "name": "Getting Started Example",
    "version": "1.0",
    "description": "Build an Extension!",
    "permissions": ["storage"],
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "manifest_version": 2
  }
```

확장 프로그램 관리 페이지로 돌아가 **Reload** 링크를 클릭하세요. 새로운 필드인 **뷰 검사(Inspect views)** 가 생겼고 오른쪽에는 **백그라운드 페이지(background page) ** 라는 파란색 링크가 생겼습니다.

Background script의 콘솔 로그("`The color is green.`")를 보기 위해 링크를 클릭하세요.



## 🙂User Interface 추가하기

확장 프로그램은  [사용자 인터페이스(user interface)](https://developer.chrome.com/user_interface) 의 다양한 형태를 갖고 있습니다. 여기서는 [팝업(popup)](https://developer.chrome.com/user_interface#popup) 을 사용해보려고 합니다. `popup.html` 파일을 만들어 디렉토리에 추가하세요. [여기](https://developer.chrome.com/extensions/examples/tutorials/get_started/popup.html) 에서 다운을 받아도 됩니다. 이 확장 프로그램은 배경색을 변경하기 위해 버튼을 사용할 것입니다.

```html
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        button {
          height: 30px;
          width: 30px;
          outline: none;
        }
      </style>
    </head>
    <body>
      <button id="changeColor"></button>
    </body>
  </html>
```

Background script와 마찬가지로 이 파일은 manifest 파일의 [`page_action`](https://developer.chrome.com/pageAction) 아래에 팝업으로 명시되어야 합니다.

```json
  {
    "name": "Getting Started Example",
    "version": "1.0",
    "description": "Build an Extension!",
    "permissions": ["storage"],
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "page_action": {
      "default_popup": "popup.html",
    },
    "manifest_version": 2
  }
```

툴바 아이콘 이미지 역시 `page_action`  의 `default_icons` 필드에 추가되어야 합니다.  [여기](https://developer.chrome.com/extensions/examples/tutorials/get_started/images.zip) 에서 이미지 파일을 다운받고 압축을 풀어준 뒤, 확장 프로그램 디렉토리 안에 넣어주세요. 확장 프로그램이 이미지 파일을 어떻게 사용할지 알 수 있도록 manifest 파일을 업데이트 해주세요.

```json
  {
    "name": "Getting Started Example",
    "version": "1.0",
    "description": "Build an Extension!",
    "permissions": ["storage"],
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "page_action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "images/get_started16.png",
        "32": "images/get_started32.png",
        "48": "images/get_started48.png",
        "128": "images/get_started128.png"
      }
    },
    "manifest_version": 2
  }
```

확장 프로그램 페이지에서 확장 프로그램의 이미지, 승인 경고, 즐겨찾기 아이콘을 볼 수 있습니다. 이 이미지들은 manifest의 [`icons`](https://developer.chrome.com/user_interface#icons) 아래에 기재되어야 합니다.

```json
  {
    "name": "Getting Started Example",
    "version": "1.0",
    "description": "Build an Extension!",
    "permissions": ["storage"],
    "background": {
      "scripts": ["background.js"],
      "persistent": false
    },
    "page_action": {
      "default_popup": "popup.html",
      "default_icon": {
        "16": "images/get_started16.png",
        "32": "images/get_started32.png",
        "48": "images/get_started48.png",
        "128": "images/get_started128.png"
      }
    },
    "icons": {
      "16": "images/get_started16.png",
      "32": "images/get_started32.png",
      "48": "images/get_started48.png",
      "128": "images/get_started128.png"
    },
    "manifest_version": 2
  }
```

이 단계에서 확장 프로그램을 다시 로드하면 회색의 아이콘을 볼 수 있습니다. 하지만 기능적으로 달라진 점은 없습니다.   `page_action` 이 manifest에 선언되어 있기 때문에, 언제 유저가 `popup.html` 과 상호작용을 하는지를 브라우저에게 말해주는 것은 확장 프로그램에게 달린 일입니다.

Background script의 `runtime.onInstalled` 리스너 이벤트 안에, [`declarativeContent`](https://developer.chrome.com/declarativeContent) API와 함께 선언된 룰을 추가하세요.

```javascript
  chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
```

확장 프로그램은 manifest 안에  [`declarativeContent`](https://developer.chrome.com/declarativeContent)API에 대한 접근 허가를 추가해야 합니다.

```json
  {
    "name": "Getting Started Example",
  ...
    "permissions": ["declarativeContent", "storage"],
  ...
  }
```



이제 유저가  `"developer.chrome.com"` 을 포함한 URL을 접속했을 때, 브라우저 툴바에는 알록달록한 페이지 액션 아이콘을 보여줄 것입니다. 아이콘이 색상을 가졌을 때, 유저는 아이콘을 눌러 popup.html을 볼 수 있습니다.

팝업 UI를 위한 마지막 단계는 버튼에 색상을 추가하는 것입니다. `popup.js` 파일을 만들어 아래 코드를 작성하거나 [여기](https://developer.chrome.com/extensions/examples/tutorials/get_started/popup.js) 에서 다운 받으세요.

```javascript
  let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });
```

이 코드는 `popup.html` 에서 버튼을 가져와 storage의 색상 값을 요청합니다. 이후 색상 값을 버튼의 배경색으로 적용합니다. `popup.js` 스크립트 태그를 `popup.html` 안에 추가하세요.

```html
<!DOCTYPE html>
<html>
...
  <body>
    <button id="changeColor"></button>
    <script src="popup.js"></script>
  </body>
</html>
```

확장 프로그램을 새로고침하여 초록색 버튼을 확인하세요.



## 💡Layer Logic

확장 프로그램은 이제 [developer.chrome.com](https://developer.chrome.com/) 에서 사용자에게 팝업이 나타나야 한다는 사실을 알고 있으며 색상이 있는 버튼을 보여줍니다. 그러나 더욱 깊은 사용자와의 상호작용을 위해서는 로직이 필요합니다. `popup.js` 에 아래 코드를 추가하세요.

```javascript
  let changeColor = document.getElementById('changeColor');
  ...
  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };
```

추가된 코드는 버튼에 onclick 이벤트를 추가합니다. 이제 버튼은 [프로그래밍 방식으로 삽입된 콘텐츠 스크립트(programatically injected content script)](https://developer.chrome.com/content_scripts#pi) 을 불러옵니다. 이것은 페이지의 배경색을 버튼과 같은 색으로 변경합니다.  웹 페이지에 자동으로 원하지 않는 코드를 삽입하는 방식 대신, 프로그래밍 방식 삽입은 사용자가 발생시킨 콘텐츠 스크립트를 허락합니다.

`tabs` API에 대한 확장 프로그램의 일시적인 접근을 허락하기 위해 manifest의 permission에 [`activeTab`](https://developer.chrome.com/확장 프로그램/activeTab) 을 추가하세요.  이것은 확장 프로그램이 [`tabs.executeScript`](https://developer.chrome.com/tabs#method-executeScript) 을 호출할 수 있게 해줍니다.

```json
  {
    "name": "Getting Started Example",
  ...
    "permissions": ["activeTab", "declarativeContent", "storage"],
  ...
  }
```

확장 프로그램은 이제 모든 기능을 갖췄습니다! 확장 프로그램을 다시 불러오고, 이 페이지를 새로고침 해보세요. 팝업을 열고 버튼을 누르면 초록색으로 변합니다! 하지만, 어떤 유저들은 배경을 다른 색으로 바꾸고 싶어할 수도 있겠네요.



## 😎사용자에게 Options 주기

현재 확장 프로그램은 사용자가 배경색을 초록색으로 변경시키는 것만 가능하게 해줍니다. 옵션 페이지(options page)를 추가하게 되면 사용자에게 확장 프로그램의 기능에 대한 권한을 더 많이 부여하게 되며, 더 나아가 브라우저 경험을 사용자화할 수 있습니다.

`options.html` 파일을 만들고 아래 코드를 작성하거나 [여기](https://developer.chrome.com/extensions/examples/tutorials/get_started/options.html) 에서 다운받으세요.

```html
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        button {
          height: 30px;
          width: 30px;
          outline: none;
          margin: 10px;
        }
      </style>
    </head>
    <body>
      <div id="buttonDiv">
      </div>
      <div>
        <p>Choose a different background color!</p>
      </div>
    </body>
    <script src="options.js"></script>
  </html>
```

그리고 나서 manifest에 옵션 페이지를 추가하세요.

```json
  {
    "name": "Getting Started Example",
    ...
    "options_page": "options.html",
    ...
    "manifest_version": 2
  }
```

확장 프로그램을 다시 로드하고 **세부정보(DETAILS)** 을 클릭하세요.



페이지 스크롤을 내려 **확장 프로그램 옵션(Extension options)** 을 선택하세요. 비록 지금은 페이지가 비어 보이지만 옵션 페이지를 확인할 수 있습니다.



마지막 단계는 옵션 로직을 추가하는 것입니다. `options.js` 파일을 확장 프로그램 디렉토리에 추가하고 다음의 코드를 작성하세요. 또는 [여기](https://developer.chrome.com/extensions/examples/tutorials/get_started/options.js) 에서 다운받으세요.

```javascript
  let page = document.getElementById('buttonDiv');
  const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
  function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
      let button = document.createElement('button');
      button.style.backgroundColor = item;
      button.addEventListener('click', function() {
        chrome.storage.sync.set({color: item}, function() {
          console.log('color is ' + item);
        })
      });
      page.appendChild(button);
    }
  }
  constructOptions(kButtonColors);
```

onclick 이벤트 리스너와 함께, 네 가지 색 옵션이 제공되며 옵션 페이지의 버튼으로 생성됩니다.  사용자가 버튼을 누르면 확장 프로그램의 global storage에 있는 색상의 값을 업데이트 합니다. 확장 프로그램의 모든 파일들은 global storage로부터 색상의 정보를 받아오기 때문에, 다른 어떤 값도 업데이트될 필요가 없습니다.



## 🐾다음 단계로 나아가기

축하합니다! 이제 디렉토리는 비록 단순하기는 하지만, 모든 기능을 갖춘 크롬 확장 프로그램을 구성하고 있습니다.

다음으로는?

- The [Chrome Extension Overview](https://developer.chrome.com/overview) backs up a bit, and fills in a lot of detail about the 확장 프로그램 architecture in general, and some specific concepts developers will want to be familiar with.
- Learn about the options available for debugging 확장 프로그램 in the [debugging tutorial](https://developer.chrome.com/tut_debugging).
- Chrome 확장 프로그램 have access to powerful APIs above and beyond what's available on the open web. The [chrome.* APIs documentation](https://developer.chrome.com/api_index) will walk through each API.
- The [developer's guide](https://developer.chrome.com/devguide) has dozens of additional links to pieces of documentation relevant to advanced 확장 프로그램 creation.

Content available under the [CC-By 3.0 license](http://creativecommons.org/licenses/by/3.0/)