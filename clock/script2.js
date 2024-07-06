setInterval(() => {
  const hrs = document.getElementById("hours");
  min = document.getElementById("minutes");
  sec = document.getElementById("seconds");
  ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  mm = document.getElementById("mm");
  ss = document.getElementById("ss");

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hrs.innerHTML = h + "<br><span>HOUR</span>";
  min.innerHTML = m + "<br><span>MINUTE</span>";
  sec.innerHTML = s + "<br><span>SECOND</span>";
  ampm.innerHTML = am;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
});
