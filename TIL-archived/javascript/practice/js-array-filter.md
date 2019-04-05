# JavaScript Array Filter

출처: https://youtu.be/4_iT6EGkQfk



```javascript
const numbers = [1, -1, 2, 3];

// positive numbers
// iterates array and callback function executes
const filered = numbers.filter(function(value) {
    return value >= 0;
})

// arrow function
const filtered = numbers.filter(n => n >= 0);

```

