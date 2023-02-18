// The stack data structure is a sequential collection of elements that follow the principle of Last in First Out(LIFO)
// A stack of plates. Last plate added to the top of the stack if the first to come off
// An abstract data type. It is defined by its behavior rather than being a mathematical tool
// Supports push and pop

// Good to use if you have to trace back steps
// Browser history, undo operation
// Expression conversions
// Call stack in JS runtime

// Stack Implementation

// .pop() remove the top most element from the stack
// .push(element) add an element to the top of the stack
// .peek() get the value of the top element without removing it
// .isEmpty() check to see if the stack is empty
// .print() visualize the elements in the stack

class Stack {
    constructor() {
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.at(-1)]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.size())
stack.print()

console.log(stack.pop())
console.log(stack.peek())