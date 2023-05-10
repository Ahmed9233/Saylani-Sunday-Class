// let name = prompt("What is Your Name :  ")
// let boob = " Salam ";
// let data = "";
// alert(boob + name);

// Stars

// for (let i = 0; i < 6; i++) {
//     star = "";
//     for (let j = 0; j < i; j++) {
//         star = star + "* ";


//     } console.log(star);
// }


// Practise for Searching of Results

// const arr = [
//     "Ahmed", "Raza", "Hamza", "Roohi", "Sumaiya", "Aslam", "Soiaba"
// ]

// For loop Example

// const query = prompt("Search Your Name: ")
// for (let i = 0; i <= arr.length; i++) {

//     if (arr[i] === query) {
//         console.log("Pass");
//     } else {
//         console.log("Not Found");
//     } break
// }

// Same For Each Example

// arr.forEach(function (val) {
//     console.log(val);
// })


// let a = +prompt("Guess any Number :");
// let b = Math.round(Math.random() * 10);
// if (a === b) {
//     console.log("Great You Won")
// } else { console.log("Better Luck Next Time Computer number is " + b); }

// for (let i = 1; i <= 10; i++) {
//     document.write(i);
// }
// function gretting( Name ) {

//     console.log("Hello " + Name );
// };
// gretting("Ahmed");
// gretting("Muqarab");
// gretting("Ali");

// Return Case

// function add(num1, num2) {
//     return num1 + num2;
// let result = add(50, 8);
// console.log(result);

// }
// Recursion

// Factorial Case

// function add(num) {
//     if (num > 1) {
//         return num * add(num - 1)
//     }
//     return 1;
// }
// let result = add(5);
// document.write(result);

// 5 * 4 * 3 * 2 * 1
// Answer : 120

// Sum of Array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = arr.reduce(function (previousValue, currentVal) {
//     console.log(previousValue, currentVal);

// }, 0)



// Objects

// let sel = [];
// function dataEntry() {
//     let a = {
//         Name: prompt("Enter Name"),
//         RollNo: +prompt("Enter Roll No"),
//         Teacher: prompt("Enter teacher Name"),
//         Days: prompt("Enter your Day")
//     }
//     sel.push(a)
//     console.log(sel);

//     let prev = JSON.stringify(a);
//     localStorage.setItem(a, prev);
//     console.log(a);
// };

// Async & sync

// function Ahmed() {
//     setTimeout(function () {
//         console.log("Hello Pakistan");
//     }, 1000);
// }
// Ahmed();

// console.log("India");
// var a = 1;
// function run () {
//     console.log(a);
//     a = 2
// }
// run();

// Promises

// function runAfter1Sec(val) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             let data = 5 + val;
//             resolve(data);
//         }, 1000)
//     });
// }

// runAfter1Sec(6)
//     .then(function (data) {
//         return runAfter1Sec(data);
//     })
//     .then(function (data) {
//         return runAfter1Sec(data);
//     })
//     .then(function (data) {
//         return runAfter1Sec(data);
//     })
//     .then(function (data) {
//         console.log(data);
//     })

// Array
// d = [];



// a = {
//     Name: prompt("Write any Your Name : "),
//     RollNo: +prompt("Write any Your Roll No : "),
//     Location: prompt("Write any Your Location : ")
// };
// b = {
//     Name: prompt("Write any Your Name : "),
//     RollNo: +prompt("Write any Your " + RollNo),
//     Location: prompt("Write any Your " + location)
// };
// c = {
//     Name: prompt("Write any Your Name : "),
//     RollNo: prompt("Write any Your " + RollNo),
//     Location: prompt("Write any Your " + Location)
// };
// d = [a, b, c];

//

// let myPara = document.getElementById('Pak')
// myPara.style.backgroundColor = "#000";
// myPara.style.color = "#fff";

// console.log(myPara);



// Practice
// Practice
// Practice
// // Practice

//  setInterval(function () { document.write("Hello") }, 0750)

// Display block & none

// let a = document.getElementById("Pak");
// a.style.display = "block";

// setInterval(function () {

//     if (a.style.display === "block") {
//         a.style.display = "none"
//     } else {
//         a.style.display = "block"
//     }
// }, 500);

// Animation

// let a = document.getElementById("Pak");
// let backclr = a.style.backgroundColor = "#000"
// let clr = a.style.color = "#fff"
// a.style.width = "80%"

// setInterval(function () {
//     if (a.style.width === "80%") {
//         a.style.width = "10%"
//     } else {

//         a.style.width = + a.style.width.replace("%", "") + 10 + "%"
//     }

// }
//     , 1000)

// console.log(a);

//Color Animation

// setInterval(function () {
//     let a = document.getElementById("Pak");
//     let clr1 = Math.round(Math.random() * 1000000);
//     a.style.backgroundColor = "#" + clr1
//     let clr2 = Math.round(Math.random() * 1000000);
//     a.style.color = "#" + clr2

// }, 500)

//

// let students = {
//     name: "Ahmed",
//     rollNo: 12345,
//     teacher: "Ikhalaq",
//     className: "JavaScript",
//     speakEnglish: true,
//     speak: function (sentence) {
//         return (sentence);
//     }

// }

// let a = students.speak("Hello World ! ");
// console.log(a);

// Greeting Eid Mubarak :

// let b = document.getElementById("paka");
// let a = document.getEementById("good")
// function greet() {
//     b.innerText = "Wish You Happy Eid Mubarak "
// }


// Data Entry Program:


// let prevdata = localStorage.getItem("std")
// let dataEntry = prevdata ? JSON.parse(prevdata) : []
// let btn = document.getElementById("useMe")

// function calldata() {

//     let Data = {
//         name: prompt("Enter Your Name: "),
//         rollNo: +prompt("Enter Your Roll No: "),
//         teacher: prompt("Enter Your Teacher Name: "),
//         className: prompt("Enter Your Class Name Here: "),
//     }
//     dataEntry.push(Data)
//     console.log(dataEntry);
//     let string = JSON.stringify(dataEntry)
//     localStorage.setItem("std", string);
// }


// Iftar CounDown


// setInterval(function () {
//     let curDate = new Date().getTime()
//     let iftarTime = new Date("April 23, 2023, 12:59:00").getTime()
//     let diff = iftarTime - curDate;
//     let hrsElm = document.getElementById("hours")
//     let minElm = document.getElementById("minutes")
//     let secElm = document.getElementById("second")
//     let hrs = (diff / (1000 * 60 * 60)).toFixed()
//     let min = (diff / (1000 * 60)).toFixed()
//     let sec = (diff / (1000)).toFixed()
//     hrsElm.innerText = hrs
//     minElm.innerText = min
//     secElm.innerText = sec
// }, 1000)


// Object

// let ahmed = {
//     name: "Ahmed",
//     Education: "B.com Pass",
//     Work: "Banker",
//     Weight: 62,
//     Height: "6Ft",
// }
// let hamza = {
//     name: "Hamza",
//     Education: "ACCA Pass",
//     Work: "Accountant",
//     Weight: 59,
//     Height: "5.9Ft",
// }
// let bigData = [
//     ahmed, hamza
// ]


// Concept of createElement and Append Child

// Create element mean you create a new HTML tag through JS
// then put any value into it through append Child

// let a = document.createElement("h1")
// b = document.createTextNode("Hamza")
// a.appendChild(b)
// console.log(a);


// Synchronous & Asynchronous

//Example of Asynchronous

// function ahmed() {
//     setTimeout(function () {
//         console.log("Pakistan Zindabad 1");
//     }, 5000)
// }
// ahmed()
// console.log("Pakistan Zindabad 2");

//Example of Synchronous

// console.log("Ahmed");
// console.log("Ahmed2");

//Call Backs with Examples

// function first(abc) {
//     console.log("Work started");
//     console.log("Work In Process");
//     console.log("Work Complete");
//     abc()
// }
// function done() {
//     console.log("Yes Your work is done");
// }
// first(done)


//Call Back Hell


// function first(abc) {
//     console.log("Work started");
//     console.log("Work In Process");
//     console.log("Work Complete");
//     abc()
// }
// function done() {
//     done1()
// }
// function done1() {
//     console.log("second Work is started");
//     console.log("second Work is in Process");
//     console.log("second Work is Completed");
//     done2()
// }
// function done2() {
//     console.log("Third Work is started");
//     console.log("Third Work is in Process");
//     console.log("Third Work is Completed");

// }
// first(done)


//Promises

//async await

// HTTP Request

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function (response) {

//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data);
//     })

//Practise

// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         console.log(data);
//     })



//For Each on Array

// let bigData = [
// ]

// let ahmed = {
//     name: "Ahmed",
//     Education: "B.com Pass",
//     Work: "Banker",
//     Weight: 62,
//     Height: "6Ft",
// }
// let hamza = {
//     name: "Hamza",
//     Education: "ACCA Pass",
//     Work: "Accountant",
//     Weight: 59,
//     Height: "5.9Ft",
// }
// bigData.push(ahmed, hamza)
// bigData.forEach(function (val, index) {
//     console.log(val.Education, index);
// })

//Get image into DOM

// const image = document.getElementById('two');

// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(function (response) {

//         return response.json()
//     })
//     .then(function (data) {
//         data.forEach(function (val) {
//             const imgElem = document.createElement("img")
//             const url = val.url;
//             imgElem.src = url
//             image.appendChild(imgElem)
//         })
//     })


//  HTTP Request

//Dummy Rest API

// Name of Website

/*
    JSONPlaceholder
    dummy json

    */

// GET Request
/* Get Data from server */

// fetch("https://jsonplaceholder.typicode.com/albums")
//     .then(response => response.json())
//     .then(json => console.log(json));

// POST Request
/* other product data */

// fetch('https://dummyjson.com/products/add', {
//     headers: { 'Content-Type': 'application/json' },
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//         description: 'This pencil is an amazing pencil and long live',
//         /* other product data */
//     })
// })
//     .then(res => res.json())
//     .then(console.log);


// PUT Request
/* updating title of product with id 1 */

// fetch('https://dummyjson.com/products/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'iPhone Galaxy +1'
//   })
// })
// .then(res => res.json())
// .then(console.log);



// DELETE Request
/*Delete data from server*/

// fetch('https://dummyjson.com/products/1', {
//     method: 'DELETE',
// })
//     .then(res => res.json())
//     .then(console.log);

// EKMA SCRIPT 6 / ES6

//Arrow Function

// const add = (num, num1) => {
//     return num + num1
// }
// console.log(add(5, 9));

// const sub = (num, num1) => num - num1
// console.log(sub(9, 5));

// One line Arrow Function

// const round = num => Math.round(num);
// console.log(round(9.58));

// Rest
// which used in function and work with parmeter only

// function ahmed(a, b, ...z) { //Rest Parameter
//     console.log(a, b, z);
// }
// ahmed(1, 2, 89, 89, 245, 1486)


//Short Command For Creating Methods in Object

// const firstName = "Waqas"
// const lastName = "Ahmed"

// const obj = {
//     firstName,
//     lastName,
//     printName() { //Short Command of Method
//         console.log("Ahmed Raza");
//     }
// }
// obj.printName()


// Spread
// Which used on Objects and arrays
// Which give all data of relevant obj or arr into new obj or arr
// you can also add some data before spread or after spread

// const obj = {
//     firstName: "Ahmed",
//     lastName: "Raza",

// }
// const newObj = { work: "Business", ...obj, hobby: "Video Games", firstName: "Hamza" }//Also Change any key Value
// console.log(newObj);

// Arrow Functions
// const callName = name => console.log("Hello " + name);
// callName("Muhammad Konain Ali")


// OOPS & CLASSES
// Classes only used to make a object

//////////////////////////////////////////////////////////////////////

/// if we make manually objects so we made some mistakes in keys so classes use for 
/// make automated objects we just mentioned all are keys for one time and this keys
/// will use forever when we make objects through particular class 

// Below define the example of manual object with typing error of keys 


// const obj = {
//     name: "LED TV",
//     price: "21,000"
// }
// const obj1 = {
//     name: "Dawlance Refrigerator",
//     amount: "10,754,000"
// }
// const product = [obj, obj1];
// product.forEach(val => console.log(val.price));

///  How to make a 100 Objects through a loop

// for (let i = 1; i <= 100; i++) {
//     console.log(i + " const stud1 = new BigData" + "Ahmed", "Web and Mobile Application", "JavaScript", "Ishaq Bohjani");
// }

//  OOPS & CLASSES
/// Example of making objects through a Class


// class smallData {
//     constructor(a, b, c, d) { //Parameter
//         //Keys  =  Values
//         this.name = a;
//         this.className = b;
//         this.subjects = c;
//         this.teacherName = d;
//     }
// }

// const stud1 = new smallData("Ahmed", "Web and Mobile Application", "JavaScript", "Ishaq Bohjani")
// const stud2 = new smallData("Hamza", "Web and Mobile Application", "Node Js", "Sir Nadir")
// const stud3 = new smallData("Saeed", "Mobile Repairing", "Packing of Phones", "Kashif")
// console.log(stud1, stud2, stud3);

/// The name of Class start with Capital Letter
/// Classes with Methods adn how to use them

// class BigData {
//     constructor(a, b, c, d) {
//         this.name = a;
//         this.className = b;
//         this.subjects = c;
//         this.teacherName = d;
//         this.attandance = []
//     }
//     markattendance() {
//         this.attandance.push(new Date())
//     }
// }

// const stud1 = new BigData("Ahmed", "Web and Mobile Application", "JavaScript", "Ishaq Bohjani")
// const stud2 = new BigData("Hamza", "Web and Mobile Application", "Node Js", "Sir Nadir")
// const stud3 = new BigData("Saeed", "Mobile Repairing", "Packing of Phones", "Kashif")
// stud1.markattendance()
// stud2.markattendance()
// console.log(stud1, stud2, stud3);

// Parents and Child scenerio // Inheritance
/// Use of Extends & Super

// class Volunteer extends BigData {
//     constructor(a, b, c, d) {
//         super(a, b, c, d)
//         this.canVolunteer = []
//     }

//     addVolunteer(skill) {
//         this.canVolunteer.push(skill)
//     }
// }
// const boy1 = new Volunteer("Kamran", "Web and Mobile Application", "Node JS", "Ali Mughal")
// boy1.addVolunteer("HTML")
// boy1.markattendance()
// console.log(boy1);