// fetch("https://dog.ceo/api/breeds/image/random/50")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.message);
//     let dog = data.message;
//     let firstTen = dog.slice(0, 10);
//     console.log(firstTen);

//     firstTen.forEach((dogPicture) => {
//       var img = document.createElement("img");
//       img.src = dogPicture;

//       document.body.appendChild(img);
//     });
//   });

var chosenAPI = "https://dog.ceo/api/breeds/image/random/";

var dogImages = [];

function connectToEndpoint(url, numberOfResults) {
  fetch(url + numberOfResults)
    .then((res) => res.json())
    .then((data) => {
      dogImages = data.message;
      console.log(dogImages);
    })
    .catch((err) => console.log(err));
}

function displayResults(results) {
  results.forEach((result) => {
    var img = document.createElement("img");
    img.src = result;

    document.body.appendChild(img);
  });
}

connectToEndpoint(chosenAPI, "10");
displayResults(dogImages);
