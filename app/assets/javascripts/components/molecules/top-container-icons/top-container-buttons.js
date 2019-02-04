const btn = document.querySelector(
  '.mol-67b55050-5a26-4bd2-894d-c16ea4e11fa2 button'
)

if (btn) {
  btn.onclick = () => {
    document.body.classList.toggle('accessibility-font')
    if (document.body.classList.contains('accessibility-font')) {
      btn.setAttribute('aria-label', 'Decrease font')
    }
    else {
        btn.setAttribute('aria-label', 'Increase font')
    }
  }
}
