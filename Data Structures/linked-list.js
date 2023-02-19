// Linear data structure that includes a series of connected nodes
// Each node consists of a data value and a pointer that points to the next value
// The list elements can be easily inserted or removed without reallocation or reorganiztion of the entire structure
// Random access of elements is not feasible and accessing an element has linear time complexity

// Supports
// -insertion
// -deletion
// -search

// 10 -> 20 -> 30 -> null

// Usage
// All applications of both stacks and queues are applications of linked lists
// Image viewer


// Linked list implementation 

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    // O(1)
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    // O(n)
    append(value){
        const node = new Node(value)
        if(this.isEmpty) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listvalues = ''
            while(curr) {
                listvalues += `${curr.value}`
                curr = curr.next
            }
        }
        console.log(listValues)
    }
}

const list = new LinkedList() 
console.log('List is empty?', list.isEmpty())
console.log('List size:', list.getSize())
list.prepend(10)
list.print()

list.prepend(20)
list.prepend(30)
list.print()
// cheese mans