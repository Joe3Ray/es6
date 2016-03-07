// 与ES5.1相同
"𠮷".length == 2;

// 新的正则参数u
"𠮷".match(/./u)[0].length == 2;

// 新的字符表示形式
"\u{20BB7}"=="𠮷"=="\uD842\uDFB7";

// 新的字符串操作
"𠮷".codePointAt(0) == 0x20BB7;

// for-of 循环代码点
for (var c of "𠮷") {
    console.log(c);
}
