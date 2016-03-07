"use strict";

import _Object$defineProperty from "babel-runtime/core-js/object/define-property";
Object.defineProperty(exports, "__esModule", {
    value: true
});

var _a = require("./a");

var _loop = function _loop(_key2) {
    if (_key2 === "default") return "continue";

    _Object$defineProperty(exports, _key2, {
        enumerable: true,
        get: function get() {
            return _a[_key2];
        }
    });
};

for (var _key2 in _a) {
    var _ret = _loop(_key2);

    if (_ret === "continue") continue;
}

exports.default = function (x) {
    return x;
};

var e = exports.e = 2.71828182846;
