# Proxies

代理让我们在创建对象时可以全方位地操作对象的行为。可以用来实现拦截、对象虚拟化和记录/分析等。

* 代理一个普通对象

### ES6
```JavaScript
var target = {};
var handler = {
    get: function (receiver, name) {
        return `Hello, ${name}!`;
    }
};

var p = new Proxy(target, handler);
p.world === 'Hello, world!';
```

* 代理一个函数对象

### ES6
```JavaScript
var target = function () {return "I am the target";};
var handler = {
    apply: function (receiver, ...args) {
        return "I am the proxy";
    }
};

var p = new Proxy(target, handler);
p() === 'I am the proxy';
```

下面是所有运行时级别的元操作：

```JavaScript
var handler = {
    get: ...,
    set: ...,
    has: ...,
    deleteProperty: ...,
    apply: ...,
    construc: ...,
    getOwnPropertyDescriptor: ...,
    defineProperty: ...,
    getPrototypeOf: ...,
    setPrototypeOf: ...,
    enumerate: ...,
    ownKeys: ...,
    preventExtensions: ...,
    isExtensible: ...
};
```
