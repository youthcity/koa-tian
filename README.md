# Koa-tian

一步一步搭建基础企业级框架

## 组件

- 路由
- 记录日志
- 错误处理
- orm
- 安全

## NodeJS基础知识

### fs

#### readdir()，readdirSync()

readdir方法用于读取目录，返回一个所包含的文件和子目录的数组。

```javascript
const dir = path.join(__dirname, './rotuer');
const files = fs.，readdirSync(dir);
```

-----------------------

## 基于「Nodejs：摆脱黑工坊发展出一款基础企业级框架」实现的koa框架总结

作者的思想是基于经典的MVC模式实现的，为了减少开发时的文件引用（例如，service、controller文件），作者通过「扫描」controller文件夹、service文件夹，将controller挂载到Koa的原型链上，service则通过参数的形式，注入到controller中。这样，开发者就可以减少开发中文件的引用。

在我们平时项目中，我们利用了 `module-alias`，来形成文件的前缀，然后再在文件中通过「别名」进行文件引入，虽然这样也可以减少一部分的引入工作，但是还是需要人工引入，非常繁琐。

作者提供了一个很好的思路，解决文件引入的问题。但是，我有另外一个问题，如何在 Typescript 项目中使用这种注入文件。怎样做到 `interfaces` 的自动提示与挂载。

整个实现流程如下:

- 编码loader。loader的作用主要用户「扫描」controller、service文件。
- 扫描 `controller` 目录和 `service` 目录。
- 在根文件 `index.js` 将 `controllers`挂载到 Koa 的原型链上。
- 在 `router_loader` 中将 service 作为参数的形式传入controller中
- 在 `routers` 中编码路由
- 核心启动文件 `index.js` 注入路由
- 启动应用，并监听端口

## 参考资料

- [Nodejs：摆脱黑工坊发展出一款基础企业级框架](https://zhuanlan.zhihu.com/p/33143058)