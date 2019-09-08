# Introduction to Java programming

## Java terminology

> cf. Glossary of Java Terms (Oracle)
>
> https://docs.oracle.com/javase/tutorial/information/glossary.html

### Java Virtual Machine (JVM)

프로그램 실행 과정 : 코드 작성 -> 컴파일 -> 실행

1. 코드 작성 : 프로그래머가 하는 일

2. 컴파일 : javac 컴파일러가 수행

   javac는 Java Development Kit(JDK)에 포함된 자바 컴파일러다. 자바 코드를 입력으로 받아 바이트 코드를 출력한다.

3. 실행 : 컴파일러가 만든 바이트 코드를 JVM이 실행시킨다.

**각 OS는 다른 JVM을 사용하지만 바이트 코드 실행 결과는 OS에 상관 없이 동일하다.** 이게 바로 자바가 플랫폼으로부터 자유로운 언어로 불리는 이유이다.



### 바이트 코드

JDK에 포함된 javac 컴파일러가 자바 소스 코드(`.java` 파일)를 JVM이 실행할 수 있도록 바이트코드로 컴파일한다. 바이트코드는 `.class` 파일에 저장된다.



### Java Development Kit(JDK)

JRE, 컴파일러, 그리고 JavaDoc과 디버거 등 다양한 도구를 포함하고 있는 개발 키트다. 자바 프로그램을 만들고 컴파일하고 실행하기 위해서는 반드시 설치해야 한다.



### Java Runtime Environment(JRE)

JDK에 들어 있는 자바 실행 환경이다. JRE는 JVM과 브라우저 플러그인 등을 포함하고 있다. 자바 프로그램을 실행만 하고 싶다면 JRE만 설치하면 된다.



## Main Features of JAVA

### 1. Java is a platform independent language

javac 컴파일러가 컴파일한 바이트 코드는 OS와 상관없이 어느 플랫폼에서나 실행될 수 있다. 



### 2. Java is an Object Oriented language

객체 지향 프로그래밍이란 프로그램을 객체들의 집합으로 구성하는 방식이다. 여기서 각 객체는 클래스의 인스턴스를 나타낸다.

* 객체 지향 프로그래밍의 특징

1. Abstraction 추상화
2. Encapsulation 캡슐화
3. Inheritance 상속
4. Polymorphism 다형성



### 3. Simple

자바는 연산자 오버로딩, 다중 상속, 포인터, 명시적 메모리 할당 등과 같은 복잡한 기능을 갖고 있지 않기 때문에 간단한 언어 중 하나이다.



### 4. Robust Language

Robust means reliable. 가비지 컬렉션, 예외 처리, 메모리 할당 ...



### 5. Secure

포인터가 없으므로 배열의 영역을 벗어날 수 없다. Stack corruption이나 buffer overflow와 같은 건 자바에서 발생하기 힘들다.



### 5. Java is distributed



### 6. Multithreading

멀티스레딩은 CPU를 최대한 사용하기 위해 프로그램을 두 개 이상의 부분으로 동시에 실행시키는 방법이다.



### 7. Portable

