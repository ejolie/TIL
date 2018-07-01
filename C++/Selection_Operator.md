# Selection Operator

## 1. #ifndef & #define

- __#ifndef__ : "if not defined"를 의미한다. `#ifndef MYCLASS_H` 와 `#define MYCLASS_H` 은 __MyClass__ header file 이 이미 정의되어 있지 않다면 이 파일을 정의하라고 프로그램에게 말해준다.
- __#endif__ : 위의 조건을 종료한다.

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





## 2. Pointers

object 의 멤버들에 접근하기 위해 __pointer__ 를 사용한다.

```c++
MyClass obj;
MyClass *ptr = $obj;
```

pointer (*ptr) 의 타입이 __MyClass__ 이며, 이것은 해당 타입을 가진 object (obj) 를 가리킨다.





## 3. Selection Operator

__arror member selection operator (->)__ 은 pointer 를 가지고 object의 멤버들에 접근하기 위해 사용된다.

```c++
MyClass obj;
MyClass *ptr = &obj;
ptr -> myPrint();
```





## 4. Summary

* __object__ 와 함께 : __dot__ member selection operator (.) 를 사용
* __pointer to the object__ 와 함께 : __arrow__ member selection operator (->) 를 사용 







출처: https://www.sololearn.com/Play/CPlusPlus

