// OSCAR POCO

//Exercise 1

let number = 20;

let floatNumber = 9.75;
// I wrote 9.95 because float number is any number with a decimal place


// On this coming code I won't be using a single line code because there a lot of operators more than 4

let sum = number + 2;

let product = number * 2;

let quotient = number / 2;

let difference = number - 2;

let modulus = number % 2;
// Modulus is the remainder after you divided the number eg 20 / 2 = 10 , because the 2 goes 10 times in 20 without any remainder the modulus is 0 (20 % 2 = 0)
// but when you say 20 / 3 = 6.7, this means 3 goes into 20 6 times with a remainder of 2, so the remainder is our modulus where 20 % 3 = 2

let exponential = number ** 2;
// we use double * for exponents in programming languages

// I will first print the first 2 declared variables
console.log("Number:", number), console.log("Float Number:", floatNumber); // Number: 20 , Float Number: 9.75

console.log("Sum is:", sum), console.log("product is:", product); // Sum is: 22, product is: 40
console.log("difference is:", difference), console.log("Quotient is:", quotient); // difference is: 18, quotient is: 10
console.log("Modulus is:", modulus), console.log("exponentiation is:", exponential); // modulus is: 0, exponentiation is: 400



// Exercise 2

let x = 8, y = 12;

let isXGreaterThanY = x > y;

let isXLessThanOrEqualToY = x <= y;

let isXEqualToY = x === y;
// 1 equal sign is for assigning,  3 equal signs are for comparison

let isXNotEqualToY = x !== y;  

console.log("is x greater than y:", isXGreaterThanY); // False
console.log("is x less than or equal to y:", isXLessThanOrEqualToY); // True
console.log("is x equal to y:", isXEqualToY); // False
console.log("is x not equal to y:", isXNotEqualToY); // True


// 2.3

let a = true, b = false;

console.log("a AND b:", a && b);
//we use && for AND in JS, this print will display both true and false

console.log("a OR b:", a || b);
// for OR in JS we use ||, this print will display either true or false

console.log("Not a", !a);
// This print will display false


//2.4

let p = 10;

p += 2; // this code is simple like this p = p + 2, where p= 10, so basically is 10+2=12
console.log(p); // 12 ..... since p = 12, we going to use 12 instead of 10 on our next code

p -= 2; // 12 - 2
console.log(p); // 10

p *= 2; 10 * 2
console.log(p); // 20

p /= 2; 20 / 2
console.log(p); // 10

p %= 2; 10 % 2
console.log(p); // 0
