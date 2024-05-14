console.log('Bit O notation: Logarithmic O(log n):  The runtime grows logarithmically as the input increases.');
console.log('Example: Binary search.');

const arrLogarithmic: number[] = [10,34,5,6,2,55,21];

function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.time('binarySearch');
const resultLogarithmic = binarySearch(arrLogarithmic, 55);
console.timeEnd('binarySearch');

console.log(`The result is: ${resultLogarithmic}`);