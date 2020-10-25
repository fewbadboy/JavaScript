function Node(element){
    this.element = element
    this.next = null
}

function SingleLinkedList(){
    this.head = new Node('head')
}

SingleLinkedList.prototype.find = function(item){
    let curNode = this.head
    while(curNode.element !== item){
        curNode = curNode.next
    }
    return curNode
}
SingleLinkedList.prototype.insert = function(newElemnt, item){
    let newNode = new Node(newElemnt)
    var current = this.find(item)
    newNode.next = current.next
    current.next = newNode
}
SingleLinkedList.prototype.findPrevious = function(item){
    let curNode = this.head
    while(curNode.next !== null && curNode.next.element !== item){
        curNode = curNode.next
    }
    return curNode
}
SingleLinkedList.prototype.remove = function(item){
    let prevNode = this.findPrevious(item)
    if(prevNode.next !== null){
        prevNode.next = prevNode.next.next
    }
}
SingleLinkedList.prototype.display = function(){
    let curNode = this.head
    while(curNode.next !== null){
        console.log(curNode.next.element)
        curNode = curNode.next
    }
}