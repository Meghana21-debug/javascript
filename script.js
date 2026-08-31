

/*
1. What is a variable in JavaScript?

A variable is a named container used to store data.
*/

let age = 25;


/*
2. What are the three keywords used to create variables?

var
let
const
*/


/*
3. Write the syntax to create a variable using var.
*/

var name = "John";


/*
4. Write the syntax to create a variable using let.
*/

let city = "Chennai";


/*
5. Write the syntax to create a variable using const.
*/

const country = "India";


/*
6. What is declaration?

Declaration means creating a variable without giving it a value.
*/

let sal;


/*
7. What is initialization?

Initialization means giving a value to a variable for the first time.
*/

let marks = 90;


/*
8. What is reassignment?

Reassignment means changing the existing value of a variable.
*/

let number = 100;
number = 200;


/*
9. What is redeclaration?

Redeclaration means declaring the same variable again.
*/


/*
10. Which keyword allows redeclaration?

var
*/


/*
11. Which keyword allows reassignment?

var and let
*/


/*
12. Which keyword requires initialization when declared?

const
*/


/*
13. Identify the declaration and initialization:

let age = 25;

Declaration → let age
Initialization → 25
*/

let studentAge = 25;


/*
14. What is the value of a?
a vlaue is 100*/




var a = 100;
console.log(a);


/*
15. Change the value of this variable to 200:

let number = 100;
*/

let Number = 100;
Number = 200;


/*
16. What will be the output?

var a = 10;
console.log(a);

Output: 10
*/

var varA = 10;
console.log(varA);


/*
17. What will be the output?

var a = 10;
a = 20;
console.log(a);

Output: 20
*/

/*
18. What will be the output?

var a = 10;
var a = 30;
console.log(a);

Output: 30
*/


/*
19. Write a var variable named name with the value "John".
*/

var personName = "John";


/*
20. Create a var variable named price with the value 500.
*/

var price = 500;


/*
21. Reassign price from 500 to 1000.
*/

price = 1000;


/*
22. What will be the output?

var x = 50;
x = 100;
console.log(x);

Output: 100
*/

var x = 50;
x = 100;
console.log(x);


/*
23. Can a var variable be reassigned?

Yes.
*/

var varValue = 10;
varValue = 20;


/*
24. Can a var variable be redeclared?

Yes.
*/

var redeclareVar = 10;
var redeclareVar = 20;


/*
25. Write an example of var redeclaration.
*/

var firstName = "John";
var firstName = "David";

console.log(firstName);
/*
26. Create a let variable named age with the value 25.
*/

let letAge = 25;


/*
27. What will be the output?

let age = 20;
age = 30;
console.log(age);

Output: 30
*/

let anotherAge = 20;
anotherAge = 30;
console.log(anotherAge);


/*
28. Can a let variable be reassigned?

Yes.
*/

let letNumber = 10;
letNumber = 20;


/*
29. Can a let variable be redeclared?

No.
*/


/*
30. Find the error:

let name = "John";
let name = "David";

Error:
Identifier 'name' has already been declared.

Correct:
let name = "John";
name = "David";
*/

let letName = "John";
letName = "David";


/*
31. Create a let variable called city and assign "Chennai".
*/

let letCity = "Chennai";


/*
32. Change the value of city to "Salem".
*/

letCity = "Salem";


/*
33. What will be the output?

let x = 10;
x = 50;
console.log(x);

Output: 50
*/

let letX = 10;
letX = 50;
console.log(letX);


/*
34. Write a let variable called salary with the value 25000.
*/

let letSalary = 25000;


/*
35. Reassign salary to 30000.
*/

letSalary = 30000;



/*
36. Create a const variable called pi with the value 3.14.
*/

const pi = 3.14;


/*
37. Can a const variable be reassigned?

No.
*/


/*
38. Can a const variable be redeclared?

No.
*/


/*
39. What is wrong with this code?

const age;
age = 25;

const must be initialized when it is declared.

Correct:
const age = 25;
*/

const constAge = 25;


/*
40. What happens here?

const price = 500;
price = 1000;

This causes an error because const cannot be reassigned.
*/


/*
41. Create a const variable called country with the value "India".
*/

const constCountry = "India";


/*
42. What will be the output?

const x = 100;
console.log(x);

Output: 100
*/

const constX = 100;
console.log(constX);


/*
43. Which keyword should you use if the value should not be reassigned?

const
*/

const permanentValue = 500;


/*
44. What is the difference between let and const?

let:
- Can be reassigned
- Cannot be redeclared in the same scope

const:
- Cannot be reassigned
- Cannot be redeclared in the same scope
*/


/*
45. What is the difference between var and const?

var:
- Can be reassigned
- Can be redeclared
- Can be declared without initialization

const:
- Cannot be reassigned
- Cannot be redeclared
- Must be initialized when declared
*/

/*
46. Write JavaScript code to print Hello World using console.log().
*/

console.log("Hello World");


/*
47. Write JavaScript code to print the number 500 using console.log().
*/

console.log(500);


/*
48. What is the purpose of console.warn()?

console.warn() is used to display a warning message.
*/

console.warn("This is a warning");


/*
49. What is the purpose of console.error()?

console.error() is used to display an error message.
*/

console.error("Something went wrong");


/*
50. What is the purpose of each?

alert()
prompt()
confirm()
document.writeln()
console.log()
*/


/*
alert()
Displays a message in a popup box.
*/

alert("Hello");


/*
prompt()
Allows the user to enter input.
*/

let userName = prompt("Enter your name");
console.log(userName);


/*
confirm()
Displays OK and Cancel buttons.
Returns true for OK and false for Cancel.
*/

let result = confirm("Are you sure?");
console.log(result);


/*
document.writeln()
Writes content directly to the HTML document.
*/

document.writeln("Hello World");


/*
console.log()
Prints information in the browser console.
*/

console.log("JavaScript Basics");
//
let studentName="meghana";
var age=22;
let mark=25;
console.log(studentName);
console.log(age);
console.log(mark);
var name=prompt("enter your name:");
alert("your name is "+ name);
var age=prompt("enter your age");
console.log(age);
let answer=confirm("are you a student");
console.log(answer);
var name=prompt("enter your name");
document.writeln(name);
