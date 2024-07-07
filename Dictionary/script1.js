const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
  try {
    resultDiv.innerHTML = "Fetching data...";
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    let definitions = data[0].meanings[0].definitions[0];
    resultDiv.innerHTML = `<h2><strong>Word:</strong>${data[0].word}</h2>
    <p class= "part-of-speech"><strong>Part of speech:</strong>${
      data[0].meanings[0].partOfSpeech
    }</p>
   <p><strong>Meaning:</strong>${
     definitions.definition === undefined ? "Not Found" : definitions.definition
   }</p>
   <p><strong>Example:</strong>${
     definitions.example === undefined ? "Not Found" : definitions.example
   }</p>
   <p class="ant"><strong >Antonyms:</strong></p>
   <p class="syn"><strong>synonyms:</strong></p>
   `;
    // console.log(data);

    //feching synonyms
    const synP = document.querySelector(".syn");
    if (definitions.synonyms.length === 0) {
      resultDiv.innerHTML += `<spam>Not Found</span>`;
    } else {
      for (let i = 0; i < definitions.synonyms.length; i++) {
        synP.innerHTML += `<li class="syn">${definitions.synonyms[i]}</li>`;
      }
    }

    //feching antonims
    const antP = document.querySelector(".ant");
    if (definitions.antonyms.length === 0) {
      resultDiv.innerHTML += `<spam>Not Found</span>`;
    } else {
      for (let i = 0; i < definitions.antonyms.length; i++) {
        antP.innerHTML += `<li class="ant">${definitions.antonyms[i]}</li>`;
      }
    }

    //adding read more
    resultDiv.innerHTML += `<div><a href= "${data[0].sourceUrls}" target = "_black">Read More</a></div>`;
  } catch (error) {
    resultDiv.innerHTML = `<p>Sorry, the word could not be found</p>`;
  }
};
