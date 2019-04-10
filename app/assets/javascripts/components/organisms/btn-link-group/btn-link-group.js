const btnLinkGroups = document.querySelectorAll(
  '.org-c8bfbf49-fc45-4e14-8fb3-e80d40ee1285'
)

if (btnLinkGroups) {
  Array.prototype.slice.call(btnLinkGroups).forEach((element) => {
    const dd = element.querySelector('.menu span')
    dd.onclick = (e) => {
      dd.parentNode.classList.toggle('active')
    }
  })
}
