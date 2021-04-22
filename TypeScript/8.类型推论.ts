// 最佳通用类型： 当选择的类型找不到最佳的类型的话，类型腿短结果为联合数字类型 (P1, P2, P3)[]
let zoo: Animal[] = [new Snake('')]

// 上下文类型
window.onmousedown = function(mouseEvent: any) {
  console.log(mouseEvent.button)  //<- Now, no error is given
}