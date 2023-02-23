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
      if (this.isEmpty()) {
        this.head = node
      } else {
        node.next = this.head
        this.head = node
      }
      this.size++
    }
    // O(n)
    append(value) {
      const node = new Node(value)
      if (this.isEmpty()) {
        this.head = node
      } else {
        let prev = this.head
        while (prev.next) {
          prev = prev.next
        }
        prev.next = node
      }
      this.size++
    }
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return
      }
      if (index === 0) {
        this.prepend(value)
      } else {
        const node = new Node(value)
        let prev = this.head
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next
        }
        node.next = prev.next
        prev.next = node
        this.size++
      }
    }
    removeFrom(index) {
      if (list.isEmpty() || index < 0 || index > this.size) {
        return null
      }
      let removedNode
      if(index === 0) {
        removedNode = this.head
        this.head = this.head.next
      }else {
        let prev = this.head
        for(let i = 0; i < index - 1; i++) {
          prev = prev.next
        }
        removedNode = prev.next
        prev.next = removedNode.next
      }
     this.size--
     return removedNode
    }
    search(value) {
      if(this.isEmpty()) {
        return -1
      } else {
        let curr = this.head
        let i = 0
        while(curr) {
          if(curr.value == value) {
            return i
          }
          curr = curr.next
          i++
        }
      }
    }
    print() {
      if (this.isEmpty()) {
        console.log('List is empty')
      } else {
        let curr = this.head
        let listvalues = ''
        while (curr) {
          listvalues += `${curr.value} `
          curr = curr.next
        }
        console.log(listvalues)
      }
    }
  }
  
const list = new LinkedList()
 
  class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
  }
  
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
    
  print() {
    if (this.isEmpty()) {
      console.log('List is empty')
    } else {
      let curr = this.head
      let listvalues = ''
      while (curr) {
        listvalues += `${curr.value} `
        curr = curr.next
      }
      console.log(listvalues)
    }
  }
  prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  append(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  removeFromFront() {
    if(this.isEmpty()) {
      return null
    }
    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }

  removeFromEnd(){
    if(this.isEmpty()) {
       return null
    }
    const value = this.tail.value
    if(this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      let prev = this.head
      while(prev.next !== tail.node) {
        prev = prev.next
       }
      prev.next = null
      this.tail = prev
    }
    this.size--
    return value
  }
}


module.exports = LinkedList