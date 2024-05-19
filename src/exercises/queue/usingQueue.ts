import { Queue } from "../classes/Queue";

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue(); // 1 2 3
console.log(queue.dequeue()); // 1
queue.printQueue(); // 2 3