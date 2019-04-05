# 표준 모듈과 활용

## 1. 표준 모듈과 활용 

### 표준 모듈

각기 목적에 맞게 설계되어 있고 다양한 함수, 클래스 등을 제공하며, 별도의 추가 설치 과정 없이 import 문으로 로딩해 사용함



#### import 문과 모듈 로딩

```python
import math

print('math.radians(90) = {0}'.format(math.radians(90))
print('math.ceil(3.2) = {0}'.format(math.ceil(3.2))
print('math.floor(3.2) = {0}'.format(math.floor(3.2))
print('math.pi = {0}'.format(math.pi))
```



#### import ~ as ~ 문과 모듈 별칭의 사용

```python
import math as m

print('m.radians(90) = {0}'.format(m.radians(90))
print('m.ceil(3.2) = {0}'.format(m.ceil(3.2))
print('m.floor(3.2) = {0}'.format(m.floor(3.2))
print('m.pi = {0}'.format(m.pi))
```



#### from ~ import ~ 문을 이용한 선택적 로딩

```python
from math import *
from math import radius, ceil, floor, pi

print('radians(90) = {0}'.format(radians(90))
print('ceil(3.2) = {0}'.format(ceil(3.2))
print('floor(3.2) = {0}'.format(floor(3.2))
print('pi = {0}'.format(pi))
```



### sys 모듈

시스템과 관련된 정보에 접근하거나 명령행에서 전달된 명령행 매개변수로부터 인자 값을 읽어올 때 활용됨



```python
import sys

print('sys.argv => {0} {1}'.format(type(sys.argv), sys.argv))
# sys.argv : 리스트 타입, 명령행에서 python 명령에 전달된 인자들의 정보를 담고 있음

for i, val in enumerate(sys.argv): # Enumerate 객체로 변환 및 반복 실시
    print('sys.argv[{0}] => {1}'.format(i, val))
    # 인덱스는 변수 i에, 인자 내용은 변수 val에 담겨 출력
```



### random 모듈

난수(연속적인 임의의 수)를 생성하는 기능 제공



```python
from random import random, uniform, randrange, choice, choices, sample, shuffle

print('random() => {0}.format(random())')
# random 함수 : 0.0 <= N < 1.0 범위의 부동소수점 난수 N 반환

print('uniform({0}, {1}) => {2}'.format(1.0, 10.0, uniform(1.0, 10.0)))
# uniform 함수 : 저장된 범위 내의 부동소수점 난수 N 반환

start, stop, step = 1, 45, 2
print('randrange({0}, {1}) => {2}'.format(start, stop, randrange(start, stop)))
# randrange() 함수 : 정수형 난수 N 생성

print('randrange({0}) => {1}'.format(stop, randrange(stop)))
# start 정보 생략 시 0, step 정보 생략 시 1이 기본값

print('randrange({0}, {1}, {2}) => {3}'.format(start, stop, step, randrange(start, stop, step)))

data_list = [1, 2, 3, 4, 5]
print('choice({0}) => {1}'.format(data_list, choice(data_list)))
# choice() 함수 : 인자로 전달된 시퀀스 객체의 항목 중 임의 항목 반환

print('choices({0}) => {1}'.format(data_list, choices(data_list, k=2)))
# choices() 함수 : 인자로 전달된 시퀀스 객체의 항목 중 임의의 k개 반환, 복원 추출 기능을 가진 시뮬레이션 함수

print('sample({0}) => {1}'.format(data_list, sample(data_list, k=2)))
# sample() 함수 : 인자로 전달된 시퀀스 객체, 혹은 set 객체의 항목 중 임의의 k개 반환, 비복원 기능을 가진 시뮬레이션 함수

shuffle(data_list)
print('data_list => {0}'.format(data_list))
# shuffle() 함수 : 인자로 전달된 시퀀스 객체의 항목을 뒤섞는 함수, 반환값은 없고 원본 객체의 항목의 순서를 뒤섞음
```



### datetime 모듈

날짜와 시간 정보를 확인하고 조작하는 클래스, 함수 등을 제공함



```python
from datetime import datetime, timezone, timedelta

now = datetime.now() # 현재 지역의 날짜와 시각 정보를 가진 datetime 객체를 얻음
print('{0}-{1:02}-{2:02} {3:02}:{4:02}:{5:02}'.format(now.year, now.month, now.day, now.hour, now.minute, now.second))

fmt = '%Y{0} %m{1} %d{2} %H{3} %M{4} %S'
"""
%Y : 네 자리의 연도 정보
%m : 월 정보
%d : 일 정보
%H : 24시간 체계의 시간 정보
%m : 분 정보
%s : 초 정보
"""
print(now.strftime(fmt).format(*'년월일시분초'))
```



## 2. 서드파티 모듈 설치 및 활용

### 서드파티 모듈

다른 누군가에 의해 만들어져 배포되고 공유되는 모듈 



#### 서드파티 모듈 설치 및 제거 방법

```bash
pip install pytz
pip uninstall pytz
```



#### pytz 서드파티 모듈 사용법

```python
from datetime import datetime
from pytz import common_timezones, timezone, utc

# 타임존 정보 출력
for tz in list(common_timezones): 
""" 
common_timezones 객체를 리스트 객체로 반환해서 반복문을 수행
common_timezones : 타임존 정보 가짐
타임존 정보는 문자열로, 문자열을 모두 소문자로 변환함
"""
	if tz.lower().find('paris') >= 0:
        print(tz)

tz_utc = timezone(utc.zone)
tz_seoul = timezone('Asia/Seoul')
tz_pacific = timezone('US/Pacific')
tz_paris = timezone('Europe/Paris')

fmt = '%Y-%m-%d %H:%M:%S %Z%z'
"""
%Z : 타임존의 명칭
%z : UTC 기준시각과의 시간 차이
"""

# UTC 현재 시각
now_utc = datetime.now(tz_utc)
print(now_utc.strftime(fmt))

# Asia/Seoul 타임존
now_seoul = now_utc.astimezone(tz_seoul)
print(now_seoul.strftime(fmt))

# US/Pacific 타임존
now_pacific = now_seoul.astimezone(tz_pacific)
print(now_pacific.strftime(fmt))

# Europe/Paris 타임존
now_paris = now_pacific.astimezone(tz_paris)
print(now_paris.strftime(fmt))

```



## 3. 사용자 정의 모듈

* mod1.py : 실행의 목적 (파이썬 명령에 의해 실행)
* mod2.py : 라이브러리의 목적 (import 문에 의해 로딩)



### 모듈의 __ name __ 속성

* 실행 목적의 모듈 : __ name __ 속성에 '__ main __' 문자열 값이 들어가 있음
* 라이브러리 목적의 모듈 : __ name __ 속성에 모듈의 이름이 저장되어 있음



## 4. 사용자 정의 패키지

### 패키지 정의

* 폴더 생성 :  package_mycalc
  * __ init __.py
  * module_mycalc_1.py
  * module_mycalc_2.py

```python
__all__ = ['module_mycalc_1', 'module_mycalc_2']
# __all__ 속성에 패키지에 포함될 모듈 이름 저장
```



### 패키지 사용

`from package_mycalc import module_mycalc_1, module_mycalc_1`

`from package_mycalc import`



### 로또 번호 생성

```python
# lotto.py
import random

def input_start():
    start = 0
    try:
        start = int(input('로또 번호의 시작 번호를 입력하세요 (기본값: 1): '))
    except:
        start = 1
    finally:
        return start
   
def input_end():
    end = 0
    try:
        end = int(input('로또 번호의 끝 번호를 입력하세요 (기본값: 45): '))
    except:
        end = 45
    finally:
        return end
    
def input_count():
    count = 0
    try:
        count = int(input('로또 공의 개수를 입력하세요 (기본값: 6): '))
    except :
        count = 6
    finally:
        return count
    
def print_lotto(start, end, count):
	lotto = random.sample(range(start, end + 1, 1), count)
    print('행운의 로또 번호는 ', end='')
    for i, num in enumerate(sorted(lotto)):
        if i == len(lotto) - 1:
            print('{0} '.format(num), end='')
        else:
            print('{0}, '.format(num), end='')
    print('입니다.')

```



```python
# using_lotto.py
import lotto

start = lotto.input_start()
end = lotto.input_end()
count = lotto.input_count()

lotto.print_lotto(start, end, count)
```



출처 : [SW Expert Academy] 파이썬 프로그래밍 기초(2) 파이썬의 기본 응용 - 1. 모듈과 패키지