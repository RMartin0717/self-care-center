var favoriteMessageDisplay = document.querySelector(".favorite-message-display");
var favorites = [];


window.addEventListener("load", displayMessages);
favoriteMessageDisplay.addEventListener("click", removeMessage);



function displayMessages() {
  var favoritesFromStorage = window.localStorage.getItem("favorites");
  var parsedFavorites = JSON.parse(favoritesFromStorage);
  favorites = parsedFavorites;
  for (var i = 0; i < favorites.length; i++) {
    favoriteMessageDisplay.innerHTML += `
      <div>
        <p class="random-message">✨${favorites[i].text}✨</p>
        <button id=${favorites[i].id}>Remove From Favorites</button>
      </div>
    `
  }
}


function removeMessage() {
  var messageId = parseInt(event.target.id);
  for (var i = 0; i < favorites.length; i++) {
    if (messageId === favorites[i].id) {
      favorites.splice(i, 1);
    }
  }
  window.localStorage.setItem("favorites", JSON.stringify(favorites));
  location.reload();
}
