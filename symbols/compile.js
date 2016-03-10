'use strict';

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyClass = function MyClass() {
    var key = (0, _symbol2.default)('key');

    function MyClass(privateData) {
        this[key] = privateData;
    }

    MyClass.prototype = {
        doStuff: function doStuff() {
            console.log(this[key]);
        }
    };

    return MyClass;
};

MyClass = MyClass();
var c = new MyClass('hello');
console.log(c['key'] === undefined);
c.doStuff();
