const dropDowninputs = document.querySelectorAll(
  '.mol-d4e97117-4bf7-4516-92fa-54bb0abc40fb'
)

Array.prototype.slice.call(dropDowninputs).forEach((input) => {
  window.onclick = (e) => {
    input.classList.remove('active')
  }
  input.querySelector('span').onclick = (e) => {
    input.classList.toggle('active')
    e.stopPropagation()
  }
  Array.prototype.slice.call(input.querySelectorAll('li')).forEach((li) => {
    if (input.querySelector('input').value === li.innerText) {
      li.classList.add('selected')
    }
    li.onclick = (e) => {
      Array.prototype.slice.call(input.querySelectorAll('li')).forEach((li) => {
        li.classList.remove('selected')
      })
      li.classList.add('selected')
      input.querySelector('input').value = li.innerText
      input.classList.toggle('active')
    }
  })
})
