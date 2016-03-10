# Promises

Promises是一套异步编程的库。Promise是对一个“将来可能会变得可用”的值的第一类表示。现有的很多库都已经实现了Promise。

### ES6
```JavaScript
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");   
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);   
});
```
