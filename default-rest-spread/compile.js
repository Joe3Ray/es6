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
