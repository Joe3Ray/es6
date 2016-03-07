# Modules

从语言层面对模块化组件定义的支持。代码模式来源于流行的Javascript模块加载器(AMD, CommonJS)。由按域名规划的默认加载器定义运行时行为。隐式的异步模型——在请求的模块获取到并且处理之前没有代码被执行。

## lib/math.js

### ES6
```JavaScript
export function sum(x, y) {
      return x + y;
}
export var pi = 3.141593;
```

### ES5
```JavaScript
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sum = sum;
function sum(x, y) {
    return x + y;
}
var pi = exports.pi = 3.141593;
```

## app.js

### ES6
```JavaScript
import * as math from "./lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));
```

### ES5
```JavaScript
"use strict";

var _math = require("./lib/math");

var math = _interopRequireWildcard(_math);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log("2π = " + math.sum(math.pi, math.pi));
```

## otherApp.js

### ES6
```JavaScript
import {sum, pi} from "./lib/math";
console.log("2π = " + sum(pi, pi));
```

### ES5
```JavaScript
"use strict";

var _math = require("./lib/math");

console.log("2π = " + (0, _math.sum)(_math.pi, _math.pi));
```

还有一些额外的特性，包括`export default`和`export * `

## lib/mathplusplus.js

### ES6
```JavaScript
export * as math from "./math";
export var e = 2.71828182846;
export default function(x) {
    return x;
}
```

### ES5
```JavaScript
"use strict";

import _Object$defineProperty from "babel-runtime/core-js/object/define-property";
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _math = require("./a");

var _loop = function _loop(_key2) {
    if (_key2 === "default") return "continue";

    _Object$defineProperty(exports, _key2, {
        enumerable: true,
        get: function get() {
            return _math[_key2];
        }
    });
};

for (var _key2 in _math) {
    var _ret = _loop(_key2);

    if (_ret === "continue") continue;
}

exports.default = function (x) {
    return x;
};

var e = exports.e = 2.71828182846;
```

## app.js

### ES6
```JavaScript
import ln, {math, e} from "./lib/mathplusplus";
console.log("2π = " + ln(e)*2);
console.log(math);
```

### ES5
```JavaScript
"use strict";

var _mathplusplus = require("./lib/b");

var _mathplusplus2 = _interopRequireDefault(_mathplusplus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("2π = " + (0, _mathplusplus2.default)(_mathplusplus.e) * 2);
console.log(_mathplusplus.math);
```
