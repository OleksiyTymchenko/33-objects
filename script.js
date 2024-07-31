"use strict;"

//1. 
// const current_user_name = prompt(`Please enter your name`);
// function greet(name ) {

//         if (name === null) {
//                 name = "Alex"
//                 alert(`Hello ${name}`);
//         }
        
// }
// greet(`${current_user_name}`);

// let user_width = prompt(`Enter width`);
// let user_height = prompt(`Enter height`);
// function getSquare(width, height){
//         return width * height
// let squareResult = getSquare(user_width, user_height);
// alert(`${squareResult}`);
// let greet = function(){
//         alert(`Hello World!!!`)
// greet();
// let getArea = (width, height) => {
//         return width * height;
// }
// getArea(5, 5);
// alert(getArea(5, 5));

/*Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

Наприклад:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

// function min(number_a, number_b) {
//         if (number_a > number_b) {
//                 alert(`${number_b}`);
//         } else {
//                 alert(`${number_a}`);
//         } 
// }

// min(2, 5);
// min(3, -1);
// min(1, 1);

function pow(a, b){
        return a ** b;
}
pow(3, 2);

alert(pow(1, 100))