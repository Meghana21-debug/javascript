//Task-1

var studentname="meghana"
let studentage=25
const collegename="vits"
console.log(studentname)
console.log(studentage)
console.log(collegename)
studentname="aadya"
studentage=22;
//collegename="vit"
console.log(studentname)
console.log(studentage)
var studentname="sai"
//let studentage=34

//Task-2
let Name=prompt("enter your name:");
let Age=prompt("enter your age:");
let City=prompt("enter your city:");
console.log(Name)
console.log(Age)
console.log(City)

//task-3
let UserName=prompt("enter your name")
alert("Welcome"+ UserName +"!")

//Task-4
let birthyear=prompt("enter your birth year:")
let currentyear=2026
let currentage=currentyear-birthyear
console.log("Birth Year:",birthyear)
console.log("Your Current Age:" ,currentage)

//Task-5
let text="Hello";
let number=100
let decimal=25.5
let boolTrue=true
let boolFalse=false
let undefine;
let value=prompt()
let value1=null;
console.log(typeof(text))
console.log(typeof(number))
console.log(typeof(decimal))
console.log(typeof(boolTrue))
console.log(typeof(boolFalse))
console.log(typeof(undefine))
console.log(value)
console.log(typeof(value1))

//Task-6
let student={
    name:"meghana",
    age:23,
    qualification:"btech",
    isStudent:true
}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.qualification)
console.log(student.isStudent)

//Task 7

let fruits=["Apple","Mango","orange","Banana","Grapes","Papaya"]
console.log("First fruit is:",fruits[0])
console.log("Second fruit is:",fruits[1])
console.log("last fruit is:",fruits[fruits.length-1])
console.log("Total No.of fruits is:",fruits.length)

//task-8
let a=20;
let b=5;
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

//Task-9
let shirt=999
let  pant=1499
let shoes=1999
let totalprice=shirt+pant+shoes
console.log("Total:",totalprice)


//Task-10
let Tamil=80
let English=75
let Maths=90
let Totalmarks=Tamil+English+Maths
let avg=Totalmarks/3
console.log("Total Marks:",Totalmarks);
console.log("Average marks:",avg)


//Task-11
let a1=10;
let b1=a1++;
console.log(a1)
console.log(b1)

//Task=12
let a2=10
let b2=++a2
console.log(a2)
console.log(b2)

//Task-13
let a3=20;
let b3=a3--
console.log(a3)
console.log(b3)

//Task=14
let a4=20
let b4=--a4
console.log(a4)
console.log(b4)

//Task-15
let a5=5;
let b5=a5++;
let c=++a5;
let d=b5--;
console.log(a5)//7
console.log(b5)//4
console.log(c)//7
console.log(d)//5

//Task-16
let num=10
num+=5
console.log(num)
num-=5
console.log(num)
num*=5
console.log(num)
num/=5
console.log(num)
num%=5
console.log(num)
num**=5
console.log(num)


//task=17
let Name1="meghana"
let age1=22
let city1="kavali"
let college1="vits"
let subjects=["python","java","html","css","javascript"]
let employee={
    name:Name1,
    age:age1,
    city:city1,
    college:college1
}
console.log("Student name:",employee.name)
console.log("Student age:",employee.age)
console.log("Student city:",employee.city)
console.log("First subject:",subjects[0])
console.log("Last subject:",subjects[subjects.length-1])
console.log("Total subjects:",subjects.length)
console.log("Complete subjects",subjects)

//Final Challenge
let num1=+prompt("Enter first number:")
let num2=+prompt("Enter Second number:")
console.log("First number:",num1);
console.log("Second number:",num2);
console.log("Addition:",num1+num2);
console.log("Subtraction:",num1-num2);
console.log("Multiplication:",num1*num2);
console.log("Division:",num1/num2);
console.log("Modulus:",num1%num2);
console.log("Power:",num1**num2);















