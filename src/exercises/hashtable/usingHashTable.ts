import { HashTable } from "../classes/HashTable";

const hashTable = new HashTable();
hashTable.set('name', 'Alice');
hashTable.set('age', 30);
console.log(hashTable.get('name')); // Alice
hashTable.remove('age');
hashTable.print(); // { name: 'Alice' }