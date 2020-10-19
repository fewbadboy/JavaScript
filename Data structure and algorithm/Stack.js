function Stack() {
    this.dataStore = []
    // 记录栈顶位置
    this.top = 0
}

Stack.prototype.push = function(item){
    this.dataStore[this.top++] = item
}
Stack.prototype.pop = function(){
    return this.dataStore[--this.top]
}
// 返回栈顶元素
Stack.prototype.peek = function(){
    return this.dataStore[this.top - 1]

}
Stack.prototype.clear = function(){
    this.dataStore = []
    this.top = 0

}
Stack.prototype.length = function(){
    return this.top

}