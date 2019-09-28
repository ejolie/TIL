interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius); // 에러 없이 작동
// console.log(rectangle.width); // width 가 private 이기 때문에 에러 발생!

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20,
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react'],
};

const people: Person[] = [person, expert];

type PersonType = {
  name: string;
  age?: number;
};

type DeveloperType = PersonType & {
  skills: string[];
};

const personT: PersonType = {
  name: '김사람',
};

const expertT: DeveloperType = {
  name: '김개발',
  skills: ['javascript', 'react'],
};

type People = Person[];
const peopleT: People = [personT, expertT];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c'],
};

type ItemsType<T> = {
  list: T[];
};

const itemsT: ItemsType<string> = {
  list: ['a', 'b', 'c'],
};

class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
