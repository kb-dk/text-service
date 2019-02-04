const externalSearchComps = document.querySelectorAll(
  '.mol-6b8934d5-2aa8-4616-8229-f5e7d4a162dc'
)

Array.prototype.slice.call(externalSearchComps).forEach((el) => {
  el.querySelector('input').onkeyup = (e) => {
    if (e.keyCode === 13) {
      window.open(
        `http://www.kb.dk/en/soeg/?query=${el.querySelector('input').value}`,
        '_blank'
      )
    }
  }
  el.querySelector('button').onclick = () => {
    window.open(
      `http://www.kb.dk/en/soeg/?query=${el.querySelector('input').value}`,
      '_blank'
    )
  }
})
