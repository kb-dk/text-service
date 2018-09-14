// input text
const floatLabelInputs = document.querySelectorAll(
  '.mol-ef63e9db-1c74-43c1-82e7-4c8b8c5bfa00'
)

Array.prototype.slice.call(floatLabelInputs).forEach((el) => {
  el.querySelector('input').onfocus = () => {
    el.classList.add('focus')
  }
  el.querySelector('input').onblur = (e) => {
    if (e.target.value.trim() === '') {
      el.classList.remove('focus')
    }
  }
  el.querySelector('button').onclick = (e) => {
    el.querySelector('input').value = ''
    el.classList.remove('focus')
  }
})
