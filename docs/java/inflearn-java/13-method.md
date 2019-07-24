# 13강. 메서드

## 13-1. 메서드 선언과 호출

메서드도 변수와 같이 선언 및 정의 후 필요시에 호출해서 사용한다.

### 메서드 선언 및 정의

- 메서드 선언

  `public void main(String[] args)`

  - 접근자 : `public`
  - 반환형 : `void`
  - 메서드 이름 : `main`
  - 매개변수 : `String[] args`

- 메서드 정의

  - `{ System.out.println("Hello World"); }`



### 메서드 호출

```java
ChildClass childClass = new ChildClass(); 
childClass.getInfo();
```



## 13-2. 매개변수(parameter)



## 13-3. 중복 메서드(overloading)

이름은 같고, 매개변수의 개수 또는 타입이 다른 메서드를 만들 수 있다.

```java
public void getInfo() {}

public void getInfo(int x, int y) {}

public void getInfo(String s1, String s2) {}
```



## 13-4. 접근자

메서드를 호출할 때 접근자에 따라 호출이 불가능할 수 있다.

- `public`
- `private`

