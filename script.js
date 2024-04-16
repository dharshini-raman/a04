const jokeAPI = "https://official-joke-api.appspot.com/random_joke";
const memeAPI = "https://api.imgflip.com/get_memes";

// Function to fetch a random joke from the API
async function fetchJoke() {
    try {
        const response = await fetch(jokeAPI);
        const jokeData = await response.json();
        return jokeData;
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
}

// Function to display the joke in the UI
function displayJoke(joke) {
    document.getElementById("joke-setup").textContent = joke.setup;
    document.getElementById("joke-punchline").textContent = joke.punchline;
}

// Function to fetch a random meme from the API
async function fetchMeme() {
    try {
        const response = await fetch(memeAPI);
        const memeData = await response.json();
        const memes = memeData.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        return memes[randomIndex];
    } catch (error) {
        console.error("Error fetching meme:", error);
    }
}

// Function to display the meme in the UI
function displayMeme(meme) {
    const memeImg = document.getElementById("meme-img");
    memeImg.src = meme.url;
    memeImg.alt = meme.name;
}

// Event listener for the "Get Another Joke" button
document.getElementById("new-joke-btn").addEventListener("click", async () => {
    const joke = await fetchJoke();
    displayJoke(joke);
});

// Event listener for the "Get Another Meme" button
document.getElementById("new-meme-btn").addEventListener("click", async () => {
    const meme = await fetchMeme();
    displayMeme(meme);
});

// Initial fetch and display of joke and meme
fetchJoke().then(joke => {
    displayJoke(joke);
});

fetchMeme().then(meme => {
    displayMeme(meme);
});
