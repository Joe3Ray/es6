# Classes

ES6的classes是基于原型的面向对象模式的语法糖。一个方便的声明形式让类模式更加易用，并且鼓励互操作性。Classes支持基于原型的继承，父级调用，实例方法和静态方法以及构造函数。

```JavaScript
// ES6
class People {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(name) {
        this._name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

class Man extends People {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    static speak() {
        console.log('I am a man.');
    }
}

// ES5
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var People = (function () {
    function People(name) {
        _classCallCheck(this, People);

        this.name = name;
    }

    _createClass(People, [{
        key: 'sayName',
        value: function sayName() {
            console.log(this.name);
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name.toUpperCase();
        },
        set: function set(name) {
            this._name = name;
        }
    }]);

    return People;
})();

var Man = (function (_People) {
    _inherits(Man, _People);

    function Man(name, age) {
        _classCallCheck(this, Man);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Man).call(this, name));

        _this.age = age;
        return _this;
    }

    _createClass(Man, null, [{
        key: 'speak',
        value: function speak() {
            console.log('I am a man.');
        }
    }]);

    return Man;
})(People);
```
