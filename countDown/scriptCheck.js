const inputs = document.querySelectorAll("input");
let string = "";
let day = string + inputs;
const timer = () => {
  let endD = new Date(day);
  let nowD = new Date();
  let diffD = (endD - nowD) / 1000;
  console.log(diffD);
};
