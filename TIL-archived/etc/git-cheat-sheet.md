# Git cheat sheet

## 1. 설치

#### Github for Windows

https://windows.github.com

#### Github for Mac

https://mac.github.com

#### Git for All Platforms

http://git-scm.com



## 2. Setup

#### git config --global user.name "[firstname lastname]"

#### git config --global user.email "[vaild-email]"

#### git config --global color.ui auto



## 3. Setup & Init

#### git init

>  현재 디렉토리를 git repository로 초기화한다.

#### git clone [url]

> URL 주소에 위치한 전체 repository를 가져온다.



## 4. Stage & Snapshot

#### git status

>  작업 디렉토리에 있는 변경된 파일과 staged된 파일들을 보여준다.

#### git add [file]

>  변경된 파일을 추가하여 commit할 준비를 한다. (stage)

#### git reset [file]

>  변경된 파일을 add (stage) 했던 것을 되돌린다.

#### git diff

#### git diff --staged

#### git commit -m "[descriptive message]"



## 5. Branch & Merge

#### git branch

#### git branch [branch-name]

#### git checkout

#### git merge

#### git log



## 6. Inspect & Compare

#### git log

#### git log branchB..branchA

#### git log --follow [file]

#### git diff branchB...branchA

#### git show [SHA]



## 7. Tracking path changes

#### git rm [file]

#### git mv ```[existing-path]``` ```[new-path]```

#### git log --stat -M



## 8. Ignoring patterns

```
logs/
*.notes
pattern*/
```



#### git config --global core.excludefile [file]



## 9. Share & Update

#### git remote add ```[alias]``` ```[url]```

#### git fetch [alias]

#### git merge [alias]/[branch]

#### git push  ```[alias]``` ```[branch]```

#### git pull



## 10. Rewrite history

#### git rebase [branch]

#### git reset --hard [commit]



## 11. Temporary commits

#### git stash

#### git stash list

#### git stash pop

### git stash drop

