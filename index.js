const dogDiv = document.getElementById("doggo")

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => dogDiv.innerHTML = `
  <img class="dogPic" src="${data.message}" alt="">
  `
)
