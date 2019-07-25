# 17강. 데이터 은닉

## 17-1. 멤버 변수의 `private` 설정

멤버 변수(속성)는 주로 `private` 으로 설정해서, 외부로부터 데이터가 변질되는 것을 막는다.

```java
package com.java.employee;

public class Employee {
    String name;
    String no;
    int pay;
    // -> 외부에서 쉽게 데이터를 변경할 수 있다.
    
    public Employee(String name, String no, int pay) {
        this.name = name;
        this.no = no;
        this.pay = pay;
    }
}
```



## 17-2. setter, getter

멤버 변수를 외부에서 변경할 수 있도록 하는 메서드이다.

```java
public class Student {
    private String name;
    private int score;
    
    public Student(String n, int s) {
        this.name = n;
        this.score = s;
    }
    
    public void getInfo() {
        System.out.println("name: " + name);
        System.out.println("score: " + score);
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getScore() {
        return score;
    }
    
    public void setScore(int score) {
        this.score = score;
    }
}
```

