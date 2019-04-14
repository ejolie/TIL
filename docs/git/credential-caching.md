2019년 4월 15일 월요일 

# git push 때 비밀번호 입력 안 뜨게 하는 법 {docsify-ignore-all}

만약 HTTP를 사용하는 Github repo를 사용하고 있다면 credential helper를 이용해 Github 유저네임과 패스워드를 기억하게 만들 수 있다.

본 내용은 Mac OS기준이며 자세한 내용은 [Caching your Github password in Git](https://help.github.com/en/articles/caching-your-github-password-in-git#platform-linux) 를 참고하면 된다.

## Credential caching

1. 먼저 `credential-osxkeychain`이 설치되어 있는지 확인한다. 설치되어 있다면 아래와 같이 출력될 것이다.
```bash
$ git credential-osxkeychain
> usage: git credential-osxkeychain <get|store|erase>
```

2. `credential-osxkeychain`이 설치되어 있지 않다면 Xcode Command Line Tools로 설치할 것인지 창이 뜰 것이고 안내에 따라 설치하면 된다.

3. 설치가 완료되었다면 여기서부터 중요하다. git에게 `credential.helper` 설정을 이용해 `osxkeychain`을 사용할 것임을 알려준다.
```bash
$ git config --global credential.helper osxkeychain
```
4. 그 다음, `credential.helper`에 `store` 옵션을 적용하면 저장된 정보를 이용해 인증이 처리되므로 인증 절차가 생략된다.
```bash
$ git config credential.helper store
```

5. 인증 정보를 캐시로 저장하고 시간을 설정할 수 있다. 여기서는 7200초(2시간)을 설정하였다.
```bash
$ git config --global credential.helper 'cache --timeout 7200
```

#### 참고
- https://help.github.com/en/articles/caching-your-github-password-in-git#platform-linux
- https://stackoverflow.com/questions/6565357/git-push-requires-username-and-password
