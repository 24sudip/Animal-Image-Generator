/*
Public API Repo
https://github.com/public-apis/public-apis
*/
let cat = document.querySelector(".cat");
let fox = document.querySelector(".fox");
let dog = document.querySelector(".dog");

const catBtn = document.querySelector(".get-cat");
const foxBtn = document.querySelector(".get-fox");
const dogBtn = document.querySelector(".get-dog");

catBtn.addEventListener("click", getRandomCat);
foxBtn.addEventListener("click", getRandomFox);
dogBtn.addEventListener("click", getRandomDog);

// getRandomCat images
function getRandomCat() {
    fetch("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true").then((response) => response.json())
    .then(responseData => {
        cat.innerHTML = `<img src="${responseData[0]}"/>`;
    });
}
// function getRandomCat() {
//     cat.innerHTML = `<img src="https://placekitten.com/500/387"/>`;
// }

// getRandomFox image
function getRandomFox() {
    fetch("https://randomfox.ca/floof/").then((response) => response.json())
    .then((responseData) => {
        fox.innerHTML = `<img src="${responseData.image}"/>`;
    });
}

// getRandomDog image
function getRandomDog() {
    fetch("https://random.dog/woof.json").then((response) => response.json())
    .then((responseData) => {
        dog.innerHTML = `<img src="${responseData.url}"/>`;
    });
}
