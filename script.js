// Take an array of numbers and return the sum.
function sumArray(numbers){
    return numbers.reduce((total, current) => total + current, 0);
}
// Usage
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15

// Take an array of numbers and return the average.
function avgArray(numbers) {
    const sum = numbers.reduce((total, current) => total + current, 0);
    return sum / numbers.length;
}
const numbers2 = [1, 2, 3, 4, 5];
console.log(avgArray(numbers));

// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
