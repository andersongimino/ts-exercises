console.log('Bit O notation: Linear O(n): The runtime grows linearly with the size of the input.');
console.log('Example: Traversing all elements in an array.');

const arrLinear: number[] = [10,34,5,6,2,55,21];

function findMax(arr: number[]): number {
    let maxVal = arr[0];
    for (const num of arr) {
        if (num > maxVal) {
            maxVal = num;
        }
    }
    return maxVal;
}

console.time('findMax');
const resultLinear = findMax(arrLinear);
console.timeEnd('findMax');
console.log(`The result is: ${resultLinear}`);