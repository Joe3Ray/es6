"use strict";

var _obj;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var obj = _obj = _defineProperty({
    __proto__: theProtoObj,
    handler: handler,
    toString: function toString() {
        return "d " + _get(Object.getPrototypeOf(_obj), "toString", this).call(this);
    }
}, 'prop_' + (function () {
    return 42;
})(), 42);
