/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};


/* Populate Profile Object with placesLive objects */
myProfile = {
    name: "Devun Durst",
    photo: 'images/placeholder.png',
    favoriteFood: [
        'Chicken',
        'Cheeseburgers',
        'Fried Chicken',
        'Rice',
        "Enchiladas"
    ],
    hobbies: [

    ],
    placeslived: [

    ],
};

myProfile.placeslived.push(
    {
        place: 'Ogden, UT',
        length: '3 years'
    },
    {
        place: 'Concord, CA',
        length: '18 years'
    },
    {
        place: 'Houston, TX',
        length: '1 year'
    },
    {
        place: 'Rexburg, ID',
        length: '2 years'
    }

);

myProfile.hobbies.push(
    {
        hobby: 'Baseball'
    },
    {
        hobby: 'Basketball'
    },
    {
        hobby: 'Video Games'
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFood.forEach(foo => {
    let li = document.createElement('li');
    li.textContent = foo; // Change 'food' to 'foo'
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbyObj => {
    let li = document.createElement('li');
    li.textContent = hobbyObj.hobby; // Access the 'hobby' property
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
const placesLivedList = document.querySelector('#places-lived');

myProfile.placeslived.forEach(placeInfo => {
  let dt = document.createElement('dt');
  dt.textContent = placeInfo.place;

  let dd = document.createElement('dd');
  dd.textContent = placeInfo.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});

