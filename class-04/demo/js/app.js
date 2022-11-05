'use strict';
console.log('js file connected!');

//global variables

function functionName(){
  //is where our code will go
  console.log('this is from the inside of the function');
}
// we are invoking/calling our function
functionName();


// parameters are  let variables = allow us to give things in our code human readable values that we can use throughout the code.

//                parameters are place holders
// function multiply(num1, num2){
// console.log('1st parameter: ', num1);
// console.log('2nd parameter: ', num2);
// console.log('results: ' + num1 * num2);
// }

// these are our values / ARGUMENTS!!!
// multiply(2,5);



// let result1 = multiply(2, 3);
// console.log(result1);
// let result2 = multiply(45, 70);
// console.log(result2);







// function scope for how our variables work inside our functions. Can we Access these variables and where.
//outside the function and we can reach it from anywhere.
let globalVariable = 'global';

function scoper(parameter){
  //live inside the function and thats where we can use them
  let localVar = 'I like my privacy';

  console.log('local variable', localVar);
  console.log('inside the function, we can see parameter: ', parameter);
  console.log('universal variable:', globalVariable);

  for(let i = 0; i < 3; i++){
    console.log('the value of i: ', i);
  }

}

//call the function with an actual value, refered to as an argument.
scoper('argument');

// console.log(' outside the function: ', parameter);
// console.log(' outside the function: ', localVar);
console.log('universal variable:', globalVariable);


// another function
function circlePropsOne(radius){
  let area = Math.PI * radius * radius;
  let circumference = 2 * Math.PI * radius;

  let propsArray = [area, circumference];
  console.log('our Array: ', propsArray);
  return propsArray;
}

//call the function()
let circle = circlePropsOne(3);
console.log('our return value: ', circle);


// function expression, which is just another way to write a function.
// let checkLogin = function(){
//   let userID = 1234;
//   if(userID){
//     console.log('id: ', userID);
//   } else {
//     console.log('user not loggin1');
//   }

// };

// checkLogin();




//IIFE Immediately invoked function expression.
(function userLogin(){
//code goes.
  let userID = 1234;
  if(userID){
    console.log('id: ', userID);
  } else {
    console.log('user not loggin1');
  }
})();




//switch statement - just see it.
alert('Welcome to 4-part space ship repair.');

let spaceHandle = prompt('What\'s your space handle?');
let spaceShipPart = prompt('What parts do you need?, Select parts 1 - 4. ');


switch(spaceShipPart){

case '1':
  confirm(spaceHandle + ' You need part 1.');
  break;

case '2':
  confirm(spaceHandle + ' You need part 2.');
  break;

case '3':
  confirm(spaceHandle + ' You need part 3.');
  break;

case '4':
  confirm(spaceHandle + ' You need part 4.');
  break;

default:
  alert('you gave us no matching inputs.');
}
alert('Bye for now ' + spaceHandle);
