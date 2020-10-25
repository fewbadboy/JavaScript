function Node(element){
    this.element = element
    this.next = null
}

function CyclicLinkedList(){
    this.head = new Node('head')
    this.head.next = this.head
}
CyclicLinkedList.prototype.find = function(item){
    let curNode = this.head
    while(curNode.element !== item){
        curNode = curNode.next
    }
    return curNode
}
CyclicLinkedList.prototype.insert = function(newElemnt, item){
    let newNode = new Node(newElemnt)
    var current = this.find(item)
    newNode.next = current.next
    current.next = newNode
}
CyclicLinkedList.prototype.findPrevious = function(item){
    let curNode = this.head
    while(curNode.next !== null && curNode.next.element !== item){
        curNode = curNode.next
    }
    return curNode
}
CyclicLinkedList.prototype.remove = function(item){
    let prevNode = this.findPrevious(item)
    if(prevNode.next !== null){
        prevNode.next = prevNode.next.next
    }
}
CyclicLinkedList.prototype.display = function(){
    let curNode = this.head
    while(curNode.next !== null && curNode.next.element !== 'head'){
        console.log(curNode.next.element)
        curNode = curNode.next
    }
}