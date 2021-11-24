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
      .catch((err) => {
        console.log(err);
        alert("No more dogs at the moment :(");
      });
  }

  displayResults() {
    var div = document.getElementById("images-container");
    this.results.forEach((result) => {
      var img = document.createElement("img");
      img.src = result;
      img.height = 300;
      img.width = 200;

      div.appendChild(img);
    });
  }

  connectAndDisplay(connect, display) {
    connect();
    display();
  }
}
