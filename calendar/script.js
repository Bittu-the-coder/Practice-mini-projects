const date = document.getElementById("date"),
  day = document.getElementById("day"),
  month = document.getElementById("month"),
  year = document.getElementById("year");

const today = new Date();

const weekDays = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate();
day.innerHTML = weekDays[today.getDate()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();
