# 내장함수

## 1. 수치 연산 함수

### abs(x)

* 숫자의 절댓값을 돌려줍니다. 인자는 정수 또는 실수입니다. 인자가 복소수면 그 크기가 반환됩니다.

  

### divmod(a, b)

* 두 개의 (복소수가 아닌) 숫자를 인자로 취하고 정수 나누기를 사용할 때의 몫과 나머지로 구성된 한 쌍의 숫자로 돌려줍니다.
* 첫 번째 인자를 두 번째 인자로 나눴을 때의 몫과 나머지를 Tuple 객체로 반환합니다.
  * 정수의 경우, 결과는 `(a // b, a % b)`와 같습니다.



### pow(x, y[, z])

* x의 y 거듭제곱을 돌려줍니다.
* z가 있는 경우,  x의 y거듭제곱의 모듈로 z를 돌려줍니다. (`pow(x, y) % z` 보다 더 빠르게 계산됩니다.)
* 두 개의 인자 형식인 `pow(x, y)`는 거듭제곱 연산자 `x ** y`를 사용하는 것과 동등합니다.



### round(number[, ndigits])

* _number_를 소수점 다음에 _ndigits_ 정밀도로 반올림한 값을 돌려줍니다. _ndigits_가 생략되거나 `None` 이면, 입력에 가장 가까운 정수를 돌려줍니다.



&nbsp;

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

* 반복 가능한 자료형(_iterable_)을 인자로 전달 받아 List(가변 시퀀스형)로 변환해 반환합니다.



### tuple([iterable])

* 반복 가능한 자료형(_iterable_)을 인자로 전달 받아 Tuple(불변 시퀀스형)로 변환해 반환합니다.



### set([iterable])

* 새 Set 객체를 돌려줍니다. 선택적으로 _iterable_ 에서 가져온 요소를 갖습니다. `set`은 내장 클래스입니다. 



### dict(**kwarg)

### dict(mapping, **kwarg)

### dict(iterable, **kwarg)

* 새 Dictionary를 만듭니다. `dict` 객체는 내장 클래스입니다.



### max(iterable, *[, key, default])

### max(arg1, arg2, *args[, key])

* 반복 가능한 자료형(_iterable_) 에서 가장 큰 항목이나 두 개 이상의 인자 중 가장 큰 것을 돌려줍니다.
* 여러 항목이 최댓값이면, 함수는 처음 만난 항목을 돌려줍니다. 
* 선택적 _key_ 인자가 있습니다. `list.sort()` 에 사용되는 것처럼 단일 인자 순서 함수를 지정합니다. 
* _default_ 인자는 제공된 _iterable_ 이 비어있는 경우 돌려줄 객체를 지정합니다. _iterable_이 비어 있고 `default` 가 제공되지 않으면 `ValueError`가 발생합니다.



### min(iterable, *[, key, default])

### min(arg1, arg2, *args[, key])

* 반복 가능한 자료형(_iterable_) 에서 가장 작은 항목이나 두 개 이상의 인자 중 가장 작은 것을 돌려줍니다.
* 여러 항목이 최솟값이면, 함수는 처음 만난 항목을 돌려줍니다. 
* 선택적 `key` 인자가 있습니다. `list.sort()` 에 사용되는 것처럼 단일 인자 순서 함수를 지정합니다. 
* `default` 인자는 제공된 _iterable_ 이 비어있는 경우 돌려줄 객체를 지정합니다. _iterable_이 비어 있고 `default` 가 제공되지 않으면 `ValueError`가 발생합니다.



### range(stop)

### range(start, stop[, step])

* `range`는 불변 시퀀스형입니다.



### slice(stop)

### slice(start, stop[, step])

* `range(start, stop, step)`에 의해 지정된 인덱스 세트를 나타내는 슬라이스 객체를 돌려줍니다.



### sorted(iterable, *, key=None, reverse=False)

* _iterable_의 항목들로 새로 정렬된 리스트를 돌려줍니다. 두 개의 선택적 인자가 있습니다.
* _key_ 는 하나의 인자를 받는 함수를 지정하는데, _iterable_의 각 요소들로부터 비교 키를 추출하는 데 사용됩니다. (예를 들어, `key = str.lower`) 기본값은 `None` 입니다 (요소를 직접 비교합니다).
* _reverse_ 는 논리값입니다. 기본값은 오름차순이며 `True`로 설정되면 내림차순입니다.
* 내장 `sorted()` 함수는 안정적(stable)임이 보장됩니다. 정렬은 같다고 비교되는 요소의 상대적 순서를 변경하지 않으면 안정적이라고 합니다. 



### reversed(seq)

* 역 이터레이터를 돌려줍니다.



### sum(iterable[, start])

* _start_ 및 _iterable_의 항목들을 왼쪽에서 오른쪽으로 합하고 합계를 돌려줍니다.
* _start_의 기본값은 `0` 입니다. _iterable_의 항목은 일반적으로 숫자이며 시작 값은 문자열이 될 수 없습니다.



### map(function, iterable, ...)

- 두 번째 인자인 _iterable_의 모든 항목에 _function_ 을 적용한 후 그 결과를 돌려주는 이터레이터(Map 객체)를 돌려줍니다.



### zip(*iterables)

* 각 _iterables_의 요소들을 모으는 이터레이터를 만듭니다. 
* Tuple의 이터레이터를 돌려주는데, _i_번째 Tuple은 각 인자로 전달된 시퀀스나 이터러블의 _i_번째 요소를 포함합니다.  즉, 동일 위치의 항목을 묶어 Tuple을 항목으로 구성하는 Zip 객체를 생성해 반환합니다.
* 이터레이터는 가장 짧은 입력 이터러블이 모두 소모되면 멈춥니다. 하나의 이터러블 인자를 사용하면, 1-Tuple의 이터레이터를 돌려줍니다. 인자가 없으면, 빈 이터레이터를 돌려줍니다.

* `zip()`을 `*` 연산자와 함께 쓰면 List를 unzip 할 수 있습니다.

```python
x = [1, 2, 3]
y = [4, 5, 6]
zipped = zip(x, y)
list(zipped)	# [(1, 4), (2, 5), (3, 6)]

x2, y2 = zip(*zip(x, y))
x == list(x2) and y == list(y2)	# True
```



&nbsp;

## 3. 변환 함수

### chr()

* 정수 형태의 유니코드 값을 인자로 전달받아 해당 코드의 문자를 반환합니다.
* `ord()` 의 반대입니다.

```python
chr(97)		# 'a'
chr(65)		# 'A'
chr(48)		# '0'
```



### ord(c)

* 문자를 인자로 전달 받아 해당 문자의 유니코드 값(10진 정수)을 반환합니다.

```python
ord('a')	# 97
ord('A')	# 65
ord('0')	# 48
```



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

* 인자로 전달된 숫자 형식의 문자열, 부동소수점 숫자를 정수로 변환합니다. 



### float([x])

- 인자로 전달된 숫자 형식의 문자열 또는 정수 x로부터 실수(부동소수점 숫자)로 변환한 값을 반환합니다.
- 인자가 문자열이면, 십진수를 포함해야 하고, 선택적으로 부호가 앞에 오며 공백으로 둘러싸일 수도 있습니다. 선택적 부호는 `+` 또는 `-` 일 수 있습니다. 

```python
float('+1.23')			# 1.23
float('		-12345\n')	# -12345.0
float('1e-003')			# 0.001
float('+1E6')			# 1000000.0
float('-Infinity')		# inf
```



### str(object='')

### str(object=b'', encoding='utf-8', errors='strict')

* _object_의 `str` 버전을 돌려줍니다. 
* `str`은 내장 문자열 클래스입니다.



&nbsp;

## 4. 기타

### dir([object])

* 인자가 없으면, 현재 지역 스코프에 있는 이름들의 리스트를 돌려줍니다. 인자가 있으면, 해당 객체에 유효한 어트리뷰트들의 리스트를 돌려줍니다.



### id(object)

* 객체의 "아이덴티티"를 돌려줍니다. 이것은 객체의 수명 동안 유일하고 바뀌지 않음이 보장되는 정수입니다. 수명이 겹치지 않는 두 개의 객체는 같은 `id()` 값을 가질 수 있습니다.



### type(object)

### type(name, bases, dict)

* 인자 하나의 경우, _object_ 형을 돌려줍니다. 반환 값은 형 객체이며 일반적으로 `object.__class__` 라고 돌려주는 것과 같은 객체입니다.



### input([prompt])

- _prompt_ 인자가 있으면, 끝에 개행 문자를 붙이지 않고 표준 출력에 씁니다.
- 그런 다음 함수는 입력에서 한 줄을 읽고, 문자열로 변환해서 (줄 끝의 줄 바꿈 문자를 제거한 뒤) 돌려줍니다. 



### repr(object)

* 객체의 인쇄 가능한 표현을 포함한 문자열을 돌려줍니다. 
* 클래스는 `__repr__()` 메서드를 정의하여 이 함수가 인스턴스에 대해 돌려주는 것을 제어할 수 있습니다.



### globals()

- 현재의 전역 심볼 테이블을 보여주는 Dictionary를 반환합니다. 이것은 항상 현재 모듈의 Dictionary입니다.
- 전역변수와 함수, 클래스의 정보를 포함합니다.



### locals()

- 현재의 지역 심볼 테이블을 보여주는 Dictionary를 갱신하고 돌려줍니다.
- 매개변수를 포함한 지역변수와 중첩 함수의 정보를 포함합니다.



### isinstance(object, classinfo)

- _object_ 인자가 _classinfo_ 인자 또는 그것의 (직접, 간접 혹은 가상) 서브 클래스의 인스턴스면 True를 리턴합니다.
- *classinfo* 가 형 객체들의 Tuple (또는 재귀적으로 이런 종류의 Tuple이 중첩된 Tuple) 이면, *object* 가 그 형 중 어느 하나의 인스턴스일 때 True을 돌려줍니다. *classinfo* 가 형이나, 형들의 Tuple이나, 이런 Tuple들의 Tuple이 아니면, `TypeError` 예외를 일으킵니다.



### issubclass(class, classinfo)

- *class* 가 *classinfo* 의 서브 클래스 (직접, 간접 또는 [가상](https://docs.python.org/ko/3/glossary.html#term-abstract-base-class))면 참을 돌려줍니다. 클래스는 그 자체의 서브 클래스로 간주합니다. 
- *classinfo* 는 클래스 객체의 튜플 일 수 있습니다. 이 경우 *classinfo* 의 모든 항목이 검사됩니다. 다른 모든 경우에는, `TypeError` 예외가 발생합니다.



### eval(expression, globals=None, locals=None)

- 실행 가능한 표현식의 문자열을 인자로 전달받아 해당 문자열의 표현식을 실행한 결과값을 반환하는 함수



### open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)

* _file_을 열고 해당 File 객체를 돌려줍니다. 파일을 열 수 없으면, `OSError`가 발생합니다.
* _file_ : 열고 싶은 파일의 (절대 혹은 상대적인)경로명
* _mode_ : 파일이 열리는 모드를 지정하는 선택적 문자열.
  * `r` : 읽기용 (기본값)
  * `w` : 쓰기용. 파일이 이미 존재하는 경우 파일을 먼저 자릅니다.
  * `x` : 독점적인 파일 만들기용. 이미 존재하는 경우 실패합니다.
  * `a` : 쓰기용. 파일이 이미 존재하는 경우 파일의 끝에 덧붙입니다.
  * `b` : 바이너리 모드
  * `t` : 텍스트 모드 (기본값)
  * `+` : 갱신(읽기 및 쓰기)용으로 디스크 파일을 엽니다.



&nbsp;

출처 : [SW Expert Academy] 파이썬 프로그래밍 기초(1) 파이썬의 기본 구조와 기초 문법 - 9. 내장함수, 파이썬 공식 문서 

