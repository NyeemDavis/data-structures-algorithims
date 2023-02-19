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
  list.prepend(10)
  list.prepend(20)
  list.prepend(30)
  list.insert(45, 2)
  
  list.print()
  console.log(list.removeFrom(2))
  console.log(list.getSize())
  list.print()
  console.log(list.getSize())
  console.log(list.removeFrom(2))
  list.print()
  console.log(list.getSize())