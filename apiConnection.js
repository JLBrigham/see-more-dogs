// const apiConnection = fetch("https://dog.ceo/api/breeds/image/random/10");

// apiConnection
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.message);
//     return data.message;
//   })
//   .catch((err) => console.log(err));

// console.log(apiConnection);

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
}

var apiConnection = new ApiConnection(
  "https://dog.ceo/api/breeds/image/random/10"
);

apiConnection.connectToEndpoint();

// var chosenAPI = "https://dog.ceo/api/breeds/image/random/";

// var results = [];

// function displayResults(results) {
//   console.log(results);
// var div = document.getElementsByClassName("content-container");
// results.forEach((result) => {
//   console.log(result);
// var img = document.createElement("img");
// img.src = result;
// console.log(img.src);

// div.appendChild(img);
//   });
// }

// function connectToEndpoint(url, numberOfResults) {
//   fetch(url + numberOfResults)
//     .then((res) => res.json())
//     .then((data) => {
//       results = data.message;
//       function displayResults(results)
//       // console.log(results);
//       // var div = document.getElementById("content-container");
//       // results.forEach((result) => {
//       //   console.log(result);
//       //   var img = document.createElement("img");
//       //   img.src = result;
//       //   img.width = "200";
//       //   img.height = "300";
//       //   console.log(img.src);

//       //   div.appendChild(img);
//       })

//     .catch((err) => console.log(err));
// }

// // function displayResults(results) {
// //   console.log(results);
// // var div = document.getElementsByClassName("content-container");
// // results.forEach((result) => {
// //   console.log(result);
// // var img = document.createElement("img");
// // img.src = result;
// // console.log(img.src);

// // div.appendChild(img);
// //   });
// // }

// connectToEndpoint(chosenAPI, "10");
// // displayResults(dogImages);
