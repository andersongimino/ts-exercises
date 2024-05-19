import { MinHeap } from "../classes/Heap";

const minHeap = new MinHeap();
minHeap.insert(3);
minHeap.insert(1);
minHeap.insert(2);
console.log(minHeap.extractMin()); // 1
console.log(minHeap.extractMin()); // 2
console.log(minHeap.extractMin()); // 3