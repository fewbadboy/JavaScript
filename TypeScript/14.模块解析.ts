// 模块解析
// import 导入一个模块的时候，编译器会遵循以下两种策略去找模块
// 1. Classic: TS默认解析策略，相对路径导入的模块当当前路径下查找；非相对模块的导入，
// 从包含文件的目录开始依次向上级目录遍历，尝试定位匹配的声明文件
// 2. Node: 先检查当前目录下是否存在 导入模块的.ts/.tsx/.d.ts文件
// 然后再去找当前目录下是不是有存在导入模块的文件夹，里面包含package.json文件制定一个main模块
// 若上面的不存在则去查找导入模块名的文件夹中是不是有index.ts/.tsx/.d.ts文件
// 如果以上两种方式解析失败，编译器会尝试一个   --外部模块声明-- 

// 相对 VS 非相对模块的导入
// 相对导入是 / 、./ 、../ 开头；所有的其他形式都是非相对的

// 路径映射
// 有时模块不是直接放在baseUrl下面。 比如，充分 "jquery"模块地导入，在运行时可能被解释为"node_modules/jquery/dist/jquery.slim.min.js"。 加载器使用映射配置来将模块名映射到运行时的文件，查看 RequireJs documentation和SystemJS documentation。

// TypeScript编译器通过使用tsconfig.json文件里的"paths"来支持这样的声明映射。 下面是一个如何指定 jquery的"paths"的例子。

// {
//   "compilerOptions": {
//     "baseUrl": ".", // This must be specified if "paths" is.
//     "paths": {
//       "jquery": ["node_modules/jquery/dist/jquery"] // 此处映射是相对于"baseUrl"
//     }
//   }
// }
