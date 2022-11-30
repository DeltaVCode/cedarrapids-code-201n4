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
console.log('do we have Pizza? ',Pizza.allPizzasArray);

// function helper for randomization
function getRandomNumber(){
  return Math.floor(Math.random() * Pizza.allPizzasArray.length);
}


//function to render our pizzas
function renderPizzas(){
  let pizza1 = getRandomNumber();
  let pizza2 = getRandomNumber();

  while(pizza1 === pizza2){
    pizza2 = getRandomNumber();
  }

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


function renderResults(){
  let ul = document.querySelector('ul');
  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    let li = document.createElement('li');
    li.textContent = `${Pizza.allPizzasArray[i].name} had ${Pizza.allPizzasArray[i].views} views and was clicked on ${Pizza.allPizzasArray[i].click} times`;
    ul.appendChild(li);
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
  let labels = [];
  let voteCounts = [];
  let showCounts = [];
  let votePercentage = [];

  for(let i = 0; i < Pizza.allPizzasArray.length; i++){
    //four arrays to update
    // console.log('TEST from array',Pizza.allPizzasArray[i].name);
    labels[i] = Pizza.allPizzasArray[i].name;
    voteCounts[i] = Pizza.allPizzasArray[i].click;
    showCounts[i] = Pizza.allPizzasArray[i].views;
    //                             views / clicks 100 / 30
    votePercentage[i] = Math.floor(100 * voteCounts[i] /showCounts[i] );
  }



  console.log('labels',labels);
  console.log('voteCounts',voteCounts);
  console.log('showCounts', showCounts);
  console.log('votePercentage',votePercentage);


  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        label: 'Vote Count',
        data: voteCounts,
        backgroundColor: 'rgb(0,0,200)',
      },
      {
        label: 'Times shown',
        data: showCounts,
        backgroundColor: 'rgb(200,0,0)',
      },
      {
        label: 'Vote %',
        data: votePercentage
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


