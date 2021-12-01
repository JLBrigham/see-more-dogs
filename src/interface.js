var apiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/image/random/10"
);

var bostonApiConnection = new ApiConnection(
  "https://dog.ceo/api/breed/bulldog/boston/images/random/10"
);

var breedListApiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/list/all"
);

// 10 images of dogs appear when page is opened

apiConnection
  .connectToEndpoint()
  .then(apiConnection.displayResults.bind(apiConnection));

breedListApiConnection
  .connectToEndpoint()
  .then(breedListApiConnection.createBreedList.bind(breedListApiConnection));

// Adds 10 more dog images to page

var addMoreButton = document.getElementById("btn");

addMoreButton.addEventListener("click", function () {
  apiConnection
    .connectToEndpoint()
    .then(apiConnection.displayResults.bind(apiConnection));
});

// Removes images displayed on page and shows 10 images of Boston Terriers

var bostonOnlyButton = document.getElementById("boston-btn");

bostonOnlyButton.addEventListener("click", function () {
  bostonApiConnection.deleteResults();
  bostonApiConnection
    .connectToEndpoint()
    .then(bostonApiConnection.displayResults.bind(bostonApiConnection));
});
