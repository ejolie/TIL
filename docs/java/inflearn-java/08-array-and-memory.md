# 8강. 배열과 메모리

## 8-1. 배열의 메모리 크기

배열을 구성하는 데이터의 자료형에 따라 배열의 메모리 크기가 결정된다.

```java
int[] arr = new int[3];
// int형 4 byte * 3개
// 따라서, arr는 12 byte
```



## 8-2. 배열을 가리키는 배열 이름

기본 자료형 데이터를 담고 있는 변수와 달리, 배열 변수는 배열 데이터의 주소를 담고 있다.



## 8-3. 배열 기본 속성

```java
public class MainClass {
    public static void main(String[] args) {
        // 배열 기본 속성
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = null;
        int[] arr3 = null;
        
        // 배열 길이
        System.out.println("arr1.length : " + arr1.length);
        
        // 배열 요소 출력
        System.out.println("arr2 : " + Arrays.toString(arr1));
        
        // 배열 요소 복사
        arr3 = Arrays.copyOf(arr1, arr1.length);
        System.out.println("arr3 : " + Arrays.toString(arr3));
        
        // 배열 레퍼런스
        arr2 = arr1;
        
        System.out.println("arr1 레퍼런스 : " + arr1);
        System.out.println("arr2 레퍼런스 : " + arr2);
        System.out.println("arr3 레퍼런스 : " + arr3);
    }
}
```



## 8-4. 다차원 배열

배열 안에 또 다른 배열이 존재할 수 있다.

```java
int[][] arr = new int[3][2]; // 2열 3행
arr[0][0] = 10;
arr[0][1] = 1000;
arr[1][0] = 20;
arr[1][1] = 200;
arr[2][0] = 20;
arr[2][1] = 200;
```

