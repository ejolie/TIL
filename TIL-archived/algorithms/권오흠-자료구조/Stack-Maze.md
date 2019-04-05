# Stack

## Maze

### 미로찾기

* 이미 방문한 위치에는 표시를 해서 무한루프를 방지한다.
* 현재 위치에서 일정한 규칙으로 다음 위치로 이동한다.
  * 북, 동, 남, 서의 기준으로 검사하여
  * 그 방향으로 갈 수 있으면, 즉 **아직 안 가본 위치**면서 **벽이 아니면** 그 방향으로 간다.
* 아무 방향으로도 갈 수 없으면 그 위치에 오기 직전 위치로 되돌아 간다.



### 알고리즘

1. 현재 위치는 출발점 (0, 0)이다.
2. 다음을 반복한다.
   1. 현재 위치에 방문했다는 표시를 한다.
   2. 현재 위치가 출구라면 종료한다.
   3. 현재 위치에서 북, 동, 남, 서 4방향에 대해서 순서대로
      1. 그 방향으로 이동할 수 있는지(즉 벽이 아니고, 미로의 외부도 아니고, 이미 방문한 위치도 아닌지) 검사한다.
      2. 만약 갈 수 있으면 그 방향으로 이동한다.
   4. 만약 3번에서 4방향 중 어느 쪽으로도 가지 못했다면 **현재 위치에 도달하기 직전 위치로 돌아간다.** *(만약 돌아갈 위치가 없다면 원래 길이 없는 미로이다.)*



### 스택의 사용

* 스택의 top에는 항상 직전 위치가 저장되어 있음



1. 현재 위치는 출발점 (0, 0)이다.
2. 다음을 반복한다.
   1. 현재 위치에 방문했따는 표시를 한다.
   2. 현재 위치가 출구라면 종료한다.
   3. 현재 위치에서 북, 동, 남, 서 4방향에 대해서 순서대로
      1. 그 방향으로 이동할 수 있는지(즉 벽이 아니고, 미로의 외부도 아니고, 이미 방문한 위치도 아닌지) 검사한다.
      2. 만약 갈 수 있으면 **현재 위치를 스택에 push하고** 그 방향으로 이동한다.
   4. 만약 3번에서 4방향 중 어느 쪽으로도 가지 못했다면 **스택에서 pop한 후 그 위치로 돌아간다.** *(만약 돌아갈 위치가 없다면 원래 길이 없는 미로이다.)* 



### maze.py

```python
MAX = 100
PATH = 0		# 지나갈 수 있는 위치
WALL = 1		# 지나갈 수 없는 위치
VISITED = 2		# 이미 방문한 위치
BACKTRACKED = 3	# 방문했다가 되돌아 나온 위치

# 북,동,남,서 방향으로 한 칸 이동할 때 x좌표, y좌표 변화량
maze = [[0] * MAX for _ in range(MAX)]

def movable(X, Y, dir):
    if X < 0 or X > n-1 or Y < 0 or Y > n-1:
        return False
    elif maze[X][Y] == WALL or maze[X][Y] == 2:
        return False
    
def move_to(curX, curY, dir):
    delta = [[-1,0], [0,1], [1,0], [0,-1]]	
    X = curX + delta[dir][0]
    Y = curY + delta[dir][1]
    return X, Y

def findPath(maze):
    stack = []			# 위치를 저장할 스택
    curX, curY = 0, 0	# 항상 현재 위치를 표현

    while True:
        maze[curX][curY] = VISITED		# 현재 위치를 방문했다고 표시한다.
        if curX == n-1 and curY == n-1:	# 현재 위치가 출구라면
            print('Found the path.')
            break
        forwarded = False		# 4방향 중 한 곳으로 전진하는데 성공했는지를 표시
        for dir in range(4):	# 0:N, 1:E, 2:S, 3:W
            if movable(curX, curY, dir): # dir 방향으로 이동할 수 있는지 검사
                stack.push(curX, curY)	# 현재 위치를 stack에 push
                curX, curY = move_to(curX, curY, dir)
                # dir 방향으로 한 칸 이동한 취지를 새로운 cur라고 한다.
                forwarded = true
                break
        if !forwarded:			# 4방향 중 어느 곳으로도 가지 못했다면
            maze[curX][curY] = BACTRACKED	# 왔다가 되돌아간 위치임을 표시
            if stack == []:		# 되돌아갈 위치가 없다면 원래 길이 없는 미로
                print('No path exists.')
                break
            curX, curY = stack.pop()	# 스택에서 pop한 위치가 현재 위치(cur)가 된다.
```



* 스택에 위치 대신 방향(방향을 나타내는 하나의 정수)을 저장하면 어떨까?
  * 예를 들어, 내가 이 위치에 올 때 동쪽 방향으로 왔다면 되돌아갈 위치는 서쪽이다.



### 알고리즘의 개선

```python
stack = s		# 위치 대신 정수들을 저장하는 스택 사용
init_dir = 0 	# 어떤 위치에 도착했을 때 처음으로 시도해 볼 이동 방향

while True:
    maze[curX][curY] = VISITED
    if curX == n-1 and curY == n-1:	# 현재 위치가 출구라면
        print('Found the path.')
        break
        forwarded = False
        for dir in range(0, 4):
            dir = init_dir
            if movable(curX, curY, dir):
                stack.push(dir)		# 스택은 현재 위치 대신 이동하는 방향을 push
                forwarded = True
                init_dir = 0		# 처음 방문하는 위치에서는 항상 0번 방향부터 시도
              	break
            if !forwarded:	# nowhere to go forward
                maze[curX][curY] = BACKTRACKED	# backtracked
                if stack == []:
                    print('No path exists.')
                    break
                    
                d = stack.pop()
                curX, curY = move_to(curX, curY, (d + 2) % 4)
                # 이전 위치에서 지금 위치로 올 때 d 방향으로 이동했다면
                # 되돌아 가기 위해선 (d + 2) % 4 방향으로 이동하면 된다.
                init_dir = d + 1
                # 되돌아 간 위치에서는 d + 1 번 방향부터 시도해보면 된다.
```

