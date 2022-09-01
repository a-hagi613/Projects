const form = document.getElementById("submitForm");
const qr = document.getElementById("qrcode");
// console.log(form, qr);

// Button submit
const submitForm = e => {
  e.preventDefault();
  qr.innerHTML = "";

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  // console.log(url, size);

  // check url
  if (url === "") {
    alert("Please enter a URL");
  } else {
    generateQRCode(url, size);
  }
};

// Generate QR code suing imported qr generator cdn
const generateQRCode = (url, size) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: size,
    height: size,
  });
};
form.addEventListener("submit", submitForm);