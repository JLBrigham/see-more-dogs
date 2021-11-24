var apiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/image/random/10"
);

let connect = apiConnection.connectToEndpoint.bind(apiConnection);
console.log(connect);

let display = apiConnection.displayResults.bind(apiConnection);
console.log(display);

apiConnection.connectAndDisplay(connect, display);

// let connectAndDisplay = apiConnection.connectAndDisplay(connect, display);
// console.log(connectAndDisplay);

// connectAndDisplay();

// let display = apiConnection.displayResults;

// apiConnection.connectToEndpoint(display);

/* function delayed to give above function time to connect to api */

// setTimeout(function () {
//   apiConnection.displayResults();
// }, 1500);

var addMoreButton = document.getElementById("btn");

addMoreButton.addEventListener("click", function () {
  apiConnection.connectAndDisplay(connect, display);
  // apiConnection.connectToEndpoint();
});

// addMoreButton.addEventListener("click", function () {
//   setTimeout(function () {
//     apiConnection.displayResults();
//   }, 1500);
// });
