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
