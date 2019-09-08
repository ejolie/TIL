# 10강. 반복문

## 10-1. 반복문이란?

프로그램 진행을 특정 조건에 따라 반복적으로 진행하는 것이다. for문과 while문은 조건이 참일 때까지 반복을 수행한다.



## 10-2. for문

```java
System.out.print("Input Number: ");
Scanner sc = new Scanner(System.in);
int num = sc.nextInt();

for (int i = 1; i < 10; i++) {
    System.out.println("%d x %d = %d\n", num, i, (num * i));
}
```



## 10-3. while문

```java
System.out.print("Input Number: ");
Scanner sc = new Scanner(System.in);
int num = sc.nextInt();

int i = 1;
while (i < 10) {
    System.out.println("%d x %d = %d\n", num, i, (num * i));
    i++;
}
```



## 10-4. do ~ while문

while문과 비슷하며, 차이점은 조건 결과에 상관없이 무조건 최초 한 번은 do { ... }의 프로그램을 수행한다.

```java
do {
    System.out.println("무조건 1번은 실행합니다.");
} while (false);
```

