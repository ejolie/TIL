# 1. 순환 (Recursion)

## Ex3. N-Queens

`NxN` 체스판, `N`개의 말

* 한 줄에 하나의 말을 놓는 경우의 수

  첫번째 줄 N가지 x 두번째 줄 N가지 x ... x N = N^N

* 막다른 길에 다다르면 그 결정을 번복한다.

### 

### 상태공간트리

* 상태공간트리란 내가 찾고 있는 해를 포함하는 트리
  * 즉, 해가 존재한다면 그것은 반드시 이 트리의 어떤 한 노드에 해당한다. 따라서 이 트리를 체계적으로 탐색하면 해를 구할 수 있다.



* 상태공간트리의 모든 노드를 탐색해야 하는 것은 아니다.
  * non-promising (infeasible)
  * promising



### 되추적 기법 (Backtracking)

상태공간트리를 깊이우선탐색 방식 (DFS)으로 탐색하여 해를 찾는 알고리즘을 말한다.

* Backtracking  방법
  1. Recursion
  2. Stack



### Design Recursion

```
# 매개변수는 내가 현재 상태공간트리의
# 어떤 노트에 있는지를 지정해야 한다.
def queens( arguments ):
	if non-promising:
		report failure and return
	else if success:
		report answer and return
	else:
		visit children recursively
```



```
cols = [0] * (n+1)
# 매개변수 level은 현재 노드의 위치를 표현하고,
# 1번에서 level까지의 말이 어디에 놓였는지는
# 전역변수 배열 cols로 표현한다.

# cols[i] = j는 i번 말이 (i행, j열)에 놓였음을 의미한다.
# cols[1] : 1번 말이 놓인 열번호
# cols[2] : 2번 말이 놓인 열번호
# cols[level] : 1번 말부터 level 말까지 놓였음을 알 수 있으며 
# level번 말이 어디에 놓였는지 알 수 있다.

def queens( level ):
	if non-promising:
		report failure and return
	else if success:
		report answer and return
	else:
		visit children recursively
```

