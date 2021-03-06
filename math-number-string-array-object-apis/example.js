console.log(Number.EPSILON);
console.log(Number.isInteger(Infinity));    // false
console.log(Number.isNaN("NaN"));     // false

console.log(Math.acosh(3));       // 1.762747174039086
console.log(Math.hypot(3, 4));      // 5
console.log(Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2));    // 2

console.log("abcde".includes("cd"));     // true
console.log("abc".repeat(3));      // abcabcabc

console.log(Array.from(document.querySelectorAll('*')));     // 返回一个真正的数组
console.log(Array.of(1, 2, 3));     // 与new Array(...)类似，区别在于只传一个参数时
console.log([0, 0, 0].fill(7, 1));     // [0, 7, 7]
console.log([1, 2, 3].find(x => x == 3));    // 3
console.log([1, 2, 3].findIndex(x => x == 2));    // 1
console.log([1, 2, 3, 4, 5].copyWithin(3, 0)); // [1, 2, 3, 1, 2]
console.log(["a", "b", "c"].entries()); // iterator [0, "a"], [1,"b"], [2,"c"]
console.log(["a", "b", "c"].keys());    // iterator 0, 1, 2
console.log(["a", "b", "c"].values());   // iterator "a", "b", "c"

var obj = {a: 0, b: 2};
Object.assign(obj, {a: 1});
console.log(obj);     // {a: 1, b: 2}    Object.assign作用与$.extend类似
