# 내장함수

## 1. 수치 연산 함수

### abs(x)

* 숫자의 절댓값을 돌려줍니다. 인자는 정수 또는 실수입니다. 인자가 복소수면 그 크기가 반환됩니다.



### divmod(a, b)

* 두 개의 (복소수가 아닌) 숫자를 인자로 취하고 정수 나누기를 사용할 때의 몫과 나머지로 구성된 한 쌍의 숫자로 돌려줍니다.
* 첫 번째 인자를 두 번째 인자로 나눴을 때의 몫과 나머지를 Tuple 객체로 반환합니다.
  * 정수의 경우, 결과는 `(a // b, a % b)`와 같습니다.



### pow()

* 첫 번째로 전달된 인자 값에 대해 두 번째로 전달된 인자 값으로 제곱한 결과를 반환하는 함수



## 2. 시퀀스형/반복 가능한 자료형을 다루는 함수

### len(s)

* 객체의 길이 (항목 수)를 돌려줍니다.
* 인자는 시퀀스(String, Bytes, Tuple, List, Range ..) 또는 컬렉션(Dictionary, Set, 또는 불변 집합) 일 수 있습니다.



### all(iterable)

* 반복 가능한 자료형(_iterable_)인 List, Tuple, Set, dictionary, 문자열 등을 인자로 전달합니다.
* 모든 요소가 True로 평가되면 (또는 iterable이 비어있으면) True를 반환하고, False로 평가되는 항목이 하나라도 있으면 False를 반환합니다.



### any(iterable)

* 반복 가능한 자료형(_iterable_)인 List, Tuple, Set, dictionary, 문자열 등을 인자로 전달합니다.
* 어느 하나라도 True로 평가되면 True를 반환하고 모든 요소가 False로 평가되거나 (또는 iterable이 비어있으면) False를 반환합니다.



### enumerate(iterable, start=0)

* _iterable_은 시퀀스, 이터레이터 또는 이터레이션을 지원하는 다른 객체여야 합니다.
* List, Tuple, 문자열과 같은 시퀀스형을 입력받아 index를 포함하는 Tuple 객체를 항목으로 구성하는 enumerate 객체를 반환합니다.
* `enumerate()` 에 의해 반환된 이터레이터의 `__next__()` 메서드는 카운트 (기본값 0을 갖는 _start_ 부터)와 _iterable_을 이터레이션 해서 얻어지는 값을 포함하는 Tuple을 돌려줍니다.

```python
seasons = ['Spring', 'Summer', 'Fall', 'Winter']

list(enumerate(seasons))
# [(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]

list(enumerate(seasons, start=1))
# [(1, 'Spring'), (2, 'Summer'), (3, 'Fall'), (4, 'Winter')]
```

 다음과 동등합니다

```python
def enumerate(sequence, start=0):
    n = start
    for elem in sequence:
        yield n, elem
        n += 1
```



### filter(function, iterable)

* _function_ 이 참을 돌려주는 _iterable_ 의 요소들로 이터레이터를 구축합니다.
* _iterable_ 은 시퀀스, 이터레이션을 지원하는 컨테이너 또는 이터레이터일 수 있습니다.
* _funcion_이 `None`이면, 항등함수가 가정됩니다. 즉, 거짓인 _iterable_의 모든 요소가 제거됩니다.

`filter(function, iterable)` 은 다음 제너레이터 표현식과 같습니다.

*  _function_이 `None`이 아닐 때 `(item for item in iterable if function(item))`
* _function_이 `None`일 때 `(item for item in iterable if item)`



### list([iterable])

* 가변 시퀀스형



### tuple(), set(), dict()

* 반복 가능한 자료형을 인자로 전달 받아 리스트, 튜플, 셋, 딕셔너리로 변환해 반환하는 함수들



### dict(**kwarg)

### dict(mapping, **kwarg)

### dict(iterable, **kwarg)

* 새 딕셔너리를 만듭니다. `dict` 객체는 딕셔너리 클래스입니다.



### map()

* 두 번째 인자로 반복 가능한 자료형을 전달 받아 자료형의 각 항목에 대해 첫 번째 인자로 전달 받은 함수를 적용한 결과를 맵 객체로 반환하는 함수



### max(iterable, *[, key, default])

### max(arg1, arg2, *args[, key])



### min(iterable, *[, key, default])

### min(arg1, arg2, *args[, key])

* 반복 가능한 자료형을 인자로 전달받아 항목 중 가장 큰 값, 가장 작은 값을 반환하는 함수들



### range()

* 첫 번째 인자로 전달된 시작 값, 두 번째 인자로 전달된 종료 값, 세 번째 인자로 전달된 증감치를 바탕으로 시퀀스형 객체를 생성하는 함수



### sorted()

* 반복 가능한 자료형을 인자로 전달받아 항목들로부터 정렬된 리스틀 생성해 반환하는 함수



### zip()

* 둘 이상의 반복 가능한 자료형을 인자로 전달받아, 동일 위치의 항목을 묶어 튜플을 항목으로 구성하는 zip 객체를 생성하는 함수



## 3. 변환 함수

### chr()

* 정수 형태의 유니코드 값을 인자로 전달받아 해당 코드의 문자를 반환합니다.
* `ord()` 의 반대입니다.

```python
chr(97)		# 'a'
chr(65)		# 'A'
chr(48)		# '0'
```



### ord()

> 문자를 인자로 전달 받아 유니코드 값(10진 정수)을 반환하는 함수



### bin(x)

* 정수를 `0b`가 앞에 붙은 이진 문자열로 반환합니다. 

```python
bin(3)		# 0b11
bin(-10)	# -0b1010
```



### bool([x])

* 논리값, 즉 `True` 또는 `False` 중 하나를 돌려줍니다. 



### hex()

* 10진 정수 값을 인자로 전달 받아 `0x` 접두사가 붙은 소문자 16진수 문자열을 변환합니다.

```python
hex(255)	# 0xff
hex(-42)	# -0x2a
```



### int([x])

### int(x, base=10)

> 인자로 전달된 숫자 형식의 문자열, 부동소수점 숫자를 정수로 변환한 값을 반환하는 함수



### float([x])

- 인자로 전잘된 숫자 형식의 문자열 또는 정수 x로부터 실수(부동소수점 숫자)로 변환한 값을 반환합니다.
- 인자가 문자열이면, 십진수를 포함해야 하고, 선택



### str()

> 인자로 전달된 객체에 대한 문자열 변환 값을 반환하는 함수



### dir()

> 인자로 전달된 객체가 가지고 있는 변수, 메서드와 같은 속성 정보를 리스트 객체로 반환, 인자를 전달하지 않고 호출하면 현재 지역 스코프에 대한 정보를 리스트 객체로 반환



### globals()

* 현재의 전역 심볼 테이블을 보여주는 딕셔너리를 반환하는 함수. 전역변수와 함수, 클래스의 정보 포함



### locals()

* 현재의 지역 심볼 테이블을 보여주는 딕셔너리를 반환하는 함수. 매개변수를 포함한 지역변수와 중첩함수의 정보 포함



### isinstance()

* 첫 번째 인자로 전달된 객체가 두 번째 인자로 전달된 클래스의 인스턴스인지에 대한 여부를 True/False로 반환하는 함수



### issubclass()

* 첫 번째 인자로 전달된 클래스가 두 번째 인자로 전달된 클래스의 서브 클래스인지에 대한 여부를 True/False로 반환하는 함수



### eval(expression, globals=None, locals=None)

* 실행 가능한 표현식의 문자열을 인자로 전달받아 해당 문자열의 표현식을 실행한 결과값을 반환하는 함수



### ascii(object)





## 4. 기타

### dir([object])

* 인자가 없으면, 현재 지역 스코프에 있는 이름들의 리스트를 돌려줍니다. 인자가 있으면, 해당 객체에 유효한 어트리뷰트들의 리스트를 돌려줍니다.



### id(object)

* 객체의 "아이덴티티"를 돌려줍니다. 이것은 객체의 수명 동안 유일하고 바뀌지 않음이 보장되는 정수입니다. 수명이 겹치지 않는 두 개의 객체는 같은 `id()` 값을 가질 수 있습니다.



### input([prompt])

- _prompt_ 인자가 있으면, 끝에 개행 문자를 붙이지 않고 표준 출력에 씁니다.
- 그런 다음 함수는 입력에서 한 줄을 읽고, 문자열로 변환해서 (줄 끝의 줄 바꿈 문자를 제거한 뒤) 돌려줍니다. 




출처 : [SW Expert Academy] 파이썬 프로그래밍 기초(1) 파이썬의 기본 구조와 기초 문법 - 9. 내장함수

