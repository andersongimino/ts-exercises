console.log('Bit O notation: Constant O(1): The runtime does not change with the size of the input.');
console.log('Example: Accessing a specific element in an array.');

const arr: number[] = [10,34,5,6,2,55,21];

function getFirstElement(arr: number[]): number {
    return arr[0];
}

console.time('getFirstElement');
const result = getFirstElement(arr);
console.timeEnd('getFirstElement');
console.log(`O resultado é: ${result}`);