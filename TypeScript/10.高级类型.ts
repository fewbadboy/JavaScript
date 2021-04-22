// 交叉类型：多个类型合并为一个类型
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
      (<any>result)[id] = (<any>first)[id]
  }
  for (let id in second) {
      if (!result.hasOwnProperty(id)) {
          (<any>result)[id] = (<any>second)[id]
      }
  }
  return result
}

class PersonI {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void
}
class ConsoleLogger implements Loggable {
  log() {
      // ...
  }
}
var jim = extend(new PersonI("Jim"), new ConsoleLogger())
var n = jim.name
jim.log()

// 联合类型：
function isNumber(x: any): x is number { // 返回值是一个类型谓词 arg is Type
  return typeof x === "number" // 具体的还可以instaceof 保护
}
function isString(x: any): x is string {
  return typeof x === "string"
}
function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value
  }
  if (isString(padding)) {
      return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

// 可以为null类型
let str = "foo"
// str = null null不能赋值给string
let strn: string | null = "bar"
strn = null

// 类型别名： 不能被extends 和 implements
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n
    }
    else {
        return n()
    }
}

type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}

// 完整性检查: 添加Triangle到Shape 同事需要更新area,
interface Square {
  kind: "square"
  size: number
}
interface Rectangle {
  kind: "rectangle"
  width: number
  height: number
}
interface Circle {
  kind: "circle"
  radius: number
}
// 新增加的类型
interface Triangle {
  kind: "triangle"
  width: number
  height: number
}
type Shape = Square | Rectangle | Circle | Triangle
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}
function area(s: Shape): number {
    switch (s.kind) {
        case "square": return s.size * s.size
        case "rectangle": return s.height * s.width
        case "circle": return Math.PI * s.radius ** 2
        case "triangle": return s.width * s.height * 0.5
        default: return assertNever(s) // 忘记具体的某个类型得到一个报错，提示
    }
}

// 多态的this类型
class BasicCalculator {
  public constructor(protected value: number = 0) { }
  public currentValue(): number {
      return this.value
  }
  public add(operand: number): this {
      this.value += operand;
      return this
  }
  public multiply(operand: number): this {
      this.value *= operand;
      return this
  }
  // ... other operations go here ...
}

let v = new BasicCalculator(2)
          .multiply(5)
          .add(1)
          .currentValue()

// 索引类型
// function pluck(o, names) {
//   return names.map(n => o[n]);
// }
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

interface Person1 {
    name: string;
    age: number;
}
let person: Person1 = {
    name: 'Jarid',
    age: 35
};
let strings: string[] = pluck(person, ['name']); // ok, string[]
// let personProps: keyof Person // 'name' | 'age'

// 预定于有条件的类型: TS 2.8 增加的
// Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
// Extract<T, U> -- 提取T中可以赋值给U的类型。
// NonNullable<T> -- 从T中剔除null和undefined。
// ReturnType<T> -- 获取函数返回值类型。
// InstanceType<T> -- 获取构造函数类型的实例类型