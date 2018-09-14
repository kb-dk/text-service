const menubtn = document.querySelectorAll('.hamburger-menu')[0]
const menuSearchBtn = document.querySelector('#searchBtn')
const loginButton = document.querySelector('#loginBtn')

if (menubtn) {
  menubtn.onclick = () => {
    document.body.classList.toggle('menu-open')
  }
}

if (menuSearchBtn) {
  menuSearchBtn.onclick = () => {
    document
      .querySelector('.top-menu .form-wrapper')
      .classList.toggle('collapsed')
    document.body.classList.toggle('menu-search-open')
  }
}

if (loginButton) {
  loginButton.onclick = (e) => {
    e.preventDefault()
    document.body.classList.toggle('login-open')
  }
}

const toggleMobileSearch = (e) => {
  e.preventDefault()
  document.querySelector('.mobile-search-area').classList.toggle('collapsed')
  document.getElementById('searchText').classList.toggle('hide')
  document.querySelector('.mobile-search-area input').focus()
}

if (document.querySelector('#searchText')) {
  document.querySelector('#searchText').onclick = toggleMobileSearch
  document.querySelector(
    '.mobile-search-area button'
  ).onclick = toggleMobileSearch
}

