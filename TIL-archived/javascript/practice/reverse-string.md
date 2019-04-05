# Reverse a String in JS

### 1. for loop

```js
function reverse(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
```

```js
function reverse(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}
```



### 2. reverse() for arrays

```js
function reverse(str) {
    return str.split('').reverse().join('');
}
```



### 3. spread syntax (ES6) + reverse() for arrays

```js
function reverse(str) {
    return [...str].reverse().join('');
}
```



### 4. reduce() for arrays

```js
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
```



### 5. recursion

```js
function reverse(str) {
    if (str === '') {
        return str;
    } else {
        return reverse(str.substr(1)) + str[0];
    }
}
```

```js
function reverse(str) {
    return str ? reverse(str.substr(1)) + str[0] : str;
}
```





출처 : https://medium.com/quick-code/5-ways-to-reverse-a-string-in-javascript-466f62845827