// 类
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move (distance: number = 0) {
    console.log(`${this.name} moved ${distance}`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move (distance: number = 5) {
    console.log('Slithering...')
    super.move(distance)
  }
}

let sam: Animal = new Snake('Sammy the Python')
sam.move() // Sammy the Python moved 0

// public (默认) private(仅在当前类中使用) protected(protected成员在派生类中任然可以访问,无法在派生类实例中访问)


class Person {
  protected name: string;
  constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
      super(name)
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); 在派生类中可以使用 但是无法在派生类实例中使用
// protected 修饰constructot时，无法实例化，只能被继承

// readonly修饰符： 只读属性必须在声明或者构造函数里被初始化
class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) { // 参数属性方便我们定义并初始化一个成员
  }
}

// 存取器：只有get不带set 自动被推断为readonly
class Employ {
  private _fullName: string

  get fullName(): string {
      return this._fullName
  }

  set fullName(newName: string) {
    this._fullName = newName
  }
}
let employ = new Employ()
employ.fullName = "Bob Smith"

// 抽象类
abstract class Department {

  constructor(public name: string) {}

  printName(): void {
      console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {

  constructor() {
      super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.')
  }

  generateReports(): void {
      console.log('Generating accounting reports...')
  }
}

let department: Department // 允许创建一个对抽象类型的引用
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()

// 高级技巧
// 把类当做接口使用

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}