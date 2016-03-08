# Map + Set + WeakMap + WeakSet

对于常见算法的高效数据结构。WeakMap提供了无泄漏的键值对表格。

### ES6
```JavaScript
// Sets
var s = new Set();
s.add('hello').add('goodbye').add('hello');
console.log(s.size);
console.log(s.has('hello'));

// Maps
var m = new Map();
m.set('hello', 42);
m.set(s, 34);
console.log(m.get(s));

// Weak Maps
var wm = new WeakMap();
wm.set(s, {extra: 42});
console.log(wm.size);

// Weak Sets
var ws = new WeakSet();
ws.add({data: 42});
console.log(ws.has({data: 42}));
```

### ES5
```JavaScript
'use strict';

var _weakSet = require('babel-runtime/core-js/weak-set');

var _weakSet2 = _interopRequireDefault(_weakSet);

var _weakMap = require('babel-runtime/core-js/weak-map');

var _weakMap2 = _interopRequireDefault(_weakMap);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Sets
var s = new _set2.default();
s.add('hello').add('goodbye').add('hello');
console.log(s.size);
console.log(s.has('hello'));

// Maps
var m = new _map2.default();
m.set('hello', 42);
m.set(s, 34);
console.log(m.get(s));

// Weak Maps
var wm = new _weakMap2.default();
wm.set(s, { extra: 42 });
console.log(wm.size);

// Weak Sets
var ws = new _weakSet2.default();
ws.add({ data: 42 });
console.log(ws.has({ data: 42 }));
```
