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
getCookieInfo();



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

questionSeven();


// our list of methods......
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
//  Math.random();
//  Math.ceil();
//  Math.floor();
//      .length
