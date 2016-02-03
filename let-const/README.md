# Let + Const

构建块级作用域。`let`是新的`var`，`const`是单次赋值的。禁止在赋值前使用变量。

### ES6

```JavaScript
let a = 5;
if(true){
    let a = 10;
}
console.log(a);

const aa = 11;
alert(aa) //11
// aa = 22; // error
alert(aa) //11
```

### ES5

```JavaScript
"use strict";

var a = 5;
if (true) {
    var _a = 10;
}
console.log(a);

var aa = 11;
alert(aa); //11
// aa = 22; // error
alert(aa); //11
```
