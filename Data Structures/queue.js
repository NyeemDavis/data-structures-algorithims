// The queue data structure is a sequential collection of elements that follow first in first out
// First element inserted is the first one out


// Ex
// A queue of people
// An abstract data type. defined by behavior rather than being a mathematical model

// Enqueue adds an element to the rear/tail of the collection
// Dequeue removed an element from the front/head of the collection

// Process in an orderly fashion
// Printers
// CPU
// Callback queue in JS runtime

// Queue Implimentation
// enqueue(element)
// dequeue(element)
// peek()
// isEmpty()
// size()
// print()

class Queue {
    constructor(){
        this.items = []
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue() {
        this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0
    }
    peek(){
        if(!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }
    size() {
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.size())
queue.print()
