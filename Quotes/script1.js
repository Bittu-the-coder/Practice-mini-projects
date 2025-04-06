const url = 'https://api.freeapi.app/api/v1/public/quotes?page=1&limit=10&query=human';
const options = { method: 'GET', headers: { accept: 'application/json' } };
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.querySelector("button");

async function getquote(url) {
  try {
    const response = await fetch(url, options);
    let data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.data.data.length);
    const quoteData = data.data.data[randomIndex];

    quote.innerHTML = `"${quoteData.content}"`;
    author.innerHTML = `- ${quoteData.author}`;
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    quote.innerHTML = "Oops! Could not load quote.";
    author.innerHTML = "";
  }
}

btn.addEventListener("click", () => {
  getquote(url);
});

getquote(url); // load a quote on page load

// Refresh quote every 24 hours
setInterval(() => getquote(url), 86400000);