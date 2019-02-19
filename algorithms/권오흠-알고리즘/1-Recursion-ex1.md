# 1. 순환 (Recursion)

## Ex1. 미로찾기 (Maze)

`NxN` 2차원 배열

흰색 : pathway, 파란색 : wall, 입구 : (0, 0), 출구 : (n-1, n-1)



### Recursive Thinking

현재 위치에서 출구까지 가는 경로가 있으려면 

1. 현재 위치가 출구이거나 혹은
2. 이웃한 셀(최대 4개)들 중 하나에서 **현재 위치를 지나지 않고** 출구까지 가는 경로가 있거나



### 미로찾기 (Decision Problem)

* Decision Problem : 답이 yes or no인 문제

```
def findPath(x, y)
    if (x, y) is the exit
    	return true
    else:
        for each neighbouring cell (x', y') of (x, y) do
        # 이웃한 각 셀에 대해, 그 셀이 벽이 아니라 통로라면, 
        # 출구까지 가는 길이 있는지 검사
        	if (x', y') is on the pathway	
        		if findPath(x', y')
        			return true
        return false
```



*무한루프에 빠지지 않는가?* 확인한다.

* (x', y')로 findPath를 호출했는데 (x, y)가 다시 인접한 셀이 된다. 무한으로 이 작업을 반복하게 된다.

이것을 방지하기 위해선? 



* version 1

```
def findPath(x, y)
    if (x, y) is the exit
    	return true
    else:
   		mark (x, y) as a visited cell
        for each neighbouring cell (x', y') of (x, y) do
        	if (x', y') is on the pathway and not visited 	
        		if findPath(x', y')
        			return true
        return false
```



* version 2

```
def findPath(x, y)
    if (x, y) is either on the wall or a visited cell
    	return false
    else if (x, y) is the exit:
    	return true
    else:
    	mark (x, y) as a visited cell
        for each neighbouring cell (x', y') of (x, y) do
        	if findPath(x', y')
        		return true
        return false
```

Recursion이 호출되는 횟수는 더 많아지지만 코드는 간결해진다.



### Maze

```python
maze = [
    [0,0,0,0,0,0,0,1],
	[0,1,1,0,1,1,0,1],
    [0,0,0,1,0,0,0,1],
    [0,1,0,0,1,1,0,0],
    [0,1,1,1,0,0,1,1],
    [0,1,0,0,0,1,0,1],
    [0,0,0,1,0,0,0,1],
    [0,1,1,1,0,1,0,0],
]

PATHWAY_COLOUR = 0
WALL_COLOUR = 1
BLOCKED_COLOUR = 2	# visited이며 출구까지의 경로상에 있지 않음이 밝혀진 cell
PATH_COLOR = 3		# visited이며 아직 출구로 가는 경로가 될 가능성이 있는 cell

def findMazePath(x, y):	# 출발점
    if x < 0 or y < 0 or x >= N or y >= N:	# edge case
        return false
    elif maze[x][y] != PATHWAY_COLOUR:		# visited(green, red) or wall(blue)
        return false
    elif x == N-1 and y == N-1:				# finish point
        maze[x][y] = PATH_COLOUR			# mark visited(green)
        return true
    else:
        maze[x][y] = PATH_COLOUR			# mark visited(green)
        if findMazePath(x-1, y) or findMazePath(x, y+1) or findMazePath(x+1, y) or findMazePath(x, y-1):
            return true
       	maze[x][y] = BLOCKED_COLOUR;		# mark dead end
        return false
    
findMazePath(0, 0)
```

