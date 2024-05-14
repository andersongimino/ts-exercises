console.log('Bit O notation: Linearithmic: O(n log n): Common in efficient sorting algorithms.');
console.log('Example: Merge sort, quicksort (on average)');

const arrMergeSort: number[] = [10,34,5,6,2,55,21];

function mergeSort(arr: number[]): number[] {
    if(arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.time('mergeSort');
const resultLinearithmic = mergeSort(arrMergeSort);
console.timeEnd('mergeSort');

console.log(`The result is: ${resultLinearithmic}`);