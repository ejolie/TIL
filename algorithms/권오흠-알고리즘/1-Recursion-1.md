# 1. 순환 (Recursion)

## 1-1. Recursion의 개념과 기본 예제들

### What is Recursion?

* 자기 자신을 호출하는 함수

```python
def func():
    ...
    func()
    ...
```



### What will happen?

* code 01

```python
def func():
    print('Hello')
    func()

func()
```

이 코드는 무한루프에 빠져 끝나지 않는다.



### Recursion은 항상 무한루프에 빠질까?

그렇지 않다. Recursion이 항상 무한루프에 빠지는 것은 아니다.

* code 02

```python
def func(k):
    if k <= 0:		# k가 음수이면 실행 종료
        return
   	else:
        print('Hello')
        func(k-1)	# k-1를 매개변수로 넘겨주면서 자신을 호출
        
func(4)
```



* 결과

```python
# func(4)		종료 순서
# -> func(3)		5
# -> func(2)		4
# -> func(1)		3
# -> func(0)		2
# -> return			1
Hello
Hello
Hello
Hello
```

결과적으로 Hello가 4번만 출력된 뒤 종료된다.



### 무한루프에 빠지지 않으려면?

#### 1) Base case

**적어도 하나의 Recursion에 빠지지 않는 경우**가 존재해야 한다.

#### 2) Recursive case

Recursion을 반복하다보면 **결국 Base case로 수렴해야 한다.** 



* code 03

```python
# 이 함수의 mission은 0~n까지의 합을 구하는 것이다.
def func(n):
    if n == 0:	# n-0이라면 합은 0이다.
        return 0
    else:		# n이 0보다 크다면 0에서 n까지의 합은
   				# 0에서 n-1까지의 합에 n을 더한 것이다.
        return n + func(n-1)
    
print(func(4))
```



* 결과

```python
10
# func(4)								종료 순서
# -> return 4 + func(3)		결과: 10		5
# -> return 3 + func(2)		결과: 6		4
# -> return 2 + func(1)		결과: 3		3
# -> return 1 + func(0)		결과: 1		2
# -> return 0				결과: 0		1
```



### 순환함수와 수학적 귀납법

* 정리 : `func(n)` 은 음이 아닌 정수 `n` 에 대해서 `0` 에서 `n` 까지의 합을 올바로 계산한다.
* 증명
  1. `n=0` 인 경우 :  `n=0` 인 경우 `0` 을 반환한다. 올바르다.
  2. 임의의 양의 정수 `k` 에 대해서 `n<k` 인 경우 `0` 에서 `n` 까지의 합을 올바르게 계산하여 반환한다고 가정하자.
  3. `n=k` 인 경우를 고려해보자. `func` 은 먼저 `func(k-1)` 을 호출하는데 2번의 가정에 의해서 `0` 에서 `k-1` 까지의 합이 올바로 계산되어 반환된다. 함수 `func` 은 그  값에 `n` 을 더해서 반환한다. 따라서 함수 `func` 은 `0` 에서 `k` 까지의 합을 올바로 계산하여 반환한다.



### Factorial : n!

```python
0! = 1				# n = 0
n! = n * (n-1)!		# n > 0
```



* factorial 함수

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
```



* 결과

```python
24
# factorial(4)								종료 순서
# -> return 4 * factorial(3)		결과: 24		5
# -> return 3 * factorial(2)		결과: 6		4
# -> return 2 * factorial(1)		결과: 2		3
# -> return 1 * factorial(0)		결과: 1		2
# -> return 1						결과: 1		1
```



### 순환함수와 수학적귀납법

* 정리 : `factorial(n)` 은 음이 아닌 정수 `n`에 대해서 `n!` 을 올바로 계산한다.
* 증명
  1. `n=0` 경우 : `n=0` 인 경우 `1` 을 반환한다. 올바르다.
  2. 임의의 양의 정수 `k` 에 대해서 `n<k` 인 경우 `n!` 을 올바르게 계산한다고 가정하자.
  3. `n=k` 인 경우를 고려해보자. `factorial` 은 먼저 `factorial(k-1)` 을 호출하는데 2번의 가정에 의해서 `(k-1)!` 이 올바로 계산되어 반환된다. 따라서 함수 `factorial` 은 `k*(k-1)! = k!` 을 반환한다.



### x^n

```python
x^0 = 1				# n = 0
x^n = x * x^(n-1)	# n > 0
```



* power 함수

```python
def power(x, n):
    if n == 0:
        return 1
    else:
        return x * power(x, n-1)
```



### Fibonacci Number

```python
f0 = 0
f1 = 1
fn = fn-1 + fn-2	# n > 1
```



* fibonacci 함수

```python
def fibonacci(n):
    if n < 2:		# n은 음수가 아니라고 가정
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
```



### 최대공약수 : Euclid Method

* `m >= n` 인 두 양의 정수 `m` 과 `n` 에 대해서 `m` 이 `n` 의 배수이면 `gcd(m, n) = n` 이고,
* 그렇지 않으면 `gcd(m, n) = gcd(n, m%n)` 이다.

```python
def gcd(m, n):
    if m < n:
        m, n = n, m		# swap m and n for m >= n
    if m % n == 0:
        return n
    else:
        return gcd(n, m%n)
```



### Euclid Method : 좀더 단순한 버전

```python
gcd(p,q) = p			# if q = 0
		 = gcd(q, p%q)	# otherwise
```

```python
def gcd(p, q):
    if q == 0:
        return p
    else:
        return gcd(q, p%q)
```