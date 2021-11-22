var InitialApiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/image/random/10"
);

InitialapiConnection.connectToEndpoint();
setTimeout(function () {
  InitialapiConnection.displayResults();
}, 2000);
