# Default + Rest + Spread

函数自动计算参数的默认值。在函数调用的时候把数组转换成连续的参数。把后面连续的参数绑定到一个数组。拓展取代了原来的参数需求，更直接地解决常见问题。

### ES6

```JavaScript
function f(x, y=12) {
    // 如果没有传递参数y的值，y使用默认值12
    return x + y;
}
console.log('f(3) == 15 : ', f(3) == 15);

function m(x, ...y) {
    // y是一个数组
    return x * y.length;
}
console.log('m(3, "hello", true) == 6 :', m(3, "hello", true) == 6);

function n(x, y, z) {
    return x + y + z;
}
console.log('n(...[1, 2, 3]) == 6:', n(...[1, 2, 3]) == 6);
```

### ES5

```JavaScript
'use strict';

function f(x) {
    var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];

    // 如果没有传递参数y的值，y使用默认值12
    return x + y;
}
console.log('f(3) == 15 : ', f(3) == 15);

function m(x) {
    for (var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        y[_key - 1] = arguments[_key];
    }

    // y是一个数组
    return x * y.length;
}
console.log('m(3, "hello", true) == 6 :', m(3, "hello", true) == 6);

function n(x, y, z) {
    return x + y + z;
}
console.log('n(...[1, 2, 3]) == 6:', n.apply(undefined, [1, 2, 3]) == 6);
```
