// ES2015 새로운 string 메서드
let str = "hello world!^^ ~~";
let matchstr = "hello";
console.log(str.startsWith(matchstr));
console.log(str.endsWith("~~"));
console.log("include test ", str.includes("^^"));