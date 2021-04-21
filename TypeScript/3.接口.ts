// TypeScript的核心原则就是对值所具有的的结构进行类型的检查
interface LabelledValue {
    label: string
    color?: string // 可选属性
    width?: number
}

function printLabel(labelledObject: LabelledValue) {
    console.log(labelledObject.label)
}

let myObj = {size: 10, label: "Size 10 Object"}
// 类型检查器只会检查属性是否存并且类型是对的就可以
printLabel(myObj)

function createSquare(config: LabelledValue): {color: string; area: number} {
    let newSquare = {color: 'white', area: 10}
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

let mySquare = createSquare({label: 'label', color: 'red'})

// 只读属性
interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = { x: 5, y: 10}
// p1.x = 6 错误: 只读属性没办法被分配
// 变量使用const 属性使用 readonly

// 可能存在任意数量的属性
interface SquareConfig {
    width?: number
    [propName: string]: any
}

// 接口描述函数类型
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
    return source.search(subString) > -1
}
// 不写参数类型的话 Typescript类型系统会自己根据赋值给mySeach去推断参数类型
// 不写函数的返回值类型时，函数的返回值类型是根据返回值推断出来的


// 可索引的类型
interface StringArray {
    [index: number]: string
}

let myArray: StringArray
myArray = ['tom', 'bob']
// TypeScript支持两种索引签名：字符串和数字。 
//可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
// 当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象

interface NumberDictionary {
    [index: string]: number // 该可索引的类型导致后面的属性都得满足number
    length: number    // 可以，length是number类型
    // name: string   错误，`name`的类型与索引类型返回值的类型不匹配
}

// 类类型
interface ClockInterface {
    currentTime: Date
    setTime(d: Date)
}

interface TClock extends ClockInterface { // 继承接口
    name: string
}

class Clock implements ClockInterface {
    currentTime: Date
    setTime(d: Date) {
        this.currentTime = d
    }
    constructor(h: number, m: number) { }
}

// 接口继承类： 继承类的成员不包括实现
