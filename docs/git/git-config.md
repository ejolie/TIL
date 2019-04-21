2019년 4월 19일 금요일

# git 전역 설정, 확인, 삭제하기

## git 전역 설정 확인

```bash
git config --list
```

## git 전역 사용자명/이메일 설정하기

```bash
git config --global user.name 이름
git config --global user.email 이메일주소
```


## git 설정 삭제하기

```bash
git config --global --unset-all user.name
git config --global --unset-all user.email
```