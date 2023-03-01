"use strict";

const $SUBMIT_BUTTON = $("#submit-button");
const $DELETE_BUTTON = $("#delete-button");
const $GIF_CONTAINER = $(".Gif-container");
let $gifInput;
// http://api.giphy.com/v1/gifs/search?q=

/** Gets a random number between 0 and the number of gifs */

function getRandomInt(numOfGifs) {
  return Math.floor(Math.random() * numOfGifs);
}

/** */

async function getGif(event) {
  event.preventDefault();
  $gifInput = $("#gif-input").val();

  let groupOfGifs = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${$gifInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  // let randomGif = getRandomInt(groupOfGifs.data.data);
  // console.log(groupOfGifs.data.data);
  let randomIndex = getRandomInt(groupOfGifs.data.data.length);
  // console.log(groupOfGifs.data.data[randomIndex]);
  console.log(groupOfGifs.data.data);
  addGifToContainer(groupOfGifs.data.data[randomIndex]);
}

/**  */

function addGifToContainer(gif) {
  let gifURL = gif.images.fixed_width.url;
  // console.log(gifURL);
  $GIF_CONTAINER.append($(`<img src=${gifURL}>`));
}

function deleteGifs() {
  $GIF_CONTAINER.content = "";
}

$SUBMIT_BUTTON.on("click", getGif);
$DELETE_BUTTON.on("click", deleteGifs);

// async function getCard() {
//   let response = await axios.get(
//     "/api/card");

//   console.log("getCard resp=", response);
//   $("#card").html(response.data);
// }

// $("#card-btn").on("click", getCard);
