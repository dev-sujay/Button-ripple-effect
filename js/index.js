const btn = document.querySelector(".btn")
btn.addEventListener('mouseover', (event) => {
  let x = event.pageX - btn.offsetLeft
  let y = event.pageY - btn.offsetTop

  btn.style.setProperty("--xPos", x + "px")
  btn.style.setProperty("--yPos", y + "px")
  
})