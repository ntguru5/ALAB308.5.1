// PART 1 Thinking Functionally

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

// PART 2 Thinking Methodically
// For the tasks below, use the following data to test your work:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Use callback functions alongside Array methods to accomplish the following:

// Filter the array to remove entries with an age greater than 50.
// Map the array to change the 'occupation' key to "job" and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

const arr = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
    ]


// ========= Sort the array by age
arr.sort((a, b) => Number(a.age) - Number(b.age));
console.log(arr);


// ========= Filter the array to remove entries with an age greater than 50
const filteredArr = arr.filter((person) => Number(person.age) <= 50);
console.log(filteredArr);


// ========= Map the array to change the 'occupation' key to "job" and increment every age by 1
const updatedArr = arr.map(person => ({
    // ...person,
    id: person.id,
    name: person.name,
    job: person.occupation, // rename occupation to job, order it before age
    age: Number(person.age) + 1, // increment age by 1
    })
);

updatedArr.forEach(person => delete person.occupation);
console.log(updatedArr);


// ========= Use the reduce method to calculate the sum of the ages
const totalAge = arr.reduce((sum, person) => {
    return sum + Number(person.age);
}, 0); // Initial sum is 0

console.log(`Sum total age: ${totalAge}`); //Output: 254


// ========= Then use the result to calculate average age (continuation of previous exercise)
const avgAge = totalAge / arr.length;
console.log(`Average age: ${(avgAge).toFixed(2)}`);
