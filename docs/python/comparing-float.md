2019년 1월 9일 일요일

# 파이썬 실수 비교 {docsify-ignore-all}

파이썬은 실수를 부동 소수점 방식으로 표현하기 때문에 실수를 정확히 표현할 수 없습니다. 이로 인해 파이썬에서 float 타입 실수끼리 값을 비교해보면 원하는 값을 얻지 못하는 경우가 있습니다(Floating point rounding error). 


```python
print(0.1 + 0.2 == 0.3) # False
print(0.1 * 3 == 0.3)   # False
```
&nbsp;
이를 해결하기 위해 세 가지 방법을 사용할 수 있습니다.

&nbsp;
## 1. 절댓값 비교
```python
abs(a-b) <= 1e-10 # True
```

&nbsp;
## 2. float epsilon을 이용해 절댓값 비교
```python
import sys
abs(a-b) <= sys.float_info.epsilon # True
```

&nbsp;
## 3. math 모듈을 통해 근사한 값인지 비교
```python
import math
math.isclose(a, b) # True
```

&nbsp;
