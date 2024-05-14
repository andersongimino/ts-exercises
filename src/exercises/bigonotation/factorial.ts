console.log('Bit O notation: Factorial O(n!): The runtime grows factorially with the size of the input.');
console.log('Example: Permutation of a list.');

function generatePermutations(arr: number[]): number[][] {
    const result: number[][] = [];

    if (arr.length === 0) {
        return [[]];
    }

    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const remainingPerms = generatePermutations(remaining);

        for (const perm of remainingPerms) {
            result.push([current, ...perm]);
        }
    }

    return result;
}

console.time('generatePermutations');
const resultPermutations = generatePermutations([1,2,3]);
console.timeEnd('generatePermutations');
console.log(`The result is: ${resultPermutations}`);