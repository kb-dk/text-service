const facetSections = document.querySelectorAll(
  '.atom-317722d7-e5b8-4722-92cf-0be25cd1ac57 .section h4'
)

Array.prototype.slice.call(facetSections).forEach((element) => {
  element.onclick = () => {
    // Uncomment following if other open tabs should close when a new one opens
    // Array.prototype.slice.call(facetSections).forEach((el) => {
    //   if (el !== element) {
    //     el.classList.remove('active')
    //   }
    // })
    console.log(element);
    element.parentNode.classList.toggle('active')
  }
})
