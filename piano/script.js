const pianoKeys = document.querySelectorAll(".piano-keys .Key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  audio = new Audio("tunes/a.wav"); //by default, audio src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
  audio.play(); // playing audio
  //   console.log(allKeys);

  const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting  clicked key element
  clickedKey.classList.add("active");
  setTimeout(() => {
    //removing active class list
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key); //adding dat key value to the allkeys array
  //calling tunes
  key.addEventListener("click", () => playTune(key.dataset.key));
  //   console.log(key.dataset.key);
});

const handleVolume = (e) => {
  audio.volume = e.target.value; //passing the range slider value as an audio volume
};

const showHideKeys = () => {
  //to toggle keys
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  // if the pressed key is in the allkeys only callthe playtune function
  if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
