"use strict";

const $SUBMIT_BUTTON = $("#submit-button");
const $DELETE_BUTTON = $("#delete-button");
const $GIF_CONTAINER = $(".Gif-container");
let $gifInput;

/** Gets a random number between 0 and the number of gifs */

function getRandomInt(numOfGifs) {
  return Math.floor(Math.random() * numOfGifs);
}

/** This callback function will fire on click of the submit button. It will find
 * the value of our gifInput, and find a group of gifs associated with that input
 * using the axios API. It will call our getRandomInt function to find one of the 50
 * gifs in that list. Next, it will call addGifToContainer, using that random gif as
 * our argument.
 */

async function getGif(event) {
  event.preventDefault();
  $gifInput = $("#gif-input").val();

  let groupOfGifs = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${$gifInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  let randomIndex = getRandomInt(groupOfGifs.data.data.length);
  addGifToContainer(groupOfGifs.data.data[randomIndex]);
}

/** addGifToContainer will append our new gif to the $GIF_CONTAINER div on our page.*/

function addGifToContainer(gif) {
  let gifURL = gif.images.fixed_width.url;
  // console.log(gifURL);
  $GIF_CONTAINER.append($(`<img src=${gifURL}>`));
}

/** deleteGifs is a callback function that will fire when someone clicks the delete button.
 * It will delete all gifs on our page.
 */

function deleteGifs() {
  $GIF_CONTAINER.content = "";
}

$SUBMIT_BUTTON.on("click", getGif);
$DELETE_BUTTON.on("click", deleteGifs);
