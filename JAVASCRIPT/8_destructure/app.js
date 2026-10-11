
let student = {
    sname : "dhoni",
    age : 7 , 
    isPlayer : true,
    skills : ["math","rhymes","gk","drawing"]
}

console.log(student.sname)
console.log(student["age"])

 
let {sname ,skills,isPlayer,age} = student

console.log(sname)
console.log(age)
console.log(skills)


// !    Rest Parameter  (...)

function f1(a,b,...c)       // c = [30,40,50]
{
  console.log(a); // 10
  console.log(b); // 20
  console.log(c);  // [30,40,50]
}

f1(10,20,30,40,50)

// example with reduce method
function add(...numbers) {
    return numbers.reduce((sum, ele) => sum + ele, 0);
}

console.log(add(10, 20, 30));   //60

Trace:
// numbers = [10, 20, 30]
// sum = 0
// 0 + 10 = 10
// 10 + 20 = 30
// 30 + 30 = 60


console.log("-------------------------------------")

// ! Spread Operator

let frontend = ["html","css","js","react"]
let backend = ["node","express","mongodb"]

console.log(frontend)      // [ 'html', 'css', 'js', 'react' ]
console.log(...frontend)  // html css js react


// ! merge two arrays by using spread

let fullstack = [...frontend,...backend]
console.log(fullstack) // ['html','css','js','react','node','express','mongodb']


// ! merge two objects by using spread

let ob1 ={
    obname : "pen"
}

let ob2 ={
    price : 30
}

let ob3 = {...ob1,...ob2}
console.log(ob3)
console.log("--------------------------------")

// ! shallow copy  and Deep copy


// let subjects = ["java","python","sql"]

// let copy = [...subjects];
// // let copy = ["java","python","sql"]

// copy.push("webtech")

// console.log(copy)
// console.log(subjects)

let person1 = {
    name: "Raja",
    address: {
        city: "Chennai"
    }
};

//A shallow copy creates a new outer object, 
//but nested objects are still shared between the original and copied object.
let person2 = { ...person1 };
console.log(person1)     //{ name: 'Raja', address: { city: 'Chennai' } }
console.log(person2)     // { name: 'Raja', address: { city: 'Chennai' } }
console.log(person1==person2)  // false

let person3 = {age : 20 , ...person1}
console.log(person3)     //{ age: 20, name: 'Raja', address: { city: 'Chennai' } }
console.log(person1)     //{ name: 'Raja', address: { city: 'Chennai' } }