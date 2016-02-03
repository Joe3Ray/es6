"use strict";

var _templateObject = _taggedTemplateLiteral(["In Javascript this is\nnot legal."], ["In Javascript this is\nnot legal."]),
    _templateObject2 = _taggedTemplateLiteral(["http://foo.org/bar?a=", "&b=", "\nContent-Type: application/json\nX-Credentials: ", "\n{ \"foo\": ", ",\n    \"bar\": ", "}"], ["http://foo.org/bar?a=", "&b=", "\nContent-Type: application/json\nX-Credentials: ", "\n{ \"foo\": ", ",\n    \"bar\": ", "}"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// 单行
"In Javascript '\n' is a line-feed."

// 多行
(_templateObject);

var name = "Bob",
    time = "today";
"Hello " + name + ", how are you " + time + "?";

POST(_templateObject2, a, b, credentials, foo, bar)(myOnReadyStateChangeHandler);
