# 19강. 상속 특징

## 19-1. 메서드 오버라이딩(override)

부모 클래스의 기능을 자식 클래스에서 재정의해서 사용한다.

```java
// ParentClass.java
public class ParentClass {
    // parent constructor
    public ParentClass() {
        System.out.println("ParentClass constructor");
    }
    
    public void helloWorld() {
        System.out.println("Hello world from ParentClass");
    }
}
```

```java
// ChildClass.java
public class ChildClass extends ParentClass {
    // child constructor
    public ChildClass() {
        System.out.println("ChildClass constructor");
    }
    
    @Override
    public void helloWorld() {
        System.out.println("Hello world from ChildClass");
    }
}
```

```java
// MainClass.java
public class MainClass {
    public static void main(String[] args) {
        ChildClass child = new ChildClass();
        child.helloWorld();
    }
}
```

```bash
# 결과
ParentClass constructor
ChildClass constructor
Hello world from ChildClass # overriding
```



## 19-2. 자료형(타입)

기본 자료형처럼 클래스도 하나의 자료형이다.



## 19-3. `Object` 클래스

모든 클래스의 최상위 클래스는 Object 클래스이다.



## 19-4. `super` 키워드

상위 클래스를 호출할 때 `super` 키워드를 사용한다.

```java
// ParentClass.java
public class ParentClass {
    int year = 2020;
}
```

```java
// ChildClass.java
public class ChildClass extends ParentClass {
    int year = 2019;
   	
    public void getYear() {
        System.out.println("ChildClass's year: " + this.year);
        System.out.println("ParentClass's yaer: " + super.year);
    }
}
```

