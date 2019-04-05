# JavaScript Array Map

출처: https://youtu.be/G3BS3sh3D8Q



```javascript
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items); // ['<li>1</li>', '<li>2</li>', '<li>3</li>'] : array

const html1 = items.join();
console.log(html1); // <li>1</li>,<li>2</li>,<li>3</li> : string

const html2 = '<ul>' + items.join('') + '</ul>';
console.log(html2); // <ul><li>1</li><li>2</li><li>3</li></ul> : string

// more elegant way to map number to string
const items = filtered.map(n => {
    return { value: n };
});

// equals
const items = filtered.map(n => ({ value: n}) );

// chaining
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}))
	.filter(obj => obj.value > 1);
	.map(obj => obj.value); // [2, 3] : array
```

