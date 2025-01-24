// multiplication table
// let num = 9;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// polindrome check
// let string = "madam";
// let isPalindrome = string === string.split("").reverse().join("");

// if (isPalindrome) {
//     console.log(`${string} is a palindrome.`);
// } else {
//     console.log(`${string} is not a palindrome.`);
// }

// convert cm to km
// let cm = 100000
// let km = cm / 1000000
// console.log(`${cm} -> "${km} km" `)

// format number as currency
// let number = 1000
// let formattedNumber = new Intl.NumberFormat('id-ID',{
//     style: 'currency',
//     currency: 'IDR',
// }).format(number)

// console.log(formattedNumber)

// remove first occurrence of a substring
// let mainString = "Hello world"
// let searchString = "ell"

// let resultString = mainString.replace(searchString, "");
// console.log(`"${mainString}", "${searchString}" -> "${resultString}"`)

// capitalize first letter of each word
// let sentence = "hello world";

// let capitalizedSentence = sentence
//   .split(" ")
//   .map(word => word[0].toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(capitalizedSentence); 

//swap the case of each character
// let input = "The QuiCk BrOwN Fox";

// let swappedCase = input
//   .split("")
//   .map(char => 
//     char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
//   )
//   .join("");

// console.log(swappedCase);

// find the largest of two integers
// let num1 = 42, num2 = 27

// if (num1 > num2) {
//   console.log(num1); 
// }else {
//   console.log(num2); 
// }

// sort three number
// let num1 = 42, num2 = 27, num3 = 18;

// let sortedNumbers = [num1, num2, num3].sort((a, b) => a - b);
// console.log(sortedNumbers);

// check data type
// let input = "hello";

// let result = typeof input === "string" 
//   ? 1 
//   : typeof input === "number" 
//   ? 2 
//   : 3;

// console.log(result);


// replace every letter 'a' with '*'

// let input = "An apple a day keeps the doctor away";
// let replacedString = input.replace(/a/gi, "*");

// console.log(replacedString);
