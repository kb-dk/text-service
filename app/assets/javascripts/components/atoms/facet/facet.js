const facetSections = document.querySelectorAll(
  '.atom-317722d7-e5b8-4722-92cf-0be25cd1ac57 .section h4'
)

Array.prototype.slice.call(facetSections).forEach((element) => {
  element.onclick = () => {
    element.parentNode.classList.toggle('active')
  }
})
