var apiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/image/random/10"
);

apiConnection.connectToEndpoint();

/* function delayed to give above function time to connect to api */

setTimeout(function () {
  apiConnection.displayResults();
}, 1500);

var addMoreButton = document.getElementById("btn");

addMoreButton.addEventListener("click", function () {
  apiConnection.connectToEndpoint();
});

addMoreButton.addEventListener("click", function () {
  setTimeout(function () {
    apiConnection.displayResults();
  }, 1500);
});
