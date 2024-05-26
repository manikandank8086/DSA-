// // class PriorityQueue {
// //     constructor() {
// //         this.queue = [];
// //     }

// //     // Add element to the queue with priority
// //     enqueue(item, priority) {
// //         this.queue.push({ item, priority });
// //         this.queue.sort((a, b) => a.priority - b.priority); // Sort based on priority
// //     }

// //     // Remove and return element with highest priority
// //     dequeue() {
// //         if (this.isEmpty()) {
// //             return null;
// //         }
// //         return this.queue.shift().item;
// //     }

// //     // Peek the element with highest priority without removing it
// //     peek() {
// //         if (this.isEmpty()) {
// //             return null;
// //         }
// //         return this.queue[0].item;
// //     }

// //     // Check if the queue is empty
// //     isEmpty() {
// //         return this.queue.length === 0;
// //     }

// //     // Get the size of the queue
// //     size() {
// //         return this.queue.length;
// //     }
// // }

// // // Example usage:
// // let pq = new PriorityQueue();
// // pq.enqueue("Task 1", 3);
// // pq.enqueue("Task 2", 1);
// // pq.enqueue("Task 3", 2);

// // console.log("Dequeued:", pq.dequeue()); // Task 2
// // console.log("Peeked:", pq.peek()); // Task 3
// // console.log("Queue size:", pq.size()); // 2


class PriorityQueue{
    constructor(){
        this.queue=[]
    }

    enqueue(value,priority){
        this.queue.push({value,priority})
        this.queue.sort((a,b)=>a.priority-b.priority)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
       return this.queue.shift().value
    }

    isEmpty(){
        return this.queue.length===0
    }
    peek(){
        return this.queue[0].value
    }

    size(){
        return this.queue.length
    }
}

const queue=new PriorityQueue()
queue.enqueue('aa',2)
queue.enqueue('bb',1)
queue.enqueue('cc',1)

console.log('size of queue'+ queue.size())
console.log('peek of queue'+ queue.peek())
console.log('deque value'+ queue.dequeue())


