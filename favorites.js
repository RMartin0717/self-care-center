// import {favorites} from "./main.js";

var favoriteMessageDisplay = document.querySelector(".favorite-message-display");

window.addEventListener("load", displayMessages);


function displayMessages() {
 // for (var i = 0; i < favorites.length; i++) {
    favoriteMessageDisplay.innerHTML += `
    <div>
      <p class="random-message">✨favorites[i]✨</p>
      <button>Remove From Favorites</button>
    </div>
    `
  // }
}
