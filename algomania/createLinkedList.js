class Node {
    next
    value
}

class LinkedList {
    head
    constructor() {
        this.head = undefined
    }

    insertNodeToTail(node){
        if (this.head) {            
            let tail = this.tail()
            tail.next = node
        } else {
            this.head = node
        }
    }

    insertNodeToHead(node){
        if (this.head) {        
            node.next = this.head
            this.head = node
        } else {
            this.head = node
        }
    }

    isEmpty() {
        return !this.head || !this.head.value && !this.head.next
    }

    head() {
        return this.head
    }

    tail() {
        if (!this.head) {
            return this.head
        }
        let current = this.head
        while (current.next){
            current = current.next
        }
        return current
    }

    getList() {
        if (this.head) {
            let list = []
            let current = this.head
            list.push(current.value)
            while (current.next){
                current = current.next
                list.push(current.value)
            }
            return list
        } else {
            return []
        }


    }
}

let linkedList = new LinkedList()
linkedList.insertNodeToHead({value: 1})
linkedList.insertNodeToTail({value: 2})
linkedList.insertNodeToTail({value: 3})
linkedList.insertNodeToHead({value: 0})
console.log(linkedList.getList())