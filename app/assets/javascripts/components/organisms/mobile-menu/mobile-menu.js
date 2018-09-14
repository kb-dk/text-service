const mobileMenu = document.querySelector('.mobile-menu')

if (mobileMenu) {
  Array.prototype.slice
    .call(mobileMenu.querySelectorAll('.action.sub-menu'))
    .forEach((element) => {
      element.onclick = (e) => {
        element.parentNode.classList.toggle('active')
      }
    })
}
