// 合并接口: 合并的机制是把双方的成员放到一个同名的接口里
interface Box {
  height: number
  width: number
}
interface Box {
  scale: number
}
let box: Box = {height: 5, width: 6, scale: 10}

// 合并命名空间：非导出成员仅在其原有的（合并前的）命名空间内可见
namespace Animals {
  export class Zebra { }
}

namespace Animals {
  export interface Legged { numberOfLegs: number; }
  export class Dog { }
}