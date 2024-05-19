export class HashTable {
    table: { [key: string]: any };

    constructor() {
        this.table = {};
    }

    set(key: string, value: any) {
        this.table[key] = value;
    }

    get(key: string): any | undefined {
        return this.table[key];
    }

    remove(key: string): any | undefined {
        const value = this.table[key];
        delete this.table[key];
        return value;
    }

    print() {
        console.log(this.table);
    }
}
