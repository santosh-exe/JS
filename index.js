/* 1. ways to print in JavaScript
alert("Messi is the best.");
console.log("This is console");
document.write("Hey Buddy");
2. JavaScript console API
console.log("This is console");
console.error("This is error");
console.warn("This is warning"); */

// 3. Variables in JavaScript
var number1 = 56;
var number2 = 100;
// console.log(number1 + number2);

// 4. Data Types in JavaScript
// Numbers and strings
var num1 = 66;
var num2 = 77;
var str1 = "This is a string";
var str2 = 'This is also a string';

//Objects
var marks = {
    ravi: 88,
    Santosh: 55,
    Alkesh: 86
}
// console.log(marks);
//Booleans
var a = true;
var b = false;
// console.log(a , b);
// var und = "undefined";
var und;
// console.log(und);
var z = null;
// console.log(z);
/* At a very high level, there are two types of data types in JavaScript.
1. Primitive Data Types: undefined, null, number, string, boolean, symbol
2. Reference Data Types: Arrays and Objects
*/
var arry = [1, 2, 3, 4, 5];
// console.log(arry);

//Operators in JavaScript
// 1. Arithmetic Operators
var aa = 6;
var bb = 4;
// console.log("The sum of aa and bb is", aa + bb);
// console.log("The difference of aa and bb is", aa - bb);
// console.log("The multiply of aa and bb is", aa * bb);
// console.log("The division of aa and bb is", aa / bb);

//Assignment Operators
var cc = aa;
cc += 2; //c = c + 2
// console.log(cc);

//comparision operators
var s = 96;
var o = 36;
// console.log(s == o); // <=, >=, < , >

//Logical AND operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

//Logical or operators
// console.log(true ||true);
// console.log(true ||false);
// console.log(false || true);
// console.log(false || false);

//Logical not operators
// console.log(!false);
// console.log(!true);

//Functions in JavaScript
function avg(a, b) {
    return (a + b) / 2;
}
//DRY = Don't Repeat Yourself
c1 = avg(10, 20);
c2 = avg(60, 197);
// console.log(c1);
// console.log(c2);

// //Conditionals in JavaScript
var age = 2;
// //Single if statement
// if (age > 8) {
//     console.log("You aint a kid!");
//     document.write("hey kiddo!");
// }
// // if - else statement
// if (age > 8) {
//     console.log("You aint a kid!");
//     document.write("hey kiddo!");
// }
// else {
//     console.log("You are a kid");
// }

// if - else ladder
/*
if(age > 32) {
    console.log("Bade ho gaye bc!");
}
else if (age > 56) {
    console.log("Bacche kitne hai bhai sahab?");
}
else if (age > 60) {
    console.log("Life ka experience btaiye sir? kaisa raha?")
}
else {
    console.log("Hey kid");
}
console.log("End of ladder");
*/
var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(i=0;i<arr.length;i++) {         // for loop
//     if(i ==2) {
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// const ac = 2;
// ac += 2;
// let j = 0;
// while(j<arr.length){                 // while loop
//     console.log(arr[j]);
//     j++;
// }

// do {                        //do while loop
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length)

var myArr = ["Hey", "Friend", 404 , true , null];
//Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("Santosh is learning");
// myArr.shift();
// const newLen = myArr.unshift("santosh");
// console.log(newLen);
// myArr.toString();
// myArr.sort();
// console.log(myArr);

//String methods in JavaScript
let myLovelyString = "Santosh is a good boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.slice(3,9));
// d = myLovelyString.replace("Santosh", "Elliot");
// d= d.replace("good" , "bad");
// console.log(d);

//Date in JavaScript
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getDay());

//DOM: Document Object Model
//DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");