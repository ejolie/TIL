2019년 2월 10일 일요일

# ⚠️ Unhandled 'error' event {docsify-ignore-all}
쉘에서 `node src` 명령어를 통해 node 서버를 실행하고자 할 때 다음과 같은 에러가 발생할 때가 있습니다.

```bash
❯ node src
events.js:167
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::4000
    at Server.setupListenHandle [as _listen2] (net.js:1328:14)
    at listenInCluster (net.js:1376:12)
```

저는 Koa.js를 통해 4000 포트를 사용하려던 중에 이 문제를 겪게 되었습니다.
이것은 node 서버가 이미 4000 포트를 사용중이기 때문에 발생하는 에러입니다.

&nbsp;

## 👍 해결 방법
따라서 `killall node` 명령어를 통해 이미 실행중인 node 서버를 죽이고 다시 명령어를 입력하면 제대로 실행됩니다.
```bash
❯ killall node
❯ node src
```

&nbsp;

출처 : https://stackoverflow.com/questions/50782463/node-events-js167-throw-er-unhandled-error-event

&nbsp;