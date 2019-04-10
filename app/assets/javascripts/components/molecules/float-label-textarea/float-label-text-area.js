// textarea
const floatLabelTextareas = document.querySelectorAll(
  '.mol-fe30df5a-c3ef-4607-8b62-2d58b044c575'
)

Array.prototype.slice.call(floatLabelTextareas).forEach((el) => {
  el.querySelector('textarea').onfocus = () => {
    el.classList.add('focus')
  }
  el.querySelector('textarea').onblur = (e) => {
    if (e.target.value.trim() === '') {
      el.classList.remove('focus')
    }
  }
})
