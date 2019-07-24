# 9강. 조건문

## 9-1. 조건문이란?

조건의 결과에 따라 양자택일 또는 다자택일을 진행한다.

* 양자택일 : 주로 if문이 쓰인다.
* 다자택일 : 주로 switch문이 쓰인다.



## 9-2. if문

### if (조건식), if (조건식) else, if (조건식) else if (조건식)



## 9-3. switch문

비교대상이 되는 결과값이 선택사항이 많을 경우 주로 사용한다.

```java
Scanner sc = new Scanner(System.in);
int score = sc.nextInt();

switch (score) {
    case 100:
    case 90:
        System.out.println("A");
        break;
    
    case 80:
        System.out.println("B");
        break;
        
    case 70:
        System.out.println("C");
        break;
        
    default:
        System.out.println("Try again");
        break;
}

sc.close();
```



