const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.querySelector("button");

async function getquote(url) {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = `"${data.content}"`;
  author.innerHTML = data.author;
}

btn.addEventListener("click", () => {
  btn.onclick = getquote(api_url);
});

getquote(api_url);

setInterval(getquote, 86400000); // 86400000 milliseconds = 24 hours
