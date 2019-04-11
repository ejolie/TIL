var memberArray = ['ejoing', 'graphittie', 'leezhce'];
console.group('array loop');
var i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i++;
}
console.groupEnd('array loop');

var memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezhce'
}
console.group('object loop');
for (var key in memberObject) {
  console.log(key, memberObject[key]);
}
console.groupEnd('object loop');