// 模块
// import export : as 设置别名
// export =  和 import = require()

// 默认导出: 默认导出使用 default关键字标记；并且一个模块只能够有一个default导出。
class moduleA {}
export default moduleA

// 外部模块简写: 
// declare module "hot-new-module" // 你不想在使用一个新模块之前花时间去编写声明，你可以采用声明的简写形式以便能够快速使用它
// 使用顶级的 export声明来为每个模块都定义一个.d.ts文件  类似当前目录下的node.d.ts
import * as Path from "path"
console.log(Path.join('dist','assets'))

// SystemJS和AMD
import fileContent from "./name.txt!text"
import data from "json!./name.json"
console.log(data, fileContent)

// UMD 模块
import { isPrime } from "./math-lib"
isPrime(2)


// 模块中不要使用命名空间

// 命名空间
namespace Shape {
  export namespace Ploygons{
    export class Square {}
  }
}