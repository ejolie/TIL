# JavaScript for React Developers

출처 : https://youtu.be/NCwa_xi0Uuc



## 1. var, let, const

```javascript
function sayHello() { 
    for (var i = 0 ; i < 5 ; i++) {
        console.log(i);
    }
    console.log(i);
}
sayHello();
```



- var -> function 

- let -> block (preferable)

- const -> block, read-only (cannot be changed)



##2. objects & 3. this

```javascript
const person = {
    name: 'Mosh',
    // method
    talk() {},
    walk() {
        console.log(this); // always return a reference to current object
    },
};
person.talk();

person.name = '';
const targetMember = 'name'; // input field of a form
person[targetMember.value] = 'John';

// function is object
const walk = person.walk.bind(person);

// walk() changes to a reference to a object
// person.walk() != walk() : just walk() is a reference to a global object
```



## 4. arrow funcitons 

```javascript
const square_old = function(number) {
    return number * number;
}
const square_new = number => number * number;
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
]

const activeJobs_old = jobs.filter(function(job) { return job.isActive; });
const activeJobs_new = jobs.filter(job => job.isActive);
```



## 5. call-back function

```javascript
const people = {
    talk() {
        // solution to call-back function
        var self = this;

        // execute f, after delay
        // call-back : not part of any object, so 'this' -> window, not this object
        setTimeout(function() {
            console.log('self', self);
        }, 1000); 

        // arrow functions : reference to this object, not rebind this keyword
        setTimeout(() => {
            console.log('this', this);
        }, 1000); 
    }
}
person.talk();
```



## 6. map

```javascript
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => '<li>' + color + '</li>');

// template literal - render dynamically
const items_2 = colors.map(color => <li>${color}</li>); 
```



##7. object destructor

```javascript
const address = {
    street: '',
    city: '',
    country: ''
};

const street = address.street;
const city = address.city;
const country = address.country;

// object destructor - resolve repetition
const { street, city, country } = address;
const { street: st } = address;

```



##8. spread operator

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);

// spread operator - easily clone and insert anything
const combined = [...first, 'a', ...second, 'b'];
const clone = [...first];

const first = { name: 'Mosh' };
const second = { job: 'Instructor' };

const combined = [ 
    ...first, 
    ...second, 
    location: 'Australia',
];

const clone = { ...first };
```



## 9. class

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}
const person = new Person('Mosh');
person.walk();
```



##10. inheritance

```javascript
class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}
const teacher = new Teacher('Mosh', 'MSc');
```



##11. module

```javascript
// person.js
export class Person {
    constructor(name) {
		this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

// teacher.js
// private is default, so import and export are required
import { Person } from './person';
export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

// index.js
import { Teacher } from './teacher';

```



## 12. Named and default exports

```javascript
// named export - specific object is exported
// person.js
export class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

// teacher.js

// private is default, so import and export are required
import { Person } from './person';

export function promote() {}
export default class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("teach");
    }
}

// index.js
import Teacher, { promote } from './teacher';

// import React, { Component } from 'react';
```



- default -> import ... from '';

- named -> import { ... } from '';