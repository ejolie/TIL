# 15강. 생성자와 소멸자 그리고 `this`

## 15-1. 디폴트 생성자

객체가 생성될 때 가장 먼저 호출되는 생성자로, 만약 개발자가 명시하지 않아도 컴파일 시점에 자동 생성된다.

```java
// 객체 생성 시
ObjectEx obj = new ObjectEx();

// 디폴트 생성자 자동 호출
public ObjectEx() {
    
}
```



## 15-2. 사용자 정의 생성자

디폴트 생성자 외에 특정 목적에 의해서 개발자가 만든 생성자로, 매개변수에 차이가 있다.

```java
ObjectEx obj2 = new ObjectEx(10);

// 사용자 정의 생성자 호출
public ObjectEx(int i) {
    System.out.println("UserDefined consturctor");
    num = i;
}
```

```java
int arr[] = {10, 20, 30};
ObjectEx obj3 = new ObjectEx("Java", arr);

// 사용자 정의 생성자 호출
public ObjectEx(String s, int i[]) {
    System.out.println("UserDefined constructor");
    str = s;
    nums = i;
}
```



## 15-3. 소멸자

객체가 GC에 의해서 메모리에서 제거될 때 `finalize()` 메서드가 호출된다.

```java
// 소멸자
ObjectEx obj4;

obj4 = new ObjectEx();
obj4 = new ObjectEx();

System.gc();
```

- `System.gc()` : 이 메서드를 호출한다고 해서 GC가 바로 작동하는 것이 아니라, 가급적 빨리 작동하도록 요청하는 것이다.
- Java는 기본적으로 메모리를 개발자가 직접 관리하지 않으므로 일반적으로 `System.gc()` 를 사용하는 경우는 드물다.



```java
// System.gc();
@Override
protected void finalize() throws Throwable {
    System.out.println("== finalize() method ==");
    super.finalize();
}
```



## 15-4. `this` 키워드

현재 객체를 가리킬 때 `this`를 사용한다.

```java
// this 키워드
int arr[] = {10, 20, 30};
ObjectEx obj5 = new ObjecEx(10, "Java", arr);

// 클래스 생성자
public ObjectEx(int i, String s, int is[]) {
    System.out.println("UserDefined constructor");
    
    this.num = i;
    this.str = s;
    this.nums = is;
}
```

