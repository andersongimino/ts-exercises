console.log('Bit O notation: Exponential O(2^n): The runtime doubles with each increase in input.');
console.log('Example: Brute force algorithms for optimization problems, like solving puzzles.');

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time('fibonacci');
const resultFibonacci = fibonacci(10);
console.timeEnd('fibonacci');
console.log(`The result is: ${resultFibonacci}`);