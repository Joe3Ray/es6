# Unicode

这是非破坏性的补充，用来支持整个Unicode字符集，包括新的unicode表示形式和用来处理代码点的新的正则模式`u`，还有新的用来处于21位代码点字符的API。这些改进让Javascript能更好地构建全球性的应用。

### ES6
```JavaScript
// 与ES5.1相同
"𠮷".length == 2;

// 新的正则参数u
"𠮷".match(/./u)[0].length == 2;

// 新的字符表示形式
"\u{20BB7}"=="𠮷"=="\uD842\uDFB7";

// 新的字符串操作
"𠮷".codePointAt(0) == 0x20BB7;

// for-of 循环代码点
for (var c of "𠮷") {
    console.log(c);
}
```

### ES5
```JavaScript
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 与ES5.1相同
"𠮷".length == 2;

// 新的正则参数u
"𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/)[0].length == 2;

// 新的字符表示形式
"𠮷" == "𠮷" == "𠮷";

// 新的字符串操作
"𠮷".codePointAt(0) == 0x20BB7;

// for-of 循环代码点
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = (0, _getIterator3.default)("𠮷"), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var c = _step.value;

        console.log(c);
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
