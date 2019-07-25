# 26강. 예외처리

## 26-1. 예외란?

프로그램에 문제가 있는 것을 말하며, 예외로 인해 시스템 동작이 멈추는 것을 막는 것을 '예외처리'라고 한다.

### Exception(예외)

Exception은 개발자가 대처할 수 있다.

- Checked Exception : '예외처리'를 반드시 해야하는 경우 (네트워크, 파일 시스템 등)
- Unchecked Exception : '예외처리'를 개발자의 판단에 맡기는 경우 (데이터 오류 등)

### Error

Error는 개발자가 대처할 수 없다.



## 26-2. Exception 클래스

Exception 클래스의 하위 클래스로 NullPointerException, NumberFormatException 등이 있다.

- NullPointerException : 객체를 가리키지 않고 있는 레퍼런스를 사용할 때
- ArrayIndexOutOfBoundException : 배열에서 존재하지 않는 인덱스를 가리킬 때 
- NumberFormatException : 숫자 데이터에 문자 데이터 등을 넣었을 때



## 26-3. try ~ catch

개발자가 예외처리하기 가장 쉽고, 많이 사용되는 방법이다.

```java
try {
    // 에외가 발생할 수 있는 코드
} catch (Exception e) {
    // 예외가 발생했을 때 처리할 코드
}
```

```java
int i = 10;
int j = 0;
int r = 0;

System.out.println("Exception BEFORE");

try {
    r = i / j;
} catch (Exception e) {
    e.printStackTrace();
    String msg = e.getMessage();
    System.out.println("Exception : " + msg);
}

System.out.println("Exception AFTER");
```



## 26-4. 다양한 예외처리

Exception 및 하위 클래스를 이용해서 예외처리를 다양하게 할 수 있다.

```java
int i, j;
ArrayList<String> list = null;
int[] iArr = {0, 1, 2, 3, 4};
Scanner sc = new Scanner(System.in);

System.out.println("Exception BEFORE");

try {
    System.out.println("input i : ");
    i = sc.nextInt();
    
    System.out.println("input j : ");
    j = sc.nextInt();
    
    System.out.println("i / j = " + (i / j));
    
    for (int k = 0; k < 6; k++) {
        System.out.println("iArr[" + k + "]: " + iArr[k]);
    }
    
    System.out.println("list.size() : " + list.size());
} catch (InputMismatchException e) {
    e.printStackTrace();
} catch (ArrayIndexOutOfBoundsException e) {
    e.printStackTrace();
} catch (Exception e) {
    e.printStackTrace();
} finally {
    System.out.println("예외 발생 여부에 상관없이 언제나 실행됩니다.")
}

System.out.println("Exception AFTER");
```



## 26-5. finally



## 26-6. throws

예외 발생 시 예외 처리를 직접하지 않고 호출한 곳으로 넘긴다.

