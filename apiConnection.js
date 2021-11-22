class ApiConnection {
  constructor(url) {
    this.results = [];
    this.url = url;
  }

  connectToEndpoint() {
    fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.results = data.message;
        console.log(this.results);
      })
      .catch((err) => console.log(err));
  }

  displayResults() {
    var div = document.getElementById("content-container");
    this.results.forEach((result) => {
      console.log(result);
      var img = document.createElement("img");
      img.src = result;
      console.log(img.src);

      div.appendChild(img);
    });
  }
}

// var apiConnection = new ApiConnection(
//   "https://dog.ceo/api/breeds/image/random/10"
// );

// apiConnection.connectToEndpoint();
// setTimeout(function () {
//   apiConnection.displayResults();
// }, 5000);
