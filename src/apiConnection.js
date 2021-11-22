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

function connectToEndpoint(url, numberOfResults) {
  fetch(url + numberOfResults)
    .then((res) => res.json())
    .then((data) => console.log(data.message));
}

connectToEndpoint("https://dog.ceo/api/breeds/image/random/", "10");
