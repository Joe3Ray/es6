# Template Strings

模板字符串提供了新的构建字符串的语法糖。这和Perl、Python以及其他一些语言的字符串插入特性很像。或者，可以添加一个标识来定制字符串的构建，避免注入攻击或是从字符串内容构建更高层级的数据结构。

### ES6
```JavaScript
// 单行
`In Javascript '\n' is a line-feed.`

// 多行
`In Javascript this is
not legal.`

var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

POST`http://foo.org/bar?a=${a}&b=${b}
Content-Type: application/json
X-Credentials: ${credentials}
{ "foo": ${foo},
    "bar": ${bar}}`(myOnReadyStateChangeHandler);
```

### ES5
```JavaScript
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
```
