'use strict';

let lime = {
    type: 'Mexican lime',
    color: 'green',
    getInformation: function() {
        return 'This ' + this.type + ' is ' + this.color + '.';
    }
}

console.log(lime.getInformation());

lime.color = 'yellow';
console.log(lime.getInformation());