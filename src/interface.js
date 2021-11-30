var apiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/image/random/10"
);

var bostonApiConnection = new ApiConnection(
  "https://dog.ceo/api/breed/bulldog/boston/images/random/10"
);

apiConnection
  .connectToEndpoint()
  .then(apiConnection.displayResults.bind(apiConnection));

var addMoreButton = document.getElementById("btn");

addMoreButton.addEventListener("click", function () {
  apiConnection
    .connectToEndpoint()
    .then(apiConnection.displayResults.bind(apiConnection));
});

var bostonOnlyButton = document.getElementById("boston-btn");

bostonOnlyButton.addEventListener("click", function () {
  bostonApiConnection
    .connectToEndpoint()
    .then(bostonApiConnection.displayResults.bind(bostonApiConnection));
});
