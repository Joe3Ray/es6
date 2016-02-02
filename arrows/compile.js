'use strict';

var evens = [2, 4, 6, 8];

// 表达式
var odds = evens.map(function (v) {
    return v + 1;
});
var nums = evens.map(function (v, i) {
    return v + i;
});
var pairs = evens.map(function (v) {
    return { even: v, odd: v + 1 };
});

// 声明主体
var fives = [];
nums.forEach(function (v) {
    if (v % 5 == 0) {
        fives.push(v);
    }
});

// this作用域
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
