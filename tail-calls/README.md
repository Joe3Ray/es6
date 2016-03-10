# Tail Calls

保证尾部调用时栈不会无限增长，这使得递归算法在面对未作限制的输入时，能够安全地执行。

```JavaScript
function factorial(n, acc = 1) {
    'use strict';
    if (n < 1) return acc;
    return factorial(n - 1, n * acc);
}

// 在如今的绝大多数实现中会爆栈
// 但是在ES6中随意输入都是安全的
factorial(100000);
```
