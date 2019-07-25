# 18강. 상속

## 18-1. 상속이란?

부모 클래스를 상속받은 자식 클래스는 부모 클래스의 속성과 기능을 이용할 수 있다.



## 18-2. 상속의 필요성

기존의 검증된 class를 이용해서 빠르고 쉽게 새로운 class를 만들 수 있다.



## 18-3. 상속 구현

`extends` 키워드를 이용해서 상속을 구현한다.

```java
public class ChildClass extends ParentClass {
    // 생성자
    public ChildClass() {
        System.out.println("Hello World");
    }
}
```



## 18-4. 부모 클래스의 `private` 접근자

자식 클래스는 부모 클래스의 모든 자원을 사용할 수 있지만, `private` 접근자의 속성과 메서드는 사용할 수 없다.

