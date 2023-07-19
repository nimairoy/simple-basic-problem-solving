// You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

// a) output 
console.log(indexOf(fruits))

fruits[1] = "Mango"; // a) finded the index of 'Banana' and replaced it with 'Mango'
console.log(fruits[1]) // a)  output Mango

fruits[2] = "Watermelon"; // b) finded the index of 'Orange' and replaced it with 'Watermelon'
console.log(fruits[2]) // b) output Watermelon

console.log(fruits) // new array output is [ 'Apple', 'Mango', 'Watermelon' ]