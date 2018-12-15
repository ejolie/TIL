# Pointers

앞선 챕터에서, __변수__는 그것의 이름(indentifer)을 통해 접근할 수 있는 컴퓨터 메모리 상의 주소로 설명되어 왔다. 따라서, 프로그램은 메모리 상에서 해당 데이터의 physical address에 대해 신경쓸 필요가 없게 된다. 왜냐하면 어떤 변수를 참조할 필요가 있을 때마다 identifier를 사용하면 되기 때문이다. 

C++ 프로그램에서 컴퓨터의 메모리는, 하나 당 1바이트의 사이즈를 가지고 있으며 unique address를 지닌 메모리 셀들의 연속과도 같다. 이러한 single-byte 메모리 셀은 consecutive address를 지닌 메모리 셀들을 차지하는 1바이트보다 더 큰 data representations을 만드는 방식으로 정렬된다. 

이러한 방식으로, 각 메모리 셀은 각자가 지닌 unique address에 의해 메모리 상에 쉽게 위치한다. 예를 들어, 1776이라는 주소를 지닌 메모리 셀은 항상 1775라는 주소를 지닌 셀 직후에 위치하며 1777의 주소를 지닌 셀보다 앞에 위치한다. 

변수가 선언될 때, 변수의 값을 저장하는 공간은 메모리 상에 특정 주소를 부여 받는다. 일반적으로, C++ 프로그램은 변수들이 저장되는 메모리 주소를 직접 결정하지 않는다. 다행히도, 이러한 일은 프로그램이 실행되는 환경에 떠맡겨진다. 일반적으로, 런타임 중에 특정 메모리 주소를 결정하는 것은 운영체제이다. 하지만, 만약 프로그램이 특정 위치에 놓인 데이터 셀에 접근하기 위해 직접 런타임 중에 변수의 주소를 얻을 수 있다면 유용할 것이다. 



## 1. Address-of operator (&)

__address-of operator &__ 를 변수 이름 앞에 붙이면 변수의 주소를 얻을 수 있다. 예를 들어,

```c++
foo = &myvar;
```

이렇게 하면 _foo_ 에게 _myvar_ 이라는 변수의 주소를 할당하게 된다. &의 사용을 통해 _myvar_ 의 값을 _foo_ 에게 부여할 수는 없지만 그 변수의 주소를 부여하는 것이다.

_foo_ 와 같이 다른 변수의 주소를 저장하는 변수를 C++에서는 __pointer__ 라고 부른다. 





## 2. Dereference operator (*)

source file (.cpp)에 있는 __double colon__ 은 __scope resolution operator__ 라고 불리며 생성자 정의에 사용된다.

```c++
#include "MyClass.h"
MyClass::MyClass()
{
    // ctor
}
```

scope resolution operator 은 이미 선언된 특정 클래스의 멤버 함수를 정의하기 위해 사용된다. header file에서 생성자의 프로토타입을 선언했던 것을 상기하자.

따라서, 기본적으로 __MyClass::MyClass()__ 는 __MyClass()__ 멤버 함수를 의미하며, 이 경우에는 __MyClass__ 클래스의 생성자를 의미한다.



main 함수에 우리가 정의한 클래스를 사용하기 위해서는, header file (.h)을 포함시켜야 한다.

```c++
#include <iostream>
#include "MyClass.h"
using namespace std;

int main() {
    MyClass obj;
}
```

* __Header file__ : declares "what" a class (or whatever is being implemented) will do
* __Source file__ : defines "how" it will perform those features







출처: http://www.cplusplus.com/doc/tutorial/pointers/
