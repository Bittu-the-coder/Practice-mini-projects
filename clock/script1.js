const body = document.querySelector("body");
hourHand = document.querySelector(".hour");
minHand = document.querySelector(".minute");
secHand = document.querySelector(".second");
modeSwitch = document.querySelector(".mode-switch");

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Dark Mode" : "Light Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
  let date = new Date();
  let secToDeg = (date.getSeconds() / 60) * 360;
  let minToDeg = (date.getMinutes() / 60) * 360;
  let hrToDeg = (date.getHours() / 12) * 360;

  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
  minHand.style.transform = `rotate(${minToDeg}deg)`;
  secHand.style.transform = `rotate(${secToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();
