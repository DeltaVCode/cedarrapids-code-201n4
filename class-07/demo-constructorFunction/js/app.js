'use strict';
console.log('js file loaded.');


// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.


//create constructor function to create our pet object for us.
function Pet(petName, breed, imageName,interests, isGoodWithKids, isGoodWithDogs, isGoodWithAnimals){
  this.petName = petName;
  this.breed = breed;
  this.imageName = imageName;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithAnimals = isGoodWithAnimals;

}
//each time our new operator is called we are creating 'an instance of our objects'
let petOne = new Pet('Tom','Tiger', 'diabloBlanco',['Sun Light', 'Mouse Toys', 'Red dots'],true, false,true);
let petTwo = new Pet('Garfield','LazyCat', 'jumper',['Cat nip', 'strings', 'food'],true, false,true);
let petThree = new Pet('Sylvester','sadCat', 'tommyBob',['birds', 'wands', 'naps'],true, false,true);

Pet.prototype.setAge = function(){
  this.age = randomAge(3,12) + ' Months old.';
};


Pet.prototype.getInterests = function(){
  //grab a random array index and return that interest
  let randomArrayIndex =  Math.floor(Math.random() * this.interests.length);
  console.log('index num: ',randomArrayIndex);
};




//helper function
function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


petOne.setAge();
petOne.getInterests();
petTwo.setAge();
petTwo.getInterests();
petThree.setAge();
petThree.getInterests();

// console.log(petOne, petTwo, petThree);




Pet.prototype.render = function(){

  let parentElement = document.getElementById('kittenProfiles');
  let article = document.createElement('article');
  parentElement.appendChild(article);
  let h3 = document.createElement('h3');
  h3.textContent = this.petName;
  article.appendChild(h3);
  let petUL = document.createElement('ul');
  article.appendChild(petUL);

  for(let i = 0; i < this.interests.length; i++){
    let petLi = document.createElement('li');
    petLi.textContent = this.interests[i];
    petUL.appendChild(petLi);
  }

  let petImage = document.createElement('img');
  petImage.setAttribute('src', 'images/'+ this.imageName + '.jpeg');
  petImage.setAttribute('alt', 'Adopt our kittens.');
  article.appendChild(petImage);

  ///////////
  //create table for pets
  let petTable = document.getElementById('adoptPets-table');
  let petRow = document.createElement('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = this.petName;
  petRow.appendChild(nameCell);

  let breedCell = document.createElement('td');
  breedCell.textContent = this.breed;
  petRow.appendChild(breedCell);

  let ageCell = document.createElement('td');
  ageCell.textContent = this.age;
  petRow.appendChild(ageCell);

  let interestsCell = document.createElement('td');
  interestsCell.textContent = this.interests;
  petRow.appendChild(interestsCell);
  petTable.appendChild(petRow);

};


let allPets = [petOne, petTwo, petThree];
console.log('all PETS: ',allPets);


for(let i = 0; i < allPets.length; i++){
  allPets[i].render();
}































