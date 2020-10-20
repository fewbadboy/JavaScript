function Node(element){
    this.element = element
    this.previous = null
    this.next = null
}

function DLinkList(){
    this.head = new Node('head')
}

DLinkList.prototype.find = function(item){
    let curNode = this.head
    while(curNode.element !== item){
        curNode = curNode.next
    }
    return curNode
}
DLinkList.prototype.insert = function(newElemnt, item){
    let newNode = new Node(newElemnt)
    var current = this.find(item)
    newNode.previous = current
    newNode.next = current.next
    current.next = newNode
}
DLinkList.prototype.findPrevious = function(item){
    let curNode = this.head
    while(curNode.next !== null && curNode.next.element !== item){
        curNode = curNode.next
    }
    return curNode
}
DLinkList.prototype.remove = function(item){
    let current = this.find(item)
    if(current.next !== null){
        current.previous.next = current.next
        current.next.previous = current.previous
        current.next = null
        current.previous = null
    }
}
DLinkList.prototype.display = function(){
    let curNode = this.head
    while(curNode.next !== null){
        console.log(curNode.next.element)
        curNode = curNode.next
    }
}

DLinkList.prototype.findLast = function(){
    let curNode = this.head
    while(curNode.next !== null){
        curNode  = curNode.next
    }
    return curNode
}

DLinkList.prototype.dispReverse = function(){
    let curNode = this.head
    curNode = this.findLast()
    while(curNode.previous !== null){
        console.log(curNode.element)
        curNode = curNode.previous
    }
}