export class Queue {
    items: any[];

    constructor() {
        this.items = [];
    }

    enqueue(element: any) {
        this.items.push(element);
    }

    dequeue(): any | undefined {
        return this.items.shift();
    }

    front(): any | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    printQueue() {
        console.log(this.items.join(' '));
    }
}