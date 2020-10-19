function List() {
    // 存放数据
    this.dataStore = []
    // 列表长度
    this.size = 0
    // 列表当前位置
    this.pos = 0
}

// 添加单个元素 
List.prototype.append = function(item){
    this.dataStore[this.size++] = item
    
}
// 查找单个元素 
List.prototype.find = function(item){
    for(let i= 0; i < this.size; i++){
        if(this.dataStore[i] === item){
            return i
        }
    }
    return -1
}
// 删除单个元素
List.prototype.remove = function(item){
    let index = this.find(item)
    if(index !== -1){
        this.dataStore.splice(index,1)
        --this.size
        return true
    }
    return false
}
// 清空列表
List.prototype.clear = function(){
    this.dataStore = []
    this.size = 0
    this.pos = 0
}
// 转字符转
List.prototype.toString = function(){
    return this.dataStore.toString()
}
// 获取列表长度
List.prototype.length = function(){
    return this.size
}
// 插入元素
List.prototype.insert = function(item, after){
    let index = this.find(after)
    if(index !== -1){
        this.dataStore.splice(index+1,0,item)
        ++this.size
        return true
    }
    return false
}
// 获取列表长度
List.prototype.length = function(){
    return this.size
}
// 判断是否存在某个值
List.prototype.contains = function(item){
    return this.find(item) !== -1? true : false

}
// 获取列表长度
List.prototype.length = function(){
    return this.size
}
// 设置元素的位置为第一个
List.prototype.front = function(){
    this.pos =  0
}
// 设置元素的位置为最后一个
List.prototype.end = function(){
    this.pos = this.size - 1
}
// 设置前一个元素
List.prototype.prev = function(){
    if(this.pos > 0) {
        --this.pos
    }
}
// 设置后一个元素
List.prototype.next = function(){
    if(this.pos < this.size-1){
        ++this.pos
    }
}
// 移动到一个位置
List.prototype.moveTo = function(index){
    if(index < 0) {
        this.pos = 0
    } else if(index > this.size - 1){
        this.pos = this.size - 1
    } else {
        this.pos = index
    }
}
// 获取一个元素
List.prototype.getElement = function(){
    return this.dataStore[this.pos]
}
// 是否有下一个元素
List.prototype.hasNext = function(){
    return this.pos < this.size -1
}
// 是否有前一个元素
List.prototype.hasPrev = function(){
    return this.pos > 0
}
