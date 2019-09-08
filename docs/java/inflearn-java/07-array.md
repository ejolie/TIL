# 7강. 배열

## 7-1. 배열이란?

인덱스를 이용해서 자료형이 같은 데이터를 관리하는 것이다.



## 7-2. 배열 선언 및 초기화

배열도 변수와 마찬가지로 선언과 초기화 과정을 거쳐 사용한다.

### 배열 선언 후 초기화

```java
int[] arr = new int[5];
arr[0] = 100;
arr[1] = 200;
arr[2] = 300;
arr[3] = 400;
arr[4] = 500;
```



### 배열 선언과 초기화를 동시에

```java
int[] arr = {10, 20, 30, 40, 50};
```



## 7-3. 배열을 이용한 학사관리

```java
import java.util.*;
import java.io.*;

public class MainClass {
    public static void main(String[] args) {
        // 배열을 이용한 학사관리
        String[] name = {"박찬호", "이승엽", "박병호", "이병규", "류현진"};
        int[] score = new int[5];
        Scanner sc = new Scanner(System.in);
        
        System.out.printf("%s의 점수를 입력하세요. : ", name[0]);
        score[0] = sc.nextInt();
        
        System.out.printf("%s의 점수를 입력하세요. : ", name[1]);
        score[1] = sc.nextInt();
        
        System.out.printf("%s의 점수를 입력하세요. : ", name[2]);
        score[2] = sc.nextInt();
        
        System.out.printf("%s의 점수를 입력하세요. : ", name[3]);
        score[3] = sc.nextInt();
        
        System.out.printf("%s의 점수를 입력하세요. : ", name[4]);
        score[4] = sc.nextInt();
        
        System.out.printf("%의 점수 : \t%.2f\n", name[0], (double)score[0]);
        System.out.printf("%의 점수 : \t%.2f\n", name[1], (double)score[1]);
        System.out.printf("%의 점수 : \t%.2f\n", name[2], (double)score[2]);
        System.out.printf("%의 점수 : \t%.2f\n", name[3], (double)score[3]);
        System.out.printf("%의 점수 : \t%.2f\n", name[4], (double)score[4]);
        
        double avg = (double)(score[0] + score[1] + score[2] + score[3] + score[4]) / 5;
        System.out.printf("\n평점 : \t%.2f", avg);
        
        sc.close();
        System.out.println();
    }
}
```

