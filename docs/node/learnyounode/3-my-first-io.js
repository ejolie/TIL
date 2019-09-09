var fs = require('fs');

var contents = fs.readFileSync(process.argv[2]);
var lines = buf.toString().split('\n');
console.log(lines.length - 1);

// method 2.
// console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1)
