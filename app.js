"use strict";

const $SUBMIT_BUTTON = $("#submit-button");
const $DELETE_BUTTON = $("delete-button");
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

  addGifToContainer(groupOfGifs.data.data);
}

/**  */

function addGifToContainer(gifs) {

  const randomInt = getRandomInt(gifs.length);

  console.log(gifs[randomInt].url);
}





$SUBMIT_BUTTON.on("submit", getGif);

// async function getCard() {
//   let response = await axios.get(
//     "/api/card");

//   console.log("getCard resp=", response);
//   $("#card").html(response.data);
// }

// $("#card-btn").on("click", getCard);
