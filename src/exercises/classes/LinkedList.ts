export class Node {
    value: any;
    next: Node | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}


export class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    append(value: any) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}
