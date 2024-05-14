console.log('Bit O notation: Quadratic O(n^2): The runtime grows quadratically with the size of the input.');
console.log('Example: Bubble sort, insertion sort.');

const arrbubleSort: number[] = [10,34,5,6,2,55,21];

function bubleSort(arr: number[]): number[] {
    const n = arr.length;
    for(let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j +1], arr[j]];
            }
        }
    }
    return arr;
}

console.time('bubleSort');
const resultBubleSort = bubleSort(arrbubleSort);
console.timeEnd('bubleSort');
console.log(`The result is: ${resultBubleSort}`);