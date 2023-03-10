// question 1

// Mutating array methods
/** 
 Mutating array methods are methods that modify the original array by adding, removing, or changing elements in the array. These methods typically have names that indicate that they are mutating the original array. Mutating array methods change the length of the array and can have side effects on other parts of the code that reference the original array. Examples are: 
 push(), pop(), shift(), unshift(), splice().
**/

// Non-mutating array methods
/** 
 Non-mutating array methods, on the other hand, do not modify the original array. Instead, they return a new array or a new value based on the original array. These methods typically have names that indicate that they are not mutating the original array. Non-mutating array methods do not change the length of the array and are generally considered to be safer to use than mutating methods, as they do not have side effects on the original array.
 Examples: 
 concat(), slice(), filter(), map(), indexOf().
**/

// question 2

let languages= ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// add Kotlin to the end of the array

let addKotlin = 'Kotlin'
languages.push(addKotlin);
console.log(languages);

// add Java at the end of Ruby

let addJava = languages.splice(3,0, 'Java');
console.log(languages);

// remove the first item in the array

let removeFirstItem = languages.shift();
console.log(languages);

// Add ’Scala’ and ‘Swift’ to the beginning of the array

let addScala = "Scala";
let addSwift = "Swift";
languages.unshift(addScala, addSwift);
console.log(languages);

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
let php = languages.indexOf("PHP");

let replacePhp = languages.splice(php, 1, "Go", "Rust");
console.log(languages);

// question 3

// What will be the value of fruit after calling the function changeFruit?

let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit(fruit));

// Answer

// The value of fruit after calling the function changeFruit will be ["apple","mango", "orange"]

// question 4

const arrayOfNum = (array) => {
    return Math.max(...array);

    // Aternative

    // let maxNum = -Infinity;
    // for (let i = 0; i < array.length; i++) {
    //     if (typeof array[i] === 'number') {
    //        maxNum = Math.max(maxNum, array[i]);
    //     }
    // }
    // return maxNum;
}

console.log(arrayOfNum([9, 16, 12, 28, 7]));

// question 5

// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array

const valTimesIndex = (multiplyByIndex) => {
    return multiplyByIndex.map((value, index) => 
    value * index);
}

let numbers = valTimesIndex([1, 2, 3, 4]);
console.log(numbers); 