// 枚举： 
enum Direction {
  Up = 1,
  Right,
  Down,
  Left
}

enum DirectionStr {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// 反向映射
let dir = DirectionStr.Up
let nameOfUp = DirectionStr[dir]

// 常量枚举
const enum DirV{ Up, Dowm }

// 外部枚举: 用来描述已经存在的枚举类型的形状
declare enum DirH{ Right, Left }