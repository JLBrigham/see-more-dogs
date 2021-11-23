var apiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/image/random/10"
);

apiConnection.connectToEndpoint();

/* function delayed to give above function time to connect to api */

setTimeout(function () {
  apiConnection.displayResults();
}, 1500);

var button = document.getElementById("btn");

button.addEventListener("click", function () {
  apiConnection.connectToEndpoint();
});

button.addEventListener("click", function () {
  setTimeout(function () {
    apiConnection.displayResults();
  }, 1500);
});
