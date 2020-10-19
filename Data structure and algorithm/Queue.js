function Queue() {
    this.dataStore = []
}

Queue.prototype.enqueue = function(item){
    this.dataStore.push(item)
}
Queue.prototype.dequeue = function(){
     return this.dataStore.shift()
}
Queue.prototype.front = function(){
    return this.dataStore[0]
}
Queue.prototype.back = function(){
    return this.dataStore[this.dataStore.length - 1]
}
Queue.prototype.empty = function(){
    this.dataStore = []
}
Queue.prototype.toString = function(){
    return this.dataStore.toString()
}