// 布尔类型
let isDone: boolean = false

// 数字
let binaryLiteral: number = 0b1010
let octLiteral: number = 0o744
let decLiteral: number = 6
let hexLiteral: number = 0xf00d

// 字符串
let userName: string = 'web front end'
userName = "new name"
let sentense: string = `Hello, ${ userName }`

// 数组
let list: number[] = [1, 2, 3]
let list1: Array<number> = [1, 2, 3] //数组泛型

// 元组：已知元素的类型和数量的数组
let tuple1: [string, number] = ['name', 12] // 访问越界属性时使用联合类型替代（设置属性的类型只能是当前元组中已存在的类型）

// 枚举
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Red
let colorName: string = Color[4] // Blue

// Any: 编一阶段不清楚编译的类型，不希望类型检查器检查而是直接通过编译
let notSure: any = 4
notSure = false
notSure = 'Hello'

// Void: 与Any相反；只能赋值undefined或者null
function logHello(): void {
  console.log('Hello')
}


// Null、Undefined
let u: undefined = undefined
let n: null = null


// Never: 永不存在的值的类型，永远无法达到的终点
function error(msg: string): never{
  throw new Error(msg)
}

// Object
declare function create(o: object | null): void

// 类型断言： 两种写法，类似类型转换
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length

let strLen: number = (someValue as string).length
