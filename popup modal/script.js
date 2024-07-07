let popup = document.querySelector(".popup");

let openModal = () => {
  popup.classList.add("popupOpen");
};

let closeModal = () => {
  popup.classList.remove("popupOpen");
  popup.style.transition = "transform 0.35s";
};
