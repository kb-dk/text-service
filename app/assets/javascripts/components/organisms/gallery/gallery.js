const galleries = document.querySelectorAll(
  '.org-28a86595-e036-4303-a317-33c76700882f'
)

Array.prototype.slice.call(galleries).forEach((cv, ci, lo) => {
  let currentIndex = 0
  let touchstartX = 0
  let touchendX = 0
  const galleryItems = cv.querySelectorAll('.gallery-item')
  const galleryContainer = cv.querySelector('.gallery')
  const indicator = cv.querySelector('.indicator')
  const leftBtn = cv.querySelector('.swipe-left')
  const rightBtn = cv.querySelector('.swipe-right')
  galleryContainer.style.width = `${galleryItems.length * 100}%`
  const setGalleryIndex = (index) => {
    if (indicator.querySelector('.active')) {
      indicator.querySelector('.active').classList.remove('active')
    }
    indicator.querySelectorAll('span')[index].classList.add('active')
    galleryContainer.style.transform = `translateX(-${100 /
      galleryItems.length *
      index}%)`
  }
  const goLeft = () => {
    if (currentIndex > 0) {
      setGalleryIndex(--currentIndex)
    }
  }
  const goRight = () => {
    if (currentIndex < galleryItems.length - 1) {
      setGalleryIndex(++currentIndex)
    }
  }

  leftBtn.onclick = goLeft
  rightBtn.onclick = goRight

  cv.addEventListener(
    'touchstart',
    (e) => {
      touchstartX = e.changedTouches[0].screenX
    },
    false
  )

  cv.addEventListener(
    'touchend',
    (e) => {
      touchendX = e.changedTouches[0].screenX
      handleGesure()
    },
    false
  )

  const handleGesure = () => {
    if (touchendX < touchstartX) {
      goRight()
    }
    if (touchendX > touchstartX) {
      goLeft()
    }
  }

  for (var i = 0; i < galleryItems.length; i++) {
    let span = document.createElement('span')
    indicator.appendChild(span)
  }
  setGalleryIndex(currentIndex)
})
