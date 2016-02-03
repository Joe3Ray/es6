# Destructuring

解构允许模式匹配绑定，支持匹配数组和对象。解构是故障弱化型的，与标准的对象查找`foo["bar"]`类似，匹配不到值的时候会返回`undefined`。

```JavaScript
// ES6
// 数组匹配
var [a, , b] = [1,2,3];

function getASTNode() {
    return {
        op: 1,
        lhs: {
            op: 2
        },
        rhs: 3
    };
}

// 对象匹配
var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

// 对象匹配简写
var {op, lhs, rhs} = getASTNode();

// 在参数中使用
function g({name: x}) {
  console.log(x);
}
g({name: 5});

// 故障弱化的解构
var [a] = [];
console.log('a === undefined:',a === undefined);

// 有默认值的故障弱化解构
var [a = 1] = [];
console.log('a === 1:', a === 1);

// ES5
'use strict';

// 数组匹配
var _ref = [1, 2, 3];
var a = _ref[0];
var b = _ref[2];

function getASTNode() {
    return {
        op: 1,
        lhs: {
            op: 2
        },
        rhs: 3
    };
}

// 对象匹配

var _getASTNode = getASTNode();

var a = _getASTNode.op;
var b = _getASTNode.lhs.op;
var c = _getASTNode.rhs;

// 对象匹配简写

var _getASTNode2 = getASTNode();

var op = _getASTNode2.op;
var lhs = _getASTNode2.lhs;
var rhs = _getASTNode2.rhs;

// 在参数中使用

function g(_ref2) {
    var x = _ref2.name;

    console.log(x);
}
g({ name: 5 });

// 故障弱化的解构
var _ref3 = [];
var a = _ref3[0];

console.log('a === undefined:', a === undefined);

// 有默认值的故障弱化解构
var _ref4 = [];
var _ref4$ = _ref4[0];
var a = _ref4$ === undefined ? 1 : _ref4$;

console.log('a === 1:', a === 1);
```
