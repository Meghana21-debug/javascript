//  Variables & Data Types (Questions 1-8)


// Q1: What is the difference between var, let, and const?

// var: Can be re-declared and re-assigned.
// let: Cannot be re-declared, but can be re-assigned.
// const: Cannot be re-declared or re-assigned.
// var is function-scoped. let and const are block-scoped.

// Q2: Can you re-declare a variable with var? What about let and const?

// Yes, var can be re-declared.
// let and const cannot be re-declared in the same program.

// Q3: What is the output of this code?

// In this code,const is re-assigned.We can't reassign const it gives an  error.
// So, this code gives an error at z = 30.
// console.log() will not execute.

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
//z = 30; //Here gives an error

console.log(x, y, z); // witout z the code runs without an error.

// Q4: What is the difference between declaring and initializing a variable?

// Declaration means creating a variable.
// Initialization means giving a value to a variable for the first time.

let a1; // Declaration

a1 = 28; // Initialization

console.log(a1); 

// Q5: What will be the output?
// Here we  declared a varible but not initialized value to variable so it gives undefined.

let a;
console.log(a); // undefined

// Q6: What is hoisting? Give an example.
// Hoisting means In JavaScript declaration starts from from of the code
// var is hoisted and initialized with undefined.
// let and const are hoisted but cannot be accessed before declaration.

console.log(host); // undefined
var host = 10;

// Q7: What is the difference between null and undefined?
// undefined: A variable is declared but has no value.
// null: We intentionally assign an empty value.

let name;
let name1 = null;

console.log(name); // undefined
console.log(name1);  // null

// Q8: What will be the output?

// typeof null returns "object" because of a historical JavaScript behavior.
// typeof undefined returns "undefined".
// typeof [] returns "object".
// typeof {} returns "object".

console.log(typeof null);      // object
console.log(typeof undefined); // undefined
console.log(typeof []);        // object
console.log(typeof {});        // object

// Q9: What is the difference between == and ===?
// == checks value only and it doesn't checks datatype.
// === checks both value and data type.It is called strict equality.


console.log(5 == "5");  // true
console.log(5 === "5"); // false

// Q10: What is the difference between ++i and i++?
// ++i: Pre-increment. Increases the value first, then returns it.
// i++: Post-increment. Returns the value first, then increases it.

let i = 5;

console.log(++i); // 6
console.log(i);   // 6

let j = 5;

console.log(j++); // 5
console.log(j);   // 6

// Q11: What will be the output?
// + with a string performs string concatenation.
// -, *, and / convert the string to a number.

let x1= 10;
let y1 = "5";

console.log(x1 + y1); // 105
console.log(x1 - y1); // 5
console.log(x1* y1); // 50
console.log(x1 / y1); // 2


// Q12: What are logical operators? Explain with examples.
// && (AND): Both conditions must be true.
// || (OR): At least one condition must be true.
// ! (NOT): Reverses the result.

console.log(true && true);   // true
console.log(true && false);  // false

console.log(true || false);  // true
console.log(false || false); // false

console.log(!true);  // false
console.log(!false); // true


// Q13: What will be the output?

console.log(5 > 3 && 10 > 5); // true
console.log(5 > 10 || 10 > 5); // true
console.log(!(5 > 3)); // false


// Q14: What is the ternary operator? Give an example.
// Ternary operator is a short form of if-else.By using ternary operator we can create one line if-else block
// Syntax: condition ? valueIfTrue : valueIfFalse;

let age = 30;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult

//Type Casting (Questions 15-17)

// Q15: What is the difference between implicit and explicit type casting?

// Implicit type casting means JavaScript automatically converts the type.
// Explicit type casting means we manually convert the type.

console.log("10" + 5); // 105

console.log(Number("10") + 5); // 15

// Q16: What will be the output?

console.log(Number("123"));    // 123
console.log(Number("hello"));  // NaN
console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Boolean(0));       // false
console.log(Boolean("hello")); // true


// Q17: What is NaN? Give an example.

// NaN means Not a Number.
// It occurs when calculation did not produce valid number.
console.log(Number("meghana")); // NaN


//Conditional Statements (Questions 18-21)

// Q18: What is the difference between if-else and switch?

// if-else is used to check conditions.
// It is useful when we have ranges or different conditions.

// switch is used to compare one value with multiple fixed values.

// Ex:if-else:

let vote= 20;

if (age >= 18) {
    console.log("Eligible for vote");
} else {
    console.log("Not eligible");
}


// Ex: switch:

let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}

// Q19: What will be the output?

let studentAge = 20;

if (studentAge >= 18) {
    console.log("Adult"); // Adult
} else {
    console.log("Minor");
}

// Q20: What is nested if? Give an example?

// Nested if means writing one if statement inside another if statement.

let Marks = 80;

if (Marks >= 35) {
    if (Marks >= 70) {
        console.log("Passed with distinction");
    } else {
        console.log("Passed");
    }
} else {
    console.log("Failed");
}


// Q21: Write a program to check if a number is even or odd using ternary operator.

let number = 8;

let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";

console.log(evenOrOdd); // Even

//Loops (Questions 22-25)

// Q22: What is the difference between while and do-while?

// while checks the condition first.
// do-while executes the code first, then checks the condition.
// do-while runs at least once.

let count = 1;

while (count <= 3) {
    console.log(count);
    count++;
}

let count2 = 1;

do {
    console.log(count2);
    count2++;
} while (count2 <= 3);


// Q23: What will be the output?

for (let i = 1; i <= 5; i++) {
    console.log(i); // 1 2 3 4 5
}

// Q24: What is the difference between for-of and for-in?

// for-of is used to get values.
// for-in is used to get keys or indexes
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

for (let index in fruits) {
    console.log(index);
}

//Q25:Write a program to find sum of numbers from 1 to 100.
let sum=0
for(let i=1;i<=100;i++)
{
  sum+=i
}
console.log("sum of 1 to  100 :",sum)

//Arrays (Questions 26-27)
//Q26: What is the difference between slice and splice?

// slice(): Returns a new array without changing the original array.It represents to the user.
// splice(): Adds, removes, or replaces elements and changes the original array.

let arr1 = [10, 20, 30, 40, 50];

console.log(arr1.slice(1, 4)); // [20, 30, 40]
console.log(arr1); // [10, 20, 30, 40, 50]

let arr2 = [10, 20, 30, 40, 50];

arr2.splice(1, 2);

console.log(arr2); // [10, 40, 50]

// Q27: What will be the output?

let arr = [1, 2, 3];

arr.push(4);//1,2,3,4
arr.pop();//1,2,3
arr.unshift(0);//0,1,2,3
arr.shift();//1,2,3

console.log(arr); // [1, 2, 3]

//Functions (Questions 28-30)

// Q28: What is the difference between function declaration and function expression?
// Function declaration: A function is created using the function keyword.
// Function declarations can be called before they are declared.
// Function expression: A function is stored inside a variable.
// Function expressions cannot be called before initialization.

function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // 5



// Q29: What is an arrow function? Give an example.
// Arrow function is a shorter way to write a function.
// It uses => instead of the function keyword.

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 5)); // 20


// Q30: What will be the output?

function greet() {
    return "Hello";
}

let message = greet();

console.log(message); // Hello