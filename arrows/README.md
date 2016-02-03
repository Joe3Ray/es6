# Arrows

Arrows使用`=>`语法来作为函数的简写。这个和C#、Java 8和CoffeeScript的语法很像。它既支持声明式主体，也支持把计算结果作为返回值的表达式主体。与函数不同的是，arrows与包裹它的函数共享同一个`this`变量。

## 表达式主体

### ES6
```JavaScript
var evens = [2, 4, 6, 8];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
```

### ES5
```JavaScript
'use strict';

var evens = [2, 4, 6, 8];
var odds = evens.map(function (v) {
    return v + 1;
});
var nums = evens.map(function (v, i) {
    return v + i;
});
var pairs = evens.map(function (v) {
    return { even: v, odd: v + 1 };
});
```

## 声明式主体

### ES6
```JavaScript
var fives = [];
nums.forEach(v => {
     if (v % 5) {
         fives.push(v);
     }
});
```

### ES5
```JavaScript
var fives = [];
nums.forEach(function (v) {
    if (v % 5 == 0) {
        fives.push(v);
    }
});
```

## 共享包裹函数的this作用域

### ES6
```JavaScript
var bob = {
    _name: "Bob",
    _friends: [],
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}
```

### ES5
```JavaScript
var bob = {
    _name: 'Bob',
    _friends: [],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (v) {
            console.log(_this._name + ' knows ' + v);
        });
    }
};
```
