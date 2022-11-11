'use strict';
console.log('js file loaded.');



// Problem Domain: the Cedar Rapids Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

//Each Kitten's profile should have:
// Name
// Breed
// - gender   -- isFixed.
// - random age assigned
// a list of what they like to play with.
// an image
// is good with kids
// is good with dogs
// is good with other animals


let petOne = {
  petName: 'Tiger',
  breed: 'Tiger',
  imageName: 'diabloBlanco',
  interests: ['Sun Light', 'Mouse Toys', 'Red dots'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithAnimals: true,
  // age: ' 7 months'
  setAge: function(){
    this.age = randomAge(3,12) + ' Months old.';
  }
};
petOne.setAge();
console.log(petOne);




let petTwo = {
  petName: 'Fluffy',
  breed: 'Tabby',
  imageName: 'tommyBob',
  interests: ['Rainy Days','Running','Yarn'],
  isGoodWithKids: true,
  isGoodWithDogs: true,
  isGoodWithAnimals: true,
  setAge: function(){
    this.age = randomAge(3,12) + ' Months old.';
  }
};
petTwo.setAge();
console.log(petTwo);


//adding properties to our objects outside of our object creation.
petOne.isFixed = false;
petTwo.isFixed = true;


//helper function
function randomAge(minMonth, maxMonth){
  return Math.floor(Math.random() * (maxMonth - minMonth) + minMonth);
}


//1. Create DOM elements and render then in the html
//2. create a new element and append it to the parent element <section>
//3. create the child elements h3, ul, image, to render a specific pet to the document.


let parentElement = document.getElementById('kittenProfiles');
console.log(parentElement);

//create an article tag
let article = document.createElement('article');
// console.log(article);


//section    add to page    article         lets add the new article tag to the section
parentElement.appendChild(article);

//h3
let h3 = document.createElement('h3');
// add the content
h3.textContent = petOne.petName;
article.appendChild(h3);



//creat ul
let petUL = document.createElement('ul');
article.appendChild(petUL);
for(let i = 0; i < petOne.interests.length; i++){
  // creat li
  let petLi = document.createElement('li');
  // set the text content
  petLi.textContent = petOne.interests[i];
  //append
  petUL.appendChild(petLi);

}


//create image
let petOneImage = document.createElement('img');
//src and alt
petOneImage.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
petOneImage.setAttribute('alt', 'Adopt our kittens.');
//append the image
article.appendChild(petOneImage);
