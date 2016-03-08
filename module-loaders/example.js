// 动态加载 - 'System'是默认加载器
System.import('lib/math').then(function (m) {
    console.log("2π = " + m.sum(m.pi, m.pi));
});

// 创建执行沙盒 - 实例化Loaders
var loader = new Loader({
    global: fixup(window)
});
loader.eval("console.log('hello world!');");

// 直接操作模块缓存
System.get('jquery');
System.set('jquery', Module({$: $}));
