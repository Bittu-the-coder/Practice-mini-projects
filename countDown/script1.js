const endDate = "10 July 2024 12:00 pm";

document.querySelector(".endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  let end = new Date(endDate);
  let now = new Date();
  let diff = (end - now) / 1000;
  console.log(diff);
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff % 60);
};

setInterval(() => {
  clock();
}, 1000);
