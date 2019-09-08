# 21강. 인터페이스

## 21-1. 인터페이스란?

클래스와 달리 객체를 생성할 수는 없으며, 클래스에서 구현해야 하는 작업 명세서이다.

클래스는 인터페이스를 구현하고, 이 클래스를 이용해 객체를 생성한다.



## 21-2. 인터페이스를 사용하는 이유

인터페이스를 사용하는 이유는 많지만, 가장 큰 이유는 객체가 다양한 자료형(타입)을 가질 수 있기 때문이다.

```java
public class ImplementClass implements InterfaceA, InterfaceB, InterfaceC, InterfaceD {
    public ImplementClass() {
        System.out.println("ImplementClass constructor");
    }
}
```

```java
InterfaceA ia = new ImplementClass();
InterfaceB ib = new ImplementClass();
InterfaceC ic = new ImplementClass();
InterfaceD id = new ImplementClass();
```



## 21-3. 인터페이스 구현

- 클래스 : `class` , `extends`
- 인터페이스 : `interface` , `implements`



## 21-4. 장난감 인터페이스

- Toy : interface

  - ToyRobot : class

    ```java
    public class ToyRobot implements Toy {
        
    }
    ```

  - ToyAirplane : class

    ```java
    public class ToyRobot implements Toy {
        
    }
    ```

interface를 이용하면 객체가 다양한 자료형(타입)을 가질 수 있다.

```java
Toy robot = new ToyRobot();
Toy airplane = new ToyAirplane();

Toy toys[] = {robot, airplane};
```

