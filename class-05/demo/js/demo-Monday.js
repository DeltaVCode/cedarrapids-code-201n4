'use strict';
console.log('js file is connected');


// Question 7
let userPoints = 0;

function getCookieInfo() {
  let cookieInfo = ['chocolate chip','sugar','monster','snickerdoodle','shortbread'];
  console.log('did we get cookies',cookieInfo);

  let attempts = 0;
  let correctAnswer = false;
  while (attempts !== 6 && correctAnswer === false) {

    let cookieInput = prompt('Cookies are a sweet treat. Guess one of my favorite cookie flavors.');
    let cookieInputToLowerCase = cookieInput.toLowerCase();
    if (cookieInfo.indexOf(cookieInputToLowerCase) >= 0) {
      userPoints++;
      console.log('user entered cookie flavor ', cookieInput);
      correctAnswer = true;
      alert(
        'Correct, a ' +
          cookieInput +
          ' cookie is one of my favorite cookies to eat. Chocolate chip, sugar, monster, snickerdoodle and shortbread cookies are all great flavors.'
      );
      attempts = 6;
    } else {
      alert('That is not one of my favorites.');
    }
    attempts++;
    console.log('Logging cookie answer', cookieInfo);
    console.log('Logging cookie answer', userPoints);
  }
}
// getCookieInfo();



// Second example question 7

function questionSeven(){
  let states = ['ILLINOIS', 'IOWA', 'ARKANSAS', 'CALIFORNIA','TEXAS','OMAN','GERMANY'];
  console.log(states.length);
  let attempts = 0;
  let correctAnswer = 0;
  while(attempts !== 7){
    let userAnswer = prompt('What states of the world, have I lived in?');
    let userAnswerTrimmedToUpper = userAnswer.toUpperCase().trim();
    if (states.indexOf(userAnswerTrimmedToUpper) >= 0) {
      alert('Yes! ' + userAnswer + ' is one of my favorite states!');
      correctAnswer++;
    } else {
      alert('WRONG');
    }
    attempts++;
  }
  alert('All states that I lived in are: ' + states.join(', '));
  alert('You answered ' + correctAnswer + ' out of 7 correctly');
  alert('Thanks for Playin...');
  // we need to demo this part still...........
  // var results = document.getElementById('results');
  // var finalResults = 'You guessed ' + attempts + ' and got ' + correctAnswer + ' correct answers.';
  // results.innerHTML = finalResults;
}

// questionSeven();




// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

function questionSevenExample(){
  console.log('inside the function');
  // correct answers that are stored in an array.
  let favoriteFoods = ['pizza', 'tacos','alfraido','ice cream', 'chocolate'];
  // Give the user 6 attempts to guess the correct answer.
  let attempts = 0;
  let userTrys = 0;



  while(attempts !== 6){
    //I would like to guess the answer to a question
    let userResponse = prompt('What are some of my favorite foods?');
    let userInput = userResponse.toLowerCase().trim();
    console.log('user input: ', userInput);

    if(favoriteFoods.indexOf(userInput) >= 0){
      alert('Good Guess ' + userResponse + ' is a favorite food.');
      //increment the attempts
      attempts = 6;
      userTrys++;
      userPoints++;
      break;
      //finish the round
    } else {
      alert('Wrong I dont like that food.');
      attempts++;
    }
    console.log('attempts after else statement',attempts);

  } // while loop

  alert('all my favorites are ' + favoriteFoods.join(', '));
  //is lets use the DOM to see the results on the actual html page.
  let sectionHTML = document.getElementById('favoriteFoods');
  let message =   'You got ' + userPoints + ' points after ' + userTrys + ' attempts';
  sectionHTML.innerHTML = message;

} // function

questionSevenExample();
