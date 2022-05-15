const hamburger = document.querySelector("#mobNav");
const menu = document.querySelector("#dropdown");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("visible")
})