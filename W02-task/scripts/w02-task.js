/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Devun Durst";
let currentYear = '2023';
let profilePicture = "images/placeholder.png";
/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

// puts the image up
const imageElement = document.getElementById('profileImage');
if (imageElement) {
    imageElement.setAttribute('src', profilePicture);
    imageElement.setAttribute('alt', `Profile image of ${fullName}`);
}

/* Step 5 - Array */
// Declare an array variable to hold your favorite foods
let favoriteFoods = ['pizza', 'cheeseburgers', 'rice', 'eggs', 'turkey', 'potatoes', 'chocolate'];

const foodsText = favoriteFoods.join(', '); //takes all list items
foodElement.innerHTML += `<br>${foodsText}`; // formats the items into text
// declaring a new item
let newFavoriteFood = "Tacos"; 
// Add item to the array
favoriteFoods.push(newFavoriteFood);
// join the updated list
const pushfoodsText = favoriteFoods.join(', ');
// format the items into a list but with favorite foods
foodElement.innerHTML += `<br>${pushfoodsText}`;
// Remove the first food in the list
favoriteFoods.shift();
// joins the new list
const shiftFoodsText = favoriteFoods.join(', ');
// formats the new food text
foodElement.innerHTML += `<br>${shiftFoodsText}`;
// Remove the last food in the list
favoriteFoods.pop();
// update list array
const popFoodsText = favoriteFoods.join(', ');
// formats the new food text
foodElement.innerHTML += `<br>${popFoodsText}`;