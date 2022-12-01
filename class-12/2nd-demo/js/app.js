'use strict';

console.log('app js is connected');

Pizza.allPizzasArray = [];
let pizzaContainer = document.querySelector('section');
let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
// console.log(pizzaContainer, resultButton, image1, image2);

let clicks = 0;
let maxClicks = 10;
// console.log('click tracking', {clicks, maxClicks});


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
// console.log('do we have Pizza? ',Pizza.allPizzasArray);

// function helper for randomization
// function getRandomNumber(){
//   return Math.floor(Math.random() * Pizza.allPizzasArray.length);
// }

function getPizzaArray(nameOfThePropertyIWant){
  let arrayResults = [];
  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    arrayResults[i] = Pizza.allPizzasArray[i][nameOfThePropertyIWant];
  }
  console.log('our new array', arrayResults);
  return arrayResults;
}



//function to render our pizzas
function renderPizzas(){
  // let pizza1 = getRandomNumber();
  // let pizza2 = getRandomNumber();
  let pizza1 = Math.floor(Math.random() * Pizza.allPizzasArray.length);
  let pizza2 = Math.floor(Math.random() * Pizza.allPizzasArray.length);
  console.log(pizza1, pizza2);
  // while(pizza1 === pizza2){
  //   pizza2 = getRandomNumber();
  // }
  while(pizza1 === image1 || pizza1 === image2){
    pizza1 = Math.floor(Math.random() * Pizza.allPizzasArray.length);
  }
  while(pizza2 === image2 || pizza2 === image1){
    pizza2 = Math.floor(Math.random() * Pizza.allPizzasArray.length);
  }
  //set up a ref to the pizza index array
  // image1 = pizza1;
  // image2 = pizza2;

  console.log('first pizza',pizza1);
  console.log('second pizza',pizza2);

  image1.src = Pizza.allPizzasArray[pizza1].src;
  image2.src = Pizza.allPizzasArray[pizza2].src;


  image1.alt = Pizza.allPizzasArray[pizza1].name;
  image2.alt = Pizza.allPizzasArray[pizza2].name;

  Pizza.allPizzasArray[pizza1].views++;
  Pizza.allPizzasArray[pizza2].views++;


}//closes our renderPizza function


function handlePizzaClick(event){
  // console.log('we made it to the click: ', event);
  if(event.target === pizzaContainer){
    alert('please click on a pizza');
  }

  clicks++;
  let clickPizza = event.target.alt;
  // console.log(clickPizza);
  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    if(clickPizza === Pizza.allPizzasArray[i].name){
      Pizza.allPizzasArray[i].click++;
      break;
    }
  }


  if(clicks === maxClicks){
    pizzaContainer.removeEventListener('click', handlePizzaClick);
    resultButton.addEventListener('click', renderResults);
    pizzaContainer.className = 'no-voting';
  } else {
    renderPizzas();
  }
}

//show everything on the button click is actually a div
function renderResults(){
  let ul = document.querySelector('ul');

  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    let li = document.createElement('li');

    li.textContent = `${Pizza.allPizzasArray[i].name} had ${Pizza.allPizzasArray[i].views} views and was clicked on ${Pizza.allPizzasArray[i].click} times`;

    ul.appendChild(li);

    let percentageListItem = document.createElement('li');
    let math;
    if(Pizza.allPizzasArray[i].click === 0){
      math = `Zero clicks and shown ${Pizza.allPizzasArray[i].views} times.`;
    } else {
      math = Math.round(((Pizza.allPizzasArray[i].click / Pizza.allPizzasArray[i]['views']).toFixed(2) * 100)) + '%';
    }

    percentageListItem.textContent = `${Pizza.allPizzasArray[i].name} percentage of times clicked on vs times shown is ` + math;
    ul.appendChild(percentageListItem);

  }
  //show our chart here
  showResultChart();
}


new Pizza('Brick Oven Pizza', 'assets/images/brickOvenPizza.jpg');
new Pizza('Calzone', 'assets/images/calzonePizza.jpg');
new Pizza('Chicago Deep Dish', 'assets/images/chicagoPizza.jpg');
new Pizza('Chicago Pizza and Oven Grinder', 'assets/images/cpoGinderPizza.jpg');
new Pizza('Detroit Style', 'assets/images/detroitPizza.jpg');
new Pizza('Papa Vito\'s Thin', 'assets/images/mwDeluxePizzaThinCrust.jpg');
new Pizza('New York Thin', 'assets/images/newYorkPizza.jpg');
new Pizza('Shot Gun Dans Pizza', 'assets/images/sgDansHtossedMeatLovPizza.jpg');

renderPizzas();

pizzaContainer.addEventListener('click', handlePizzaClick);


function showResultChart(){
  // console.log(Pizza.allPizzasArray);
  // console.log('chart!!!!!!!!');
  // let labels = [];
  // let voteCounts = [];
  // let showCounts = [];
  // let votePercentage = [];

  // for(let i = 0; i < Pizza.allPizzasArray.length; i++){
  //   //four arrays to update
  //   // console.log('TEST from array',Pizza.allPizzasArray[i].name);
  //   labels[i] = Pizza.allPizzasArray[i].name;
  //   voteCounts[i] = Pizza.allPizzasArray[i].click;
  //   showCounts[i] = Pizza.allPizzasArray[i].views;
  //   //                             views / clicks 100 / 30
  //   votePercentage[i] = Math.floor(100 * voteCounts[i] /showCounts[i] );
  // }



  // console.log('labels',labels);
  // console.log('voteCounts',voteCounts);
  // console.log('showCounts', showCounts);
  // console.log('votePercentage',votePercentage);


  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: getPizzaArray('name'),
      datasets: [{
        label: 'Vote Count',
        data: getPizzaArray('click'),
        backgroundColor: [ 'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1

      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


}


