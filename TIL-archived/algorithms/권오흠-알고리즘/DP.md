# Dynamic Programming

## Fibonacci Numbers

### Recursion

많은 계산이 중복됨

```c
int fib(int n)
{
    if (n == 1 || n == 2)
        return 1;
    else
        return fib(n-2) + fib(n-1);
}
```



### Memoization

```c
int fib(int n)
{
    if (n == 1 || n == 2)
        return 1;
    else if (f[n] > -1) // 배열 f가 -1으로 초기화되어 있다고 가정
        return f[n];
    else {
        f[n] = fib(n-2) + fib(n-1); // 중간 계산 결과를 caching
        return f[n];
    }
}
```



### Bottom-up

```c
int fib(int n)
{
    f[1] = f[2] = 1;
    for (int i = 3; i <= n; i++)
        f[n] = f[n-1] + f[n-2];
   	return f[n;]
}
```



## 이항 계수(Binomial Coefficient)

nCk = ...

n개 중에서 k개를 선택하는 경우의 수

### Recursion

```c
int binomial(int n, int k)
{
    if (n == k || k == 0)
        return 1;
    else
        return binomial(n-1, k) + binomial(n-1, k-1);
}
```



### Memoization

```c
int binomial(int n, int k)
{
    if (n == k || k == 0)
        return 1;
    else if (binom[n][k] > -1) // 배열 binom이 -1로 초기화되어 있다고 가정
        return binom[n][k];
    else {
        binom[n][k] = binomial(n-1, k) + binomial(n-1, k-1);
        return binom[n][k];
    }
}
```



### Bottom-up

2차원 배열이므로 어디가 bottom인지 고민해야 함

순환식의 오른쪽의 값이 왼쪽의 값보다 먼저 계산되어져 있다면 bottom-up 방식이다.

```c
binom[i][j] = binom[i-1][j-1] + binom[i-1][j];
```

대각선 왼쪽 방향과 바로 위쪽 방향의 값에 대해 dependancy를 갖고 있음



```c
int binomial(int n, int k)
{
    for (int i = 0; i <= n; i++) {
        for (int j = 0; j <= k && j <= i; j++) {
            if (k == 0 || n == k)
                binom[i][j] = 1;
           	else
                binom[i][j] = binom[i-1][j-1] + binom[i-1][j];
        }
    }
}
```



### Memoization vs. DP

- **순환식** 의 값을 계산하는 기법들이다.
- 둘 다 동적 계획법의 일종으로 보기도 한다.
- Memoization : top-down 방식이며, **실제로 필요한 subproblem만** 을 푼다.
- 동적 계획법 : bottom-up 방식이며, recursion에 수반되는 overhead가 없다.