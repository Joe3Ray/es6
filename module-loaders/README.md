# Module Loaders

模块加载器支持：

* 动态加载
* 状态隔离
* 全局命名空间隔离
* 编译钩子
* 虚拟化嵌套

默认的模块加载器是可以配置的，可以构建新的加载器在隔离的或者受约束的上下文环境中评估和加载代码。

```JavaScript
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
```
