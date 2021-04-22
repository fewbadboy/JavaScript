// 泛型
// any类型会导致这个函数接收任何类型的arg参数，假如传入一个数字，我们只知道任何类型都会被返回
// 因此需要一个返回值类型和传入参数的类型相同的方法
function identity<T>(arg: T): T {return arg}

interface GenericIdentityFn {
  <T>(arg: T): T
}

// 泛型类
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) { return x + y }

// 泛型约束：具体操作某个类型的值的时候我们知道这组值具有什么属性但是编译器应不能证明每个类型都有该属性
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property, so no more error
  return arg;
}

class BeeKeeper {
  hasMask: boolean;
}
class ZooKeeper {
  nametag: string;
}
class TAnimal {
  numLegs: number;
}
class Bee extends TAnimal {
  keeper: BeeKeeper;
}
class Lion extends TAnimal {
  keeper: ZooKeeper;
}
function createInstance<A extends TAnimal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask