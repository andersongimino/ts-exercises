export class Graph {
    adjacencyList: Map<any, any[]>;

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex: any) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1: any, vertex2: any) {
        if (this.adjacencyList.has(vertex1)) {
            this.adjacencyList.get(vertex1)!.push(vertex2);
        }
        if (this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex2)!.push(vertex1);
        }
    }

    printGraph() {
        for (const [vertex, edges] of this.adjacencyList) {
            console.log(`${vertex} -> ${edges.join(', ')}`);
        }
    }
}
