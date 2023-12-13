const typewriterdiv = document.querySelector(".type");
var typing = new Typed(typewriterdiv, {
  // add
  strings: [
    "",
    "Leather Palm",
    "Leather Sandals",
    "Designer Slides",
    "Half-Shoe",
    "and other leather-made accessories",
  ],
  typeSpeed: 250,
  loop: true,
  showCursor: true,
  fadeOutClass: "typed-fade-in",
});

let buyNow = document.querySelector(".buy");
buyNow.addEventListener("click", () => {
  window.location = "https://app.gigvalleytech.com/vpaccount/?register";
});
let navBtn = document.querySelector(".buy-data");
navBtn.addEventListener("click", function () {
  window.location = "https://app.gigvalleytech.com/";
});

let login = document.querySelector(".login");
login.addEventListener("click", function () {
  window.location = "https://app.gigvalleytech.com/";
});
const counts = documents.querySelectoraAll(".count");
const speed = 97;
counts.forEach((counter) => {
  function upData() {
    const target = Number(counter.getAttribute("data-target"));
    const count = Number(counter.innerText);
    const inc = target / speed;
    if (count < target) {
      counter.innerText = Math.floor(inc + count);
      setTimeout(upData, 1);
    } else {
      counter.innerText = target;
    }
  }
  upData();
});
