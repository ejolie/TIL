2019년 12월 24일 월요일

# typeof 연산자

*typeof* 연산자는 피연산자의 타입을 나타내는 문자열을 반환합니다. 안타깝게도 이 연산자는 자바스크립트의 일곱 가지 데이터 타입(undefined, null, 불리언, 숫자, 문자열, 심볼, 객체)을 정확히 나타내지 못하며 끝없는 혼란을 초래했고 계속 비판을 받았습니다.

* typeof null : "object"
  * 사실 null은 객체가 아니라 원시 값입니다. 
* typeof [] : "object"
  * 사실 []는 객체가 아니라 배열입니다. 



| 표현식               | 반환값      | 참고                     |
| -------------------- | ----------- | ------------------------ |
| typeof undefined     | "undefined" |                          |
| typeof null          | "object"    | 애석하지만 사실입니다.   |
| typeof {}            | "object"    |                          |
| typeof true          | "boolean"   |                          |
| typeof 1             | "number"    |                          |
| typeof ""            | "string"    |                          |
| typeof Symbol()      | "symbol"    | ES6에서 새로 생겼습니다. |
| typeof function() {} | "functino"  |                          |

출처 : 러닝 자바스크립트 5.9.2. typeof 연산자
