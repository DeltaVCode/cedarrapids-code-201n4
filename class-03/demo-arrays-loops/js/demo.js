'use strict';

//global variables
let userPoints = 0;
console.log('points: ', userPoints);

alert('Hello and welcome to the guessing game!');
/**
 * the user variable
 * string, null, " " empty
 * If the user is an empty string or null, keep asking for their name
 *
 * while(userName === ' ' || userName === null){
 * // do some stuff
 *
 * }
 *
 * short cut
 * while(!userName){
 *  userName = prompt('what is your name?');
 * }
 */

let userName;

while(!userName) {
  userName = prompt('Welcome, what is your name?');
  console.log('userName: ', userName);
}

// lowercase our input and remove extra spaces off the end.
let normalizedInputName = userName.toLowerCase().trim();
console.log('clean data: ', normalizedInputName);



if(normalizedInputName !== 'bob'){
  console.log('your not the bob we are looking for : ', normalizedInputName);
  alert('Your not BOB!');
}

alert('Hello, ' + userName + ' lets play a game.');



//Control flow of our if / else statements
//1
// if(condition){
// }

//2
// if(condition){
// } else {
// }

//3
// if(condition){
//   .....
// } else if(second condition) {
//   ....
// } else {
//   .....
// }


// if(condition){.....} else if(second condition) {....} else if (thirdCondition) {.....} else {.......}


// Comparison Operators
/**
 < - less than
 > - greater than
 <= less than or equal to
 >= greater than or equal to
 == kinda equals
 != not equals too
 // stict usage
 === - strictly equals
 !== - not strictly equals

  */


//  prompt();
//  alert();
//  toLowerCase();
//  toUpperCase();
//  log();
//  includes();
//  join();
//  push();
//  pop();
//  trim();
//  length();
//  shift();
//  unshift();
//  indexOf();
//  includes();

//User points
let answer = prompt('Is Popcorn, my favorite? Please type yes or no.').toLowerCase().trim();

console.log('what is our answer? ', answer);

if(answer === 'no' || answer === 'n'){
  alert('You are correct, popcorn is not my favorite.');
  //add points to score.
  userPoints = userPoints + 1;
  // userPoints += 1;
  // userPoints++;
} else {
  alert('No that is not correct, I like Pizza.');
}


console.log('did we get a point? ', userPoints);



//looping

console.log(0);
console.log(1);

//while loops require a starting variable
// console.log('While loops need an expression to change the starting variable, in this case we are increasing the value by 5 each time the loop runs');
let count = 0;

while(count <= 50){
  console.log('count: ', count);
  count = count + 5;
}


//This loop counts down from 50 to 0, decreasing by -2 each time

count = 50;
while(count >= 20){
  console.log('50 - 20: ', count);
  count = count - 2;
  // <-----------count
}


/**  multi line comment.
          WHILE LOOPS  will run until a condition is true or truthy, or not true!!

          while(condition){

              something has to change
          }

          let i = 0;
          while(i < value){
            count our iterations or times through the loop
            i = i + 1
            i += 1;
            i++;
          }

          DO WHILE
          do {
            here code runs first and always then the condition is checked.
            }
             while(condition)
*/

let newUser;
do {
  newUser = prompt('A New User Name?');
  console.log('New User Name', newUser);
} while (!newUser);

console.log('we now have a user',newUser);



/*

      Evaluating Comparisons
      Type coercion, weak typing, truthy/falsy
      falsy values are :
      - 0
      - null
      - NaN
      - ''
      - undefined
      - false


      truthy values. ==== everything else.



      Logical Operators
      - (calzone === 'isPizza' ||  'isNotPizza')    => will not Work


      Combining conditions:
      - Not: !
      - And: &&
      - Or:  ||

      // - (craig === 'instructor' && craig === 'teacher')

      Short-circuiting:
      - If we know the answer from the first expression, don't evaluate the second expression
        Logical operators work from left -> right, and stop as soon as they get a result. When they stop, they return whatever value stopped them, so we can write logical expressions that return a value other than true or false. This can be used to set default values.


        let name1 = 'Bob';
        let name2 = '';
        let userName1 = (name1 || 'unknown'); -> userName1 = 'Bob'
        let userName2 = (false || 'Ted'); -> userName2 = 'unknown'


      Any existing value is considered truthy, so we can use a conditional to check whether something exists:
*/

let a = 10;
let emptyObject = {};

if (a) {
  console.log('A exists');
}

if (a && emptyObject) {
  console.log('they both exist');
}



//Arrays.             0            1        2           3
let foodsILike = ['tatertots', 'chips', 'popcorn', 'kale'];

console.log('food array: ', foodsILike);


// loop through our array of foods.

for(let i = 0; i < foodsILike.length; i = i + 1){
  console.log('foods!!!: ', foodsILike[i]);
}

foodsILike.push('swiss chard');

console.log('new foods? ', foodsILike);

//pop  removes elements
let popArrayElement = foodsILike.pop();
console.log('array after the pop():', foodsILike);
console.log('this shows the popped item from the array. ', popArrayElement);


console.log('before the shift',foodsILike);

let shiftArray = foodsILike.shift();
console.log('shift array: ', shiftArray);
console.log('new foods I like: ', foodsILike);



// yes, js lets you do this (having an array of different data types). don't do it.
let mixedUpArray = ['yeehaw', 42, true, ['yo', 5], {}];
console.log('mixedUpArray ', mixedUpArray);



//unshift add element to the front of the array.
foodsILike.unshift('spinach');
console.log('unshift', foodsILike);


let index = foodsILike.indexOf('popcorn');
console.log('index of popcorn is', index);
