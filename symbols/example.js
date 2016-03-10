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

MyClass = MyClass();
var c = new MyClass('hello');
console.log(c['key'] === undefined);
c.doStuff();
