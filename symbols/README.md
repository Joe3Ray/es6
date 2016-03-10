# Symbols

Symbols能够控制对象状态。Symbols允许属性名使用字符串（与ES5相同）或者`symbol`。Symbols是一个新的原始类型。可选的`description`参数用于调试-但是不能用来鉴别symbol的唯一性。Symbols是唯一的（类似于gensym）,但不是私有的，因为可以通过诸如`Object.getOwnPropertySymbols`这样的反射特性暴露出来。

### ES6
```JavaScript
var MyClass = function () {
    var key = Symbol('key');

    function MyClass(privateData) {
        this[key] = privateData;
    }

    MyClass.prototype = {
        doStuff: function () {
            console.log(this[key]);        
        }
    };

    return MyClass;
};

var c = new MyClass('hello');
console.log(c['key'] === undefined);
```
