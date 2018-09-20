const menubtn = document.querySelectorAll('.hamburger-menu')[0]
const menuSearchBtn = document.querySelector('#searchBtn');
const loginButton = document.querySelector('#loginBtn');

if (menubtn) {
  menubtn.onclick  = function() {
    document.body.classList.toggle('menu-open')
  }
}

if (menuSearchBtn) {
  menuSearchBtn.onclick = function() {
    document
      .querySelector('.top-menu .form-wrapper')
      .classList.toggle('collapsed')
    document.body.classList.toggle('menu-search-open')
    document
      .querySelector('.mol-368fb22a-f8c3-45d3-9a05-ed68933d0d2a a')
      .classList.toggle('collapsed')
  }
}

if (loginButton) {
  loginButton.onclick = function(e) {
    e.preventDefault()
    document.body.classList.toggle('login-open')
  }
}

const toggleMobileSearch = function(e) {
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

