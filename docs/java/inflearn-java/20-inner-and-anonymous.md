# 20강. 내부 클래스와 익명 클래스

## 20-1. 내부(innter) 클래스

클래스 안에 또 다른 클래스를 선언하는 것으로 이렇게 하면 두 클래스의 멤버에 쉽게 접근할 수 있다.

```java
public class OuterClass {
    int num = 10;
    String str1 = "Java";
    static String str2 = "World";
    
    public OuterClass() {
        System.out.println("OuterClass constructor");
    }
    
    // 멤버 inner 클래스
    class InnerClass {
        int num = 100;
        String str2 = str1;
        
        public InnerClass() {
            System.out.println("InnerClass constructor");
        }
    }
    
    // static inner 클래스
    static class StaticInnerClass {
        int num = 1000;
        String str3 = str1;
        
        public StaticInnerClass() {
            System.out.println("Static InnerClass constructor");
        }
    }
}
```



```java
public class MainClass {
    public static void main(String[] args) {
        OuterClass oc = new OuterClass();
        System.out.println("oc.num: " + oc.num);
        System.out.println("oc.str1: " + oc.str1);
        
        // 멤버 inner 클래스
        OuterClass.InnerClass in = oc.new InnerClass();
        System.out.println("in.num: " + in.num);
        System.out.println("in.str2: " + in.str2);
        
        // static inner 클래스
        OuterClass.StaticInnerClass si = new OuterClass.StaticInnerClass();
    	System.out.println("si.num: " + si.num);
        System.out.println("si.str3: " + si.str3);
        
        System.out.println()
    }
}
```



## 20-2. 익명(anonymous) 클래스

이름이 없는 클래스로 주로 메서드를 재정의하는 목적으로 사용된다.

```java
public class AnonymousClass {
    public AnonymousClass() {
        System.out.println("AnonymousClass constructor");
    }
    
    public void method() {
        System.out.println("== AnonymousClass's method START ==");
    }
}
```

익명 클래스는 인터페이스나 추상클래스에서 주로 이용된다.

```java
new AnonymousClass() {
    @Override
    public void method() {
        System.out.println("== AnonymousClass's Override method START ==");
    };
}.method();
```

```
# 결과
AnonymousClass constructor
== AnonymousClass's Override method START ==
```



