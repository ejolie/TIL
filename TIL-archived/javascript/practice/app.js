$(function() {
  $('h1').text('Hello');
  $('<p id="text">My <em>new</em></p>').appendTo('body');
});



// Define a plain object
var foo = { foo: 'bar', hello: 'world' };

// Pass it to the jQuery function
var $foo = $(foo);

// Accessing property values
var test1 = $foo.prop('foo');
console.log(test1);

// Setting property values
$foo.prop('foo', 'foobar');

// Accessing property values
var test2 = $foo.prop('foo');
console.log(test2);