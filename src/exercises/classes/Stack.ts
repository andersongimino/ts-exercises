export class Stack {
    items: any[];

    constructor() {
        this.items = [];
    }

    push(element: any) {
        this.items.push(element);
    }

    pop(): any | undefined {
        return this.items.pop();
    }

    peek(): any | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    printStack() {
        console.log(this.items.join(' '));
    }
}