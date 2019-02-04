const accordionSections = document.querySelectorAll(
  '.atom-317722d7-e5b8-4722-92cf-c73e9689042a .section'
)

Array.prototype.slice.call(accordionSections).forEach((element) => {
  element.onclick = () => {
    // Uncomment following if other open tabs should close when a new one opens
    // Array.prototype.slice.call(accordionSections).forEach((el) => {
    //   if (el !== element) {
    //     el.classList.remove('active')
    //   }
    // })
    element.classList.toggle('active')
  }
})
