const notifs = document.querySelectorAll('.page-notification')
const elements = document.querySelectorAll('.sticky')
Stickyfill.add(elements)

for (let i = 0; i < notifs.length; i++) {
  notifs[i].querySelector('.close').onclick = (e) => {
    e.preventDefault()
    notifs[i].classList.toggle('dismiss')
    Stickyfill.removeOne(notifs[i])
  }
}
