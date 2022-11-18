'use strict';
console.log('app file is connected');




// Add event listeners
// Call functions


// Declare Global Variables
const globalVariable1 = 'hello';
const globalVariable2 = [0,1,2];
const myForm = document.getElementById('my-form');

console.log('form: ', myForm); //null why?


const bud = new DudeConstructor('Bud','Squirrel','Macintosh');
const doyle = new DudeConstructor('Doyle','Stubs','Johnson');

// Declare Constructor functions - name should be capitalized!
function DudeConstructor(first, nicName, last){
   this.firstName = first;
   this.nicName = nicName;
   this.lastName = last;
}


// Declare prototype methods
DudeConstructor.prototype.sayHello = function(){
  console.log('hello, my name is ' + this.firstName);
};

bud.sayHello();



// Declare regular functions
function firstFunction(parameter){
  console.log('our argument: ', parameter);
}



function secondFunction(myArray){
  console.log('before our for loop:', myArray);
  //loop
  for(let i = 0;  i < myArray.length; i++){
    console.log(myArray[i]);
  }
}

function formHandler(event){
  event.preventDefault();
  console.log('form event:', event);

}

myForm.addEventListener('submit', formHandler);




//invoke with the name
firstFunction(globalVariable1);
secondFunction(globalVariable2);