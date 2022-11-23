'use strict';

console.log('app js is connected');

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two pizzas


  App Flow:
  - Randomly put 2 pizzas on the screen
    - Random number generator
    - a function to display pizzas
  - A user clicks on a pizza
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 5 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which pizza was clicked on
        - update click images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 pizzas, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them// in demo today we are grab DOM elements differently.
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  const Image = function ()
  {
    name : 'Chicago Pizza',
    clicks: 0,
    timesShown: 0,
    url : 'chicagoPizza.jpeg'
  };

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked pizzas from being picked
      - STRETCH pick all pizzas evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or ul list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/


//gobal variables
Pizza.allPizzasArray = [];
let pizzaContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
console.log(pizzaContainer, resultButton, image1, image2);

let clicks = 0;
let maxClicks = 10;
console.log('click tracking', {clicks, maxClicks});


//constructor functions    src refers to the <img src="assets/images/brickOvenPizza.jpg" />
function Pizza(name, src){
  this.name = name;
  this.src = src;
  //times shown
  this.views = 0;
  //times clicked on
  this.click = 0;
  //   As we create new instances of our pizza objects we can push those into array using the 'this' and the .push()
  // built in array method
  Pizza.allPizzasArray.push(this);

}
console.log('do we have Pizza? ',Pizza.allPizzasArray);

// function helper for randomization
function getRandomNumber(){
  return Math.floor(Math.random() * Pizza.allPizzasArray.length);
}


//function to render our pizzas
function renderPizzas(){
  let pizza1 = getRandomNumber();
  let pizza2 = getRandomNumber();
  // console.log(pizza1,pizza2);

  while(pizza1 === pizza2){
    pizza2 = getRandomNumber();
  }
  // console.log(pizza1,pizza2);


  //capture some data about images so that we can track the data in our objects
  //update the src for the new image to be seen after each click
  //                     assets/images/brickOvenPizza.jpg
  image1.src = Pizza.allPizzasArray[pizza1].src;
  image2.src = Pizza.allPizzasArray[pizza2].src;

  //update alt attribute
  image1.alt = Pizza.allPizzasArray[pizza1].name;
  image2.alt = Pizza.allPizzasArray[pizza2].name;
  //times shown
  Pizza.allPizzasArray[pizza1].views++;
  Pizza.allPizzasArray[pizza2].views++;


}//closes our renderPizza function

//function to handle our clicks
function handlePizzaClick(event){
  console.log('we made it to the click: ', event);
  if(event.target === pizzaContainer){
    alert('please click on a pizza');
  }
  //how many time they vote total clicks
  clicks++;
  let clickPizza = event.target.alt;
  console.log(clickPizza);
  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    if(clickPizza === Pizza.allPizzasArray[i].name){
      //this.click from pizza object
      // update the pizzas individual clicks
      Pizza.allPizzasArray[i].click++;
      break;
    }
  }



  //do we have max attempts completed 10 votes
  if(clicks === maxClicks){
    pizzaContainer.removeEventListener('click', handlePizzaClick);
    //enable the button to see the results
    resultButton.addEventListener('click', renderResults);
    pizzaContainer.className = 'no-voting';
  } else {
    renderPizzas();
  }
}


//function for our render of results to a list
function renderResults(){
  let ul = document.querySelector('ul');
  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    let li = document.createElement('li');
    li.textContent = `${Pizza.allPizzasArray[i].name} had ${Pizza.allPizzasArray[i].views} views and were clicked on ${Pizza.allPizzasArray[i].click} times`;
    ul.appendChild(li);
  }

}


//pizza ojects and call the constructor with the new operator

new Pizza('Brick Oven Pizza', 'assets/images/brickOvenPizza.jpg');
new Pizza('Calzone', 'assets/images/calzonePizza.jpg');
new Pizza('Chicago Deep Dish', 'assets/images/chicagoPizza.jpg');
new Pizza('Chicago Pizza and Oven Grinder', 'assets/images/cpoGinderPizza.jpg');
new Pizza('Detroit Style', 'assets/images/detroitPizza.jpg');
new Pizza('Papa Vito\'s Thin', 'assets/images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'assets/images/newYorkPizza.jpg');
new Pizza('Shot Gun Dans Pizza', 'assets/images/sgDansHtossedMeatLovPizza.jpg');

//call all functions
renderPizzas();

//add our event listener to run our handleClick()
pizzaContainer.addEventListener('click', handlePizzaClick);
