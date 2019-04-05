# Pass by Reference with Pointers

## 1. Function Arguments

함수가 호출되었을 때 함수로 argument를 전달하는 방법에는 두 가지가 존재한다.

- __By Value__ : argument의 실제 value를 받아서 함수의 formal parameter에 복사한다. 함수 내에서 원래의 argument에 아무런 영향도 주지 않은 채, parameter로 받아온 값에 변화를 줄 수 있다.
- __By Reference__ : argument의 reference를 formal parameter에 복사한다. 함수내에서 reference는 실제 argument에 접근하기 위해 사용된다. 즉, parameter의 값을 바꾸면 원래의 argument에 영향을 준다.





## 2. Passing by Value

기본적으로 C++에서는 argument를 전달하기 위해 __call by value__ 가 사용된다. pass by value를 할 때, argument의 값이 복사되어 함수로 전달된다.

```c++
void myFunc(int x) {
    x = 100;
}

int main() {
    int var = 20;
    myFunc(var);
    cout << var;
}
// Output: 20
```





## 3. Passing by Reference

pass by reference는 formal parameter에 argument의 주소를 복사한다. reference를 통해 값을 전달하기 위해, __argument pointers__ 가 다른 값들처럼 함수로 전달된다.

```c++
void myFunc(int *x) {
    *x = 100;
}

int main() {
    int var = 20;
    myFunc(&var);
    cout << var;
}
// Output: 100
```

__address_of 연산자 &__ 를 사용하여 myFunc 함수에 var의 주소를 전달하였다. myFunc 함수는 parameter로 pointer를 취한다고 선언되어 있다. (__* 연산자__ 를 사용)





## Summary

일반적으로 pass by value가 더 빠르고 효과적이다. pass by reference는 함수가 argument를 변경해야 할 때 혹은 data type을 넘겨주어야 할 때 사용하는데, 이는 더 많은 메모리를 사용하며 값을 복사하는 데에도 비용이 많이 든다. 







출처: https://www.sololearn.com/Play/CPlusPlus

