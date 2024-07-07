const qrText = document.getElementById("qr-text"),
  sizes = document.getElementById("sizes"),
  generate = document.getElementById("generate"),
  download = document.getElementById("download");

const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;
generate.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmptyInput();
});

download.addEventListener("click", () => {
  let img = document.querySelector(".qr-body img");

  if (img !== null) {
    let imgAtrr = img.getAttribute("src");
    download.setAttribute("href", imgAtrr);
  } else {
    download.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});

function isEmptyInput() {
  //   if (qrText.value.length > 0) {
  //     generateQRCode();
  //   } else {
  //     alert("Enter your text or URL to generate QR code.");
  //   }

  qrText.value.length > 0
    ? generateQRCode()
    : alert("Enter your text or URL to generate QR code.");
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#2c2202",
  });
}
