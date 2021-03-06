
var receiveMessageBtn = document.querySelector(".receive-message-button");
var randomMessage = document.querySelector(".random-message");
var image = document.querySelector(".meditation-image");
var favoriteBtn = document.querySelector(".favorite-button");
var viewFavoritesBtn = document.querySelector(".view-favorites-button");
var favoriteMessageDisplay = document.querySelector(".favorite-message-display");

var affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices.",
];
var mantras = [
"Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
"Don’t let yesterday take up too much of today.",
"Every day is a second chance.",
"Tell the truth and love everyone.",
"I am free from sadness.",
"I am enough.",
"In the beginning it is you, in the middle it is you and in the end it is you.",
"I love myself.",
"I am present now.",
"Inhale the future, exhale the past.",
"This too shall pass.",
"Yesterday is not today.",
"The only constant is change.",
"Onward and upward.",
"I am the sky, the rest is weather.",
];
var localStorageFavorites = window.localStorage.getItem("favorites");
var parsedFavorites = JSON.parse(localStorageFavorites);
//if parsedFavorites <--looking for truthy, so if parsedFavorites contains anything, it is truthy
  //? true
  //: false
var favorites = (parsedFavorites)
  ? parsedFavorites
  : [];
//if favorites are already saved in localStorage, then we want local localStorage
//if not, we want to initialize an emptry array
//if localStorage is empty, favorites should be empty
//if it has favorites, that's what favorites should be

receiveMessageBtn.addEventListener("click", receiveMessage);
favoriteBtn.addEventListener("click", saveFavorite);



function getRandomIndex(messageArray) {
  return Math.floor(Math.random() * messageArray.length)
}

function receiveMessage() {
  if(document.getElementById('affirmation').checked) {
    randomMessage.innerText = affirmations[getRandomIndex(affirmations)];
    image.classList.add("hidden");
    favoriteBtn.classList.remove("hidden");
    viewFavoritesBtn.classList.remove("hidden");
  } else if(document.getElementById('mantra').checked) {
    randomMessage.innerText = mantras[getRandomIndex(mantras)];
    image.classList.add("hidden");
    favoriteBtn.classList.remove("hidden");
    viewFavoritesBtn.classList.remove("hidden");
  } else {
    alert("Please select between an affirmation message or a mantra message :)")
  }
}


function saveFavorite() {
  var newFavorite = {
    text: randomMessage.innerText,
    id: Date.now(),
  }
  favorites.push(newFavorite);
  window.localStorage.setItem("favorites", JSON.stringify(favorites));
}
