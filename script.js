// ========= Take an array of numbers and return the sum.
function sumArray(numbers){
    return numbers.reduce((total, current) => total + current, 0);
}
// Usage
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15

// ========= Take an array of numbers and return the average.
function avgArray(numbers) {
    const sum = numbers.reduce((total, current) => total + current, 0);
    return sum / numbers.length;
}

const numbers2 = [1, 2, 3, 4, 5];
console.log(avgArray(numbers)); // Output: 3

// ========= Take an array of strings and return the longest string.
function longestString(strings) {
    return strings.reduce((longest, current) =>
        current.length > longest.length ? current : longest, ""
    );
}

const strings = ["apple", "banana", "grape", "strawberry"];
console.log(longestString(strings)); //Output: strawberry

// ========= Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}

console.log(stringLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); //Output: ["hello", "morning"]

// ========= Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printNumbers(n, current = 1) {
    if (current > n) {
        return; // stop when current exceeds n
    } console.log(current);
    printNumbers(n, current + 1);
};

printNumbers(5); // Output 1, 2, 3, 4, 5 on separate lines
