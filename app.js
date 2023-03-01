"use strict";

const $SUBMIT_BUTTON = $("#submit-button");
const $DELETE_BUTTON = $("delete-button");
let $gifInput;
// http://api.giphy.com/v1/gifs/search?q=

async function getGif(event) {
  event.preventDefault();
  $gifInput = $("#gif-input").val();
  console.log($gifInput);
  let uniqueGif = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${$gifInput}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
}

$SUBMIT_BUTTON.on("click", getGif);

// async function getCard() {
//   let response = await axios.get(
//     "/api/card");

//   console.log("getCard resp=", response);
//   $("#card").html(response.data);
// }

// $("#card-btn").on("click", getCard);
