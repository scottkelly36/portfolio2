const hamburger = document.querySelector("#mobNav");
const menu = document.querySelector("#dropdown");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("visible")
})

const copyRight = document.querySelector('#copyright')
const date = new Date()


copyRight.innerHTML = `Metaa Ⓒ ${date.getFullYear()}`