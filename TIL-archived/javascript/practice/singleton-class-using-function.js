/* Singleton class
- Design pattern that restricts a class to a single instance
- When we assign the value of new function(){...} to a variable, 
    - We define an anonymous constructor function.
    - We invoke the anonymous constructor function with the new keyword.
*/
'use strict';

let lime = new function() {
    this.type = 'Mexican lime';
    this.color = 'green';
    this.getInformation = function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    };
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());