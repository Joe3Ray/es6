# Iterator + For..Of

迭代器对象能够像CLR IEnumerable或者Java Iterable一样自定义迭代器。从概括性的`for..in`到使用`for..of`的基于迭代器的迭代。并不需要实现一个数组，可以像LINQ一样使用懒设计模式。

### ES6

```JavaScript
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {done: false, value: cur};
            }
        };
    }
};

for (var n of fibonacci) {
    if (n > 1000)
        break;
    console.log(n);
}
```

### ES5

```JavaScript
"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fibonacci = _defineProperty({}, Symbol.iterator, function () {
    var pre = 0,
        cur = 1;
    return {
        next: function next() {
            var _ref = [cur, pre + cur];
            pre = _ref[0];
            cur = _ref[1];

            return { done: false, value: cur };
        }
    };
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        if (n > 1000) break;
        console.log(n);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
```

迭代是基于鸭式辩型的接口（使用`TypeScript`语法，仅作为解释使用）:

```
interface IteratorResult {
    done: boolean;
    value: any;
}
interface Iterator {
    next(): IteratorResult;
}
interface Iterable {
    [Symbol.iterator](): Iterator
}
```
