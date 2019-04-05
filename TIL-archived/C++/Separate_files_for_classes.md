# Separate Files for Classes

## 1. Source & Header

__header file (.h)__ 은 함수 선언(프로토타입)과 변수 선언을 담고 있다. 

* __MyClass.h__ : MyClass 라는 새로운 클래스에 대한 템플릿과 한 개의 기본 생성자를 담고 있다.

```c++
#ifndef MYCLASS_H 
#define MYCLASS_H
class MyClass 
{
    public:
    	MyClass();
    protected:
    private:
};

#endif // MYCLASS_H
```



클래스와 메서드의 구현은 __source file (.cpp)__ 가 포함하고 있다. 

* __MyClass.cpp__ : 현재 빈 생성자를 포함하고 있다.

```c++
#include "MyClass.h"
MyClass::MyClass()
{
    // ctor
}
```





## 2. Scope Resolution Operator

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







출처: https://www.sololearn.com/Play/CPlusPlus

