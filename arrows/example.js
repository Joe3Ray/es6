var evens = [2, 4, 6, 8];

// 表达式
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));

// 声明主体
var fives = [];
nums.forEach(v => {
    if (v % 5 == 0) {
        fives.push(v);
    }
});

// this作用域
var bob = {
    _name: 'Bob',
    _friends: [],
    printFriends() {
        this._friends.forEach(v => {
            console.log(this._name + ' knows ' + v);
        });
    }
};
