document.getElementById("mobNav").addEventListener("click", toggleNav);

function toggleNav(){
    let nav = document.querySelector('#dropdown')
    nav.classList.toggle('visible')
  }