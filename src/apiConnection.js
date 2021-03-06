class ApiConnection {
  constructor(url) {
    this.results = [];
    this.url = url;
  }

  connectToEndpoint() {
    return fetch(this.url)
      .then((res) => res.json())
      .then((data) => {
        this.results = data.message;
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
      img.classList.add("dog-img");
      img.src = result;
      img.height = 300;
      img.width = 200;

      div.appendChild(img);
    });
  }

  deleteResults() {
    var dogImg = document.querySelectorAll(".dog-img");
    dogImg.forEach((image) => {
      image.remove();
    });
  }

  createBreedList() {
    var breedList = document.getElementById("breed-list");

    var resultsKeys = Object.keys(this.results);

    resultsKeys.forEach((result) => {
      var option = document.createElement("option");
      option.innerHTML = result;
      breedList.appendChild(option);
    });
  }
}
