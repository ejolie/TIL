# 2차원 List

## 1. 2차원 List 구조

* 1차원 List를 묶어놓은 List
* 2차원 이상의 다차원 List는 차원에 따라 index를 선언
* 2차원 List의 선언: 세로길이(행의 개수), 가로길이(열의 개수)를 필요로 함

__Tip__ 파이썬에서는 데이터 초기화를 통해 변수선언과 초기화가 가능함



## 2. List 초기화

```python
arr = [0, 0, 0, 0, 0]
arr = [0] * 5 # [0, 0, 0, 0]
arr = [i for i in ragnge(2, 9) if i%2 == 0] # [2, 4, 6, 8]

brr = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
brr = [[1, 2, 3]] * 3 # [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
brr = [[1, 2, 3] for i in range(3)] # [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
brr = [[i, j] for i in range(3) for j in range(2)]
# [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1]]
```



## 3. 2차원 List 입력 받기

```
3 4	
0 1 0 0
0 0 0 0
0 0 1 0
```

* 첫째 줄에 n행 m열
* 둘째 줄부터 n*m의 행렬 데이터가 주어질 경우 입력을 받는 방법

```python
# method 1
n, m = map(int, input().split())
mylist = [0 for _ in range(n)] # mylist = [0] * n
for i in range(n):
    mylist[i] = list(map(int, input().split()))
    
# method 2
n, m = map(int, input().split())
mylist = []
for i in range(n):
    mylist.append(list(map(int, input().split())))

# method 3
n, m = map(int, input().split())
mylist = [list(map(int, input().split())) for _ in range(n)]
```



## 4. 2차원 List에서 데이터의 위치 찾기

* 주어진 데이터에서 1이 입력된 [행, 열]의 위치 찾기

```python
# method 1
n, m = map(int, input().split())
newlist = []
mylist = [0 for _ in range(n)]
for i in range(n):
    mylist[i] = list(map(int, input().split()))
    for j in range(n):
        if mylist[i][j] == 1:
            newlist.append([i, j])
            
# method 2
n, m = map(int, input().split())
mylist = [list(map(int, input().split())) for _ in range(n)]
newlist = [(i, j) for i in range(n) for j in range(m) if mylist[i][j] == 1]
```



## 5. 2차원 List의 순회

* List 순회 : n x m List의 n * m개의 모든 원소를 빠짐없이 조사하는 방법

#### 행 우선 순회

List의 행을 우선으로 List의 원소를 조사하는 방법

```python
arr = [[0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11]]
# i : 행의 좌표, n = len(arr)
# j : 열의 좌표, m = len(arr[0])

for i in range(len(arr)):
    for j in range(len(arr[i]))
    	arr[i][j] # 필요한 연산 수행
```



#### 열 우선 순회

List의 열을 우선으로 List의 원소를 조사하는 방법

```python
arr = [[0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11]]
# i : 행의 좌표, n = len(arr)
# j : 열의 좌표, m = len(arr[0])

for j in range(len(arr[0])):
    for i in range(len(arr))
    	arr[i][j] # 필요한 연산 수행
```



#### 지그재그 순회

List의 행을 좌우로 List의 원소를 조사하는 방법

```python
arr = [[0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11]]
# i : 행의 좌표, n = len(arr)
# j : 열의 좌표, m = len(arr[0])

for i in range(len(arr)):
    for j in range(len(arr[0]))
    	arr[i][j + (m-1-2*j)*(i%2)] # 필요한 연산 수행
```



## 6. 델타를 이용한 2차 List 탐색

* 2차 List의 한 좌표에서 네 방향의 인접 List 요소를 탐색할 때 사용하는 방법
* 델타 값은 한 좌표에서 네 방향의 좌표와 x, y의 차이를 저장한 List로 구현
* 델타 값을 이용하여 특정 원소의 상하좌우에 위치한 원소에 접근할 수 있음

__Tip__ 이차원 List의 가장자리 원소들은 상화좌우 네 방향에 원소가 존재하지 않을 경우가 있으므로, index를 체크하거나 index의 범위를 제한해야 함

```python
# arr[0...n-1][0...n-1] : 2차원 List
dx = [0, 0, -1, 1] #상하좌우
dy = [-1, 1, 0, 0]

for x in range(len(arr)):
    for y in range(len(arr[x])):
        for i in range(4):
            testX = x + dx[i]
            testY = y + dy[i]
            print(arr[testX][testY])
```



## 7. 전치 행렬

#### 전치 행렬

* 행과 열의 값이 반대인 행렬을 의미

```python
# i : 행의 좌표, len(arr)
# j : 열의 좌표, len(arr[0])
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] # 3*3 행렬

for i in range(3):
    for j in range(3):
        if i < j:
            arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
```

__Tip__ 모든 좌표에 대하여 행과 열의 값을 바꾸게 되면 본래의 모습으로 되돌아오기 때문에 이를 주의해야 함



#### zip(iterable *)

동일한 개수로 이루어진 자료형들을 묶어 주는 역할을 하는 함수

```python
alpha = ['a', 'b', 'c']
index = [1, 2, 3]
alph_index = list(zip(alpha, index))
print(alph_index) # [('a', 1), ('b', 2), ('c', 3)]

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(list(zip(*arr))) # [(1, 4, 7), (2, 5, 8), (3, 6, 9)]
```

__Tip__ `zip(*matrix)` : 전치 행렬



출처 : [SW Expert Academy] 파이썬 SW 문제해결 기본 - LIST2