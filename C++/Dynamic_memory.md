# Dynamic Memory

## 1. Static & Dynamic Memory

C++에서, 메모리는 두 가지 부분으로 나뉜다.

* **Stack** : 모든 local 변수는 stack의 메모리 공간을 차지한다.
* **Heap** : 사용되지 않은 프로그램 메모리. 프로그램이 동작할 때 **동적으로 메모리를 할당하기 위해** 사용될 수 있다.

=> **"new"** 를 사용하여 런 타임 중에 heap 공간에 메모리를 할당할 수 있다. **new** 는 할당된 메모리 공간의 주소를 리턴한다.

```c++
new int;
```





## 2. Dynamic Memory

할당된 주소는 **pointer** 에 저장될 수 있으며, 변수에 접근하기 위해 포인터는 deferenced 될 수 있다.

```c++
int *p = new int;
*p = 5;
```

integer 에 동적으로 메모리를 할당하였고, 5 라는 값을 부여하였다.

pointer **p** 는 local 변수로서 **stack** 에 저장되었고, **heap** 의 할당된 주소를 값으로 가지고 있다. 5 라는 값은 **heap** 의 그 주소에 저장된 것이다. 



**stack** 에 있는 local 변수들에 관해서는, 메모리 관리가 자동으로 수행된다.

반면 **heap** 에서는, 동적으로 할당된 메모리를 직접 관리하는 것이 중요하다. 따라서 **"delete"** 라는 operator를 사용하여 메모리 공간이 더 이상 필요가 없을 때 메모리 할당 해제를 시켜준다. 

```c++
int *p = new int; // request memory
*p = 5; // store value

cout << *p << endl; // use value

delete p; // free up the memory
```

new 로 할당받은 메모리를 할당 해제시켜주지 않으면, 프로그램이 shut down 할 때까지 할당받은 상태를 유지하므로 memory leak 을 유발할 수 있다. 따라서 delete 를 잊지 않도록 유의하자!





## 3. Dangling Pointers

delete 는 변수에 할당받은 메모리를 해제 시켜주지만, pointer 자체를 삭제해주진 않는다. (pointer는 stack에 저장되어 있기 때문이다.)

존재하지 않는 메모리의 위치를 여전히 가리키고 있는 pointer 를 **"dangling pointer"** 라고 부른다.

```c++
int *p = new int; // request memory
*p = 5; // store value

cout << *p << endl; // use value

delete p; // free up the memory
// now p is a dangling pointer

p = new int; // reuse for a new address
```

참고) NULL pointer : 0의 값을 가진 constant



```c++
int *p = NULL; // pointer initialized with null
p = new int[20]; // request memory
delete [] p; // delete array pointed to by p
```

array 에도 메모리 동적 할당이 가능하다. delete 오른쪽의 bracket을 주의하자!







출처: https://www.sololearn.com/Play/CPlusPlus
