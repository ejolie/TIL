# 25강. Collections

## 25-1. List

List를 인터페이스이며 이를 구현한 클래스(`Vector`, `ArrayList`, `LinkedList`)는 인덱스를 이용해서 데이터를 관리한다.

### List 특징

- 인덱스를 사용한다.
- 데이터 중복이 가능하다.

```java
// ArrayList 객체 생성
ArrayList<String> list = new ArrayList<String>();

// 데이터 추가
list.add("Hello");
list.add("Java");
list.add("World");

list.add(2, "Programming");

list.set(1, "C");

// 데이터 추출
String str = list.get(2);

// 데이터 제거
str = list.remove(2);

// 데이터 전체 제거
list.clear();

// 데이터 유무
boolean b = list.isEmpty();
```



## 25-2. Map

Map은 인터페이스이며 이를 구현한 클래스(`HashMap`)는 key를 이용해서 데이터를 관리한다.

### Map 특징

- key를 이용한다
- key는 중복될 수 없다.
- 데이터 중복은 가능하다.

```java
// HashMap 객체 생성
HashMap<Integer, String> map = new HashMap<Integer, String>();

// 데이터 추가
map.put(5, "Hello");
map.put(6, "Java");
map.put(7, "World");

// 데이터 교체
map.put(6, "C");

// 데이터 추출
str = map.get(5);

// 데이터 제거
map.remove(8);

// 특정 데이터 포함 유무
hasKey = map.containsKey(7);
hasValue = map.containsValue("World");

// 데이터 전체 제거
map.clear();

// 데이터 유무
isEmpty = map.isEmpty();
```

