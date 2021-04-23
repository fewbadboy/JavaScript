// tsconfig.json

// 方法装饰器： 需要配置tconfig
class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }

  @enumerable(false)
  greet() {
      return "Hello, " + this.greeting
  }
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value
  }
}

// 参数修饰器