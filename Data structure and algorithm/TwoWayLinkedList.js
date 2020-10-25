function Node(element){
    this.element = element
    this.previous = null
    this.next = null
}

function TwoWayLinkedList(){
    this.head = new Node('head')
}

TwoWayLinkedList.prototype.find = function(item){
    let curNode = this.head
    while(curNode.element !== item){
        curNode = curNode.next
    }
    return curNode
}
TwoWayLinkedList.prototype.insert = function(newElemnt, item){
    let newNode = new Node(newElemnt)
    var current = this.find(item)
    newNode.previous = current
    newNode.next = current.next
    current.next = newNode
}
TwoWayLinkedList.prototype.findPrevious = function(item){
    let curNode = this.head
    while(curNode.next !== null && curNode.next.element !== item){
        curNode = curNode.next
    }
    return curNode
}
TwoWayLinkedList.prototype.remove = function(item){
    let current = this.find(item)
    if(current.next !== null){
        current.previous.next = current.next
        current.next.previous = current.previous
        current.next = null
        current.previous = null
    }
}
TwoWayLinkedList.prototype.display = function(){
    let curNode = this.head
    while(curNode.next !== null){
        console.log(curNode.next.element)
        curNode = curNode.next
    }
}

TwoWayLinkedList.prototype.findLast = function(){
    let curNode = this.head
    while(curNode.next !== null){
        curNode  = curNode.next
    }
    return curNode
}

TwoWayLinkedList.prototype.dispReverse = function(){
    let curNode = this.head
    curNode = this.findLast()
    while(curNode.previous !== null){
        console.log(curNode.element)
        curNode = curNode.previous
    }
}