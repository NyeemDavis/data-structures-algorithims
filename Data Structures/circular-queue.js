// The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element
// Also referred to as circular buffer or ring buffer and follows the FIFO principle
// A circular queue will reuse the empty block created during the dequeue operation
// Great to use if working with queues that have a fixed max size

// Supports enqueue and dequeue
// Clock
// Streaming data
// Traffic lights

// Circular queue implementation
class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1
        this.front = -1
    }
    isFull() {
        return this.currentLength === this.capacity
    }
    isEmpty() {
        return this.currentLength === 0
    }
    enqueue(element) {
        if(!this.isFull()) {
            this.rear = (this.rear + 1) & this.capacity
            this.items[this.rear] = element
            this.currentLength += 1
            if(this.front === -1) {
                this.front = this.rear
            }
        }
    }
    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        const item = this.item[this.front]
        this.item[this.front] = null
        this.front = (this.front + 1) % this.capacity
        this.currentLength -= 1
        if(this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }
    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }
    print() {
        if(this.isEmpty()) {
            console.log('Queue is emoty')
        } else {
            let i 
            let str = ''
            for(i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
                str += this.items[i] + ' '
            }
            str += this.items[i]
            console.log(str)
        }
    }
}

const queue = new CircularQueue(5)
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())
queue.print()
queue.enqueue()