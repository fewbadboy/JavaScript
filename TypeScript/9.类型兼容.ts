// 比较两个函数是兼容的
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x // OK
// x = y // Error

// 枚举：枚举类型和数字类型兼容，反之也成立。但是不同枚举类型之间是不兼容的
enum Status { Ready, Waiting }
enum Color { Red, Blue, Green }

let state = Status.Ready
// state = Color.Green;  // Error

// 类: 私有成员和受保护的成员会影响兼容性
class Type {
  feet: number;
  constructor(name: string, numFeet: number) { }
}
class Size {
  feet: number;
  constructor(numFeet: number) { }
}
let a: Type
let s: Size

a = s;  // OK
s = a;  // OK

// 泛型
interface NotEmpty<T> {
  data: T;
}
let n1: NotEmpty<number>
let n2: NotEmpty<string>
// n1 = n2; not compatible(属性类型不同)