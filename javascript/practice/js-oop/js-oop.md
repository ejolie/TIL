# Object-oriented Programming in JavaScript

출처: https://youtu.be/PFmuCDHHpwk



##1. 4 Pillars of Object-oriented Programming

### 1) Encapsulation

- Procedural Programming

  - Divide a program into a set of functions and data

  ##### => "spaghetti code" problem : so much interdependence between all these functions

  ```javascript
  let baseSalary = 30_000;
  let overtime = 10;
  let rate = 20;
  
  function getWage(baseSalary, overtiem, rate) { // so many parameters
      return baseSalary + (overTime * rate);
  }
  ```

- Object-oriented Programming

  - Combine a group of related variables(*property*) and functions(*method*) into a unit(*object*)

  #####=> "Encapsulation"

```javascript
let employee = {
    // - property
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    // - method
    getWage: function() { // no parameters
        return this.baseSalary + (this.overTime * this.rate);
    }
};
employe.getWage();
```



- e.g.) localStorage
  - Every browser has a local storage object that allows you to store data locally



### 2) Abstraction

* We can hide some of the properties and methods from the outside
* Benefits
  * Simpler interface
  * Reduce the impact of change



### 3) Inheritance

* A mechanism that allows you to eliminate redundant code



### 4) Polymorphism

* poly(*many*) + morphism(*form*) 
* A technique that allows you to get rid of long ethanol's or switch and case statements



### 5) Benefits of OOP

* Encapsulation : Reduce complexity + increase reusability
* Abstraction : Reduce complexity + isolate impact of changes
* Inheritance : Eliminate redundant code
* Polymorphism : Refactor ugly switch/case statements





## 2. Objects

### 1) Object literals

```javascript
const circle = {
  // - property
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  // - method
  draw: function() { 
    console.log('draw');
  }
};

circle.draw();
```



### 2) Factories

```javascript
// Factory Function
function createCircle(radius) {
    return {
        radius, // radius: radius
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = CreateCircle(1);
```



### 3) Constructor

```javascript
// Constructor
function Circle(radius) { // similar to class
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);
```



### 4) Constructor Property

```javascript
let x = {};
// - equals 
// let x = new Object();

// circle.constructor
// : circle object return it from our factory function,
// : because it was created using an object constructor function in JavaScript

new String; 
// - compare
// '', "", '' 
// : these literals are cleaner and simpler than using the constructor

new Boolean()
// true, false

new Number();
// 1, 2, 3, ...
```



`another.constructor`

> *f  Circle(radius) { *
>
>    _this.radius = radius;_
>
>    _this.draw = function() { console.log('draw') };_
>
> _}_



`circle.constructor`

> *f  Object() { [native code] }*



#####=> Every object has a constructor property and that references the function that was used to create an object



### 5) Functions and Objects

```javascript
function Circle(radius) { // this function is an object
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
```

