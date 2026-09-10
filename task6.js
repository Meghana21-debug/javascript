

// TASK 1 — STUDENT RESULT ANALYZER
let name=prompt("enter your name:")
let department=prompt("enter your department:")
let sub1=Number(prompt("enter your sub1:"))
let sub2=Number(prompt("enter your sub2:"))
let sub3=Number(prompt("enter your sub3:"))
let sub4=Number(prompt("enter your sub4:"))
let sub5=Number(prompt("enter your sub5:"))

let marks=[sub1,sub2,sub3,sub4,sub5]
let total=0
 let result="Pass"
for(let mark of marks)
{
    total+=mark
    
    if(mark<50)
    {
        result="Fail"
    }
}

let avg=total/5
let grade;
if (result === "Fail") {
        grade = "Fail";
    } else if (avg >= 90) {
        grade = "A";
    } else if (avg >= 75) {
        grade = "B";
    } else if (avg >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
    console.log("Total:", total);
    console.log("Average:", avg);
    console.log("Result:", result);
    console.log("Grade:", grade);




//Task 2
let employee={
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
}

function calculateSalary(employee){
   let basicsalary=employee.salary
   let bonus;
   if(employee.experience>=5){
    bonus=basicsalary*0.15
   }
    else if(employee.experience>=2){
    bonus=basicsalary*0.10
   }
   let finalsalary=basicsalary+bonus
   console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicsalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalsalary);
   

}
calculateSalary(employee)

//Task 3

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];
let filterresult=products.filter((c,i,t)=>{
    if(c.price>2000)
    {
        return c;
    }
   
})

let filterresult1=products.filter((c,i,t)=>{
    if(c.category=="electronics")
    {
        return c;
    }
   
})
let find=products.find((c)=>{
    if(c.price<=1000)
    {
        return c;
    }
})

let totalprice=products.reduce((total,product)=>{
   return total+product.price
},0)

let anyProductAbove50000 = products.some(product => product.price > 50000);
console.log(anyProductAbove50000)

let everyProductAbove500 = products.every(product => product.price > 500);
console.log(everyProductAbove500)

let productsAbove2000 = products.filter(product => product.price > 2000);

let electronics = products.filter(product => product.category === "electronics");

let firstProductBelow1000 = products.find(product => product.price < 1000);

let totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

console.log("Products above ₹2,000:", filterresult);
console.log("Electronics:", filterresult1);
console.log("First product below ₹1,000:", find);
console.log("Total price:", totalprice);
console.log("Any product above ₹50,000:", anyProductAbove50000);
console.log("Every product above ₹500:", everyProductAbove500);


//Task 4 — Employee Management
let employees = [
    { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
    { id: 102, name: "Arun", role: "Backend Developer", salary: 55000 },
    { id: 103, name: "Priya", role: "HR Manager", salary: 60000 },
    { id: 104, name: "Dinesh", role: "Designer", salary: 35000 },
    { id: 105, name: "Meena", role: "Tester", salary: 45000 },
    { id: 106, name: "Ravi", role: "Team Lead", salary: 75000 }
];
let displaynames=employees.map((employee)=>{
    return employee.name
    
})
let empabove40000=employees.filter((employee)=>{
   if(employee.salary>40000){
    return employee
   }
})
let findempid=employees.find((employee)=>{
   if(employee.id==103){
    return employee
   }
})
let totalsalary=employees.reduce((total,employee)=>{
   return total+employee.salary
   
},0)
let highestPaidEmployee = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});

let sortedEmployees = [...employees].sort(
    (a, b) => b.salary - a.salary
);


console.log("Employee names:",displaynames);
console.log("Employees earning above ₹40,000:", empabove40000);
console.log("Employee with ID 103:", findempid);
console.log("Total salary:", totalsalary);
console.log("Highest-paid employee:", highestPaidEmployee);
console.log("Sorted employees:", sortedEmployees);

//Task 5 — Shopping Cart


let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
    let itemTotals = cart.map(item => {
        return {
            name: item.name,
            itemTotal: item.price * item.quantity
        };
    });

    let totalCartValue = itemTotals.reduce(
        (total, item) => total + item.itemTotal,
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
    }

    let finalPayableAmount = totalCartValue - discount;

    
    console.log("Item totals:", itemTotals);
    console.log("Total cart value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final payable amount:", finalPayableAmount);

    return finalPayableAmount;
}

calculateCart(cart);

//Task 6 — Student Search System

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let allStudentNames = students.map(student => student.name);

let studentsAbove80 = students.filter(student => student.mark > 80);

let studentPriya = students.find(student => student.name === "Priya");

let averageMark = students.reduce(
    (total, student) => total + student.mark,
    0
) / students.length;

let anyoneFailed = students.some(student => student.mark < 50);

let everyoneAbove40 = students.every(student => student.mark > 40);

let studentsSortedByMarks = [...students].sort(
    (a, b) => b.mark - a.mark
);

console.log("All student names:", allStudentNames);
console.log("Students above 80:", studentsAbove80);
console.log("Student Priya:", studentPriya);
console.log("Average mark:", averageMark);
console.log("Anyone failed:", anyoneFailed);
console.log("Everyone scored above 40:", everyoneAbove40);
console.log("Students sorted by marks:", studentsSortedByMarks);

//Task 7 — Array Transformation Challenge
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubledNumbers = numbers.map(number => number * 2);

let evenNumbers = numbers.filter(number => number % 2 === 0);

let numbersAbove15 = numbers.filter(number => number > 15);

let firstNumberAbove20 = numbers.find(number => number > 20);

let totalNumbers = numbers.reduce(
    (total, number) => total + number,
    0
);

let anyNumberAbove40 = numbers.some(number => number > 40);

let everyNumberPositive = numbers.every(number => number > 0);

let numbersHighToLow = [...numbers].sort((a, b) => b - a);

console.log("Doubled numbers:", doubledNumbers);
console.log("Even numbers:", evenNumbers);
console.log("Numbers above 15:", numbersAbove15);
console.log("First number above 20:", firstNumberAbove20);
console.log("Total:", totalNumbers);
console.log("Any number above 40:", anyNumberAbove40);
console.log("Every number positive:", everyNumberPositive);
console.log("High to low:", numbersHighToLow);

//Task 8 — String Analyzer

let sentence = "JavaScript is very powerful"

let totalCharacters = sentence.length;

let uppercaseSentence = sentence.toUpperCase();

let lowercaseSentence = sentence.toLowerCase();

let containsJavaScript = sentence.includes("JavaScript");


let firstCharacter = sentence.slice(0, 1);


let lastCharacter = sentence.slice(-1);


let words = sentence.trim().split("(/\s+/ ");

let numberOfWords = sentence.trim() === "" ? 0 : words.length;


let replacedSentence = sentence.replace("JavaScript", "Python");


console.log("Total characters:", totalCharacters);

console.log("Uppercase:", uppercaseSentence);

console.log("Lowercase:", lowercaseSentence);

console.log("Contains JavaScript:", containsJavaScript);

console.log("First character:", firstCharacter);

console.log("Last character:", lastCharacter);

console.log("Number of words:", numberOfWords);

console.log("Replaced sentence:", replacedSentence);

console.log("Sentence array:", words);

//final
let dashboardEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

function employeeDashboard(employees) {

    
    console.log("1. Employee List");
    console.log(employees);


    let searchName = "Arun";

    let searchedEmployee = employees.find(
        employee => employee.name.toLowerCase() === searchName.toLowerCase()
    );

    console.log("\n2. Search Result:", searchedEmployee);

    let departmentEmployees = employees.filter(
        employee => employee.department === "IT"
    );

    console.log("\n3. IT Employees:", departmentEmployees);

    
    let highSalaryEmployees = employees.filter(
        employee => employee.salary > 50000
    );

    console.log("\n4. Employees earning more than ₹50,000:", highSalaryEmployees);

    
    let totalCompanySalary = employees.reduce(
        (total, employee) => total + employee.salary,
        0
    );

    console.log("\n5. Total Company Salary:", totalCompanySalary);

    
    let highestSalaryEmployee = employees.reduce((highest, employee) => {
        return employee.salary > highest.salary ? employee : highest;
    });

    console.log("\n6. Highest-Paid Employee:", highestSalaryEmployee);

    let experiencedEmployees = employees.filter(
        employee => employee.experience > 3
    );

    console.log("\n7. Employees with more than 3 years:", experiencedEmployees);

   
    let lowToHigh = [...employees].sort(
        (a, b) => a.salary - b.salary
    );

    let highToLow = [...employees].sort(
        (a, b) => b.salary - a.salary
    );

    console.log("\n8. Salary Low → High:", lowToHigh);
    console.log("Salary High → Low:", highToLow);

    let averageSalary = totalCompanySalary / employees.length;

    console.log("\n9. STATISTICS");
    console.log("Total Employees:", employees.length);
    console.log("Total Salary: ₹" + totalCompanySalary);
    console.log("Highest Salary: ₹" + highestSalaryEmployee.salary);
    console.log("Average Salary: ₹" + Math.round(averageSalary));
}

employeeDashboard(dashboardEmployees);