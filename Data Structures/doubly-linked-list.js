class Node {
    constructor (value) {
      this.value = value
      this.next = null
      this.prev = null
    }
  }
  
  
  class DoublyLinkedList {
    constructor () {
     this.head = null
     this.tail = null
     this.size= 0
    }
    prepend(value) {
      const node = new Node(value)
      if(this.isEmpty()) {
        this.head = node
      } else {
        
      }
      this.size++
    }
    append() {
      this.size++ 
    }
    removeFromFront() {
      if(!this.isEmpty()) {
        this.head = this.head.next
        this.head.prev = null
        this.size--
      }
    }
    removeFromEnd() {
      if(this.size == 1) {
        this.head = null
        this.tail = null
      } else {
        this.tail = this.tail.prev
        this.tail.next = null
        this.size--
      }
    }
    isEmpty() {
      return this.size === 0
    }
    peek() {
      return this.head.value
    }
  }