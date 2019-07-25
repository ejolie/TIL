# 23강. 람다식

## 23-1. 람다식이란?

익명 함수를 이용해서 익명 객체를 생성하기 위한 식이다.

- 기존 방법

  interfaceType 변수 <- interface 구현 (할당)

- 람다식 방법

  interfaceType 변수 <- Lambda Expressions (할당)



## 23-2. 람다식 구현

### 람다 인터페이스

```java
public interface LambdaInterface1 {
    public void method(String s1, String s2, String s3);
}
```



### 람다식

```java
public class MainClass {
    public static void main(String[] args) {
        // 매개변수와 실행문 만으로 작성한다. (접근자, 반환형, return 생략)
        LambdaInterface1 li1 = (String s1, String s2, String s3) -> { System.out.println(s1 + " " + s2 + " " + s3); };
        li1.method("Hello", "Java", "World");
        
        // 매개변수가 1개이거나 타입이 같을 때, 타입을 생략할 수 있다.
        LambdaInterface2 li2 = (s1) -> { System.out.println(s1); };
        li2.method("Hello");
        
        // 실행문이 1개일 때, '{}'를 생략할 수 있다.
        LambdaInterface2 li3 = (s1) -> System.out.println(s1);
        li3.method("Hello");
        
        // 매개변수와 실행문이 1개일 때, '()'와 '{}'를 생략할 수 있다.
        LambdaInterface2 li4 = s1 -> System.out.println(s1);
        li4.method("Hello");
        
        // 매개변수가 없을 때, '()'만 작성한다.
        LambdaInterface3 li5 = () -> System.out.println("No parameter.");
        li5.method();
        
        // 반환값이 있는 경우
        LambdaInterface4 li6 = (x, y) -> {
            int result = x + y;
            return result;
        };
        System.out.printf("li6.method(10, 20) : %d\n", li6.method(10, 20));
        
        li6 = (x, y) -> {
            
        }
    }
}
```

