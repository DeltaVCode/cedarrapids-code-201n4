'use strict';
console.log('Hi from the js file!');


//prompt our user for some input.

let userName = prompt('What is your name?');

console.log('user name is: ', userName);
// what data type are we receiving from out prompt is a string. Even if we enter a number it is a string. 
console.log('data type is: ', typeof(userName));
//convert to lowerCase

// userName.toLowerCase(); or the userName.toUpperCase();
let lowerCaseName = userName.toLowerCase();

// console.log('Name Lower Case: ', lowerCaseName);


//validate the input using some conditional logic
// if(meet this condition then do the else){

// } else {

// }
if(lowerCaseName === 'bob' || lowerCaseName === 'larry'){
// we have access to our global variables. 
  // console.log('we are comparing lowercase:', lowerCaseName);
  // console.log('we are using his user name he provided', userName);
  alert('Welcome back to the site: ' + userName);

} else {
  alert('Welcome newe user to my page!');
}


//Look at some data types : boolean, string, number, 

// let myBooleenValueTrue = false;
// let myBooleenValueFalse = false;
// let thirdBooleenValueTrue = false;
//     // true           &&           true now its false
// if(myBooleenValueTrue && thirdBooleenValueTrue){
//   alert('1');
//   console.log('&&', myBooleenValueTrue, thirdBooleenValueTrue);
//           // true            OR      false
// } else if(myBooleenValueTrue || myBooleenValueFalse){
//   alert('2');
//   console.log('||', myBooleenValueTrue, myBooleenValueFalse);
// } else if(thirdBooleenValueTrue){
//   alert('3');
//   console.log('last else if', thirdBooleenValueTrue);
// } else {
//   alert('the else');
//   console.log('we hit the else everything was false....');
// }





//Introduction to arrays so we can store some stuff, strings, number, arrays, objects  

let emptyArray = [];
console.log('our empty array', emptyArray);
                //  0,   1,   2,   3,   4
let quizAnswers = ['b', 'c', 'd', 'a', 'c'];

//nested Array
      //3 arrays in an array 
let nestedArray = [
  ['yes', 'y'],  //0 index
  ['no', 'n'],   // 1 index
  ['maybe','maybe not'] // do not want a comma here.  3rd index.
];

console.log('nested Array', nestedArray);


let mixedDataTypesArray = ['Harry', 'Potter', 10, true, 'Magic', {}];
console.log(mixedDataTypesArray);
//                 0,  1,  2
let myArrayOne = ['a','b','c'];

if(myArrayOne[1] === 'b'){
  //do something
  console.log('this is the message', myArrayOne[1]);
}


//array methods push() and pop()

let myArrayTwo = [1,2,3,4,5];
// this how we add items to our Arrays.  Add the number, next num.
myArrayTwo.push(6);
console.log('push?', myArrayTwo);
myArrayTwo.pop();
console.log('pop?', myArrayTwo);
//same as we started


let myArrayThree = [1,2,3,4,5];
// dot operator
myArrayThree.pop();

console.log('pop()', myArrayThree);




// technical requirements for our lab

//html
// Include on your HTML page a short biography, 
// your education history, 
// an overview of your job experience,
//  and any goals that you may have.



//js
// Prompt the user a total of exactly five yes or no questions.

// The user input for the answer must accept either y/n or yes/no responses
// use  .toUpperCase() or .toLowerCase() 
// alert()
// Be sure to let the user know if they answered the question correctly by alerting them with a response.
// Add console.log() messages within your app to notify the developer
// (don’t delete) your console.log() messages and replace them with the alerts() to complete the project.
// As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.
// Ask the user their name through a prompt()
// Display that name back to the user through a custom greeting welcoming them to your site.
// Display the user’s name back to them in your final message to the user.