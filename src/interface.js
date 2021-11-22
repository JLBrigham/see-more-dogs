var apiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/image/random/10"
);

apiConnection.connectToEndpoint();

// function delayed to give above function time to connect to api
setTimeout(function () {
  apiConnection.displayResults();
}, 2000);

var x = document.getElementById("btn");

x.addEventListener("click", function () {
  apiConnection.connectToEndpoint();
});

x.addEventListener("click", function () {
  setTimeout(function () {
    apiConnection.displayResults();
  }, 2000);
});
