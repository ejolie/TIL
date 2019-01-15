'use strict';

function Fruit(type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

let time = new Fruit('Mexican lime');
console.log(lime.getInformation()); // This Mexican lime is unknown.

lime.color = 'green';
console.log(lime.getInformation()); // This Mexican lime is green.
