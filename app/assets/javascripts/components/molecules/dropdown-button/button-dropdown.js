const dropDownButtons = document.querySelectorAll(
  '.mol-6391dbcf-4806-4f67-a2a5-46a4a831f576 '
)

Array.prototype.slice.call(dropDownButtons).forEach((btn) => {
  btn.onclick = (e) => {
    btn.classList.toggle('active')
  }
})
