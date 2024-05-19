import { Stack } from "../classes/Stack";

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack(); // 1 2 3
console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
stack.printStack(); // 1
