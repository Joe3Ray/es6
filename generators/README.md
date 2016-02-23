# Generators

生成器使用`function*`和`yield`简化了迭代器的创建。一个被声明为`function*`的函数会返回生成器实例。生成器是迭代器的子类型，包含了额外的`next`和`throw`。这些允许数据回流到生成器中，所以`yield`是一种返回计算值的表达式语法（throw也是）。

注意：同样可以使用类似`await`的异步编程模式，参照ES7的`await`草案。

### ES6

```JavaScript
var fibonacci = {
    [Symbol.iterator]: function*() {
        var pre = 0, cur = 1;
        for (;;) {
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    }
}

for (var n of fibonacci) {
    if (n > 1000)
        break;
    console.log(n);
}
```

### ES5

```JavaScript
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fibonacci = (0, _defineProperty3.default)({}, _iterator3.default, _regenerator2.default.mark(function _callee() {
    var pre, cur, _ref;

    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    pre = 0, cur = 1;

                case 1:
                    _ref = [cur, pre + cur];
                    pre = _ref[0];
                    cur = _ref[1];
                    _context.next = 6;
                    return cur;

                case 6:
                    _context.next = 1;
                    break;

                case 8:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = (0, _getIterator3.default)(fibonacci), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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

生成器接口是这样的（使用`TypeScript`语法，仅作为解释使用）:

```
interface Generator extends Iterator {
    next(value?: any): IteratorResult;
    throw(exception: any);
}
```
