 # Graph

### 1) 그래프 순회(Graph Traversal)

* 순회(traversal)
  * 그래프의 모든 노드를 방문하는 일
* 대표적 두 가지 방법
  * BFS(Breadth-First Search, 너비우선순회)
  * DFS(Depth-First Search, 깊이우선순회)



### 2) 너비우선순회 (BFS)

다음 순서로 노드를 방문한다.

* L0 = {s}, 여기서 s는 출발 노드

* L1 = L0의 모든 이웃 노드들 (s와 거리가 1인 노드)

* L2  = L1의 이웃들 중 L0에 속하지 않는 노드들 (s로 부터 거리가 2인 노드)

  ...

* Li = Li-1의 이웃들 중 Li-2에 속하지 않는 노드들



### 3) 큐를 이용한 BFS

1. Check(방문했음을 표시) the start node 

2. Insert the start node into the queue

3. While the queue is not empty do

   ​	Remove a node v from queue

   ​	for each unchecked neighbour w of v do

   ​		check and insert w into the queue

   

```pseudocode
BFS(G, s)
{
    Q = 
    enqueue(Q, s)
    while Q =/= 0 do
    	u = dequeue(Q)
    	for each v adjacent to u do
    		if v is unvisited then
    			mark                                             
}
```

