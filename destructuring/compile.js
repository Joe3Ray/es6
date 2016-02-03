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
