const loginOverlay = document.querySelector(
  '.org-10e8caf4-efff-45e2-8bf7-70b494427c5e'
)

if (loginOverlay) {
  loginOverlay.querySelector('.close').onclick = (e) => {
    e.preventDefault()
    document.body.classList.toggle('login-open')
  }
}
