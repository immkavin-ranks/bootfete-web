;(function runCarousel () {
  let carousel = document.getElementById('carousel-list')
  let images = Array.from(carousel.querySelectorAll('li'))
  let imageIndex = 0

  function updateCarousel () {
    images.forEach((image, index) => {
      image.style.display = index === imageIndex ? 'block' : 'none'
    })
    imageIndex = (imageIndex + 1) % images.length
  }

  setInterval(updateCarousel, 4000)
  updateCarousel()
})()
;(function runDate () {
  const date = document.getElementById('date')
  function setDate () {
    date.textContent = new Date().toLocaleString()
  }

  setInterval(setDate, 1000)
  setDate()
})()
;(function scroll () {
  let top = document.getElementById('top')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      top.classList.add('visible')
    } else {
      top.classList.remove('visible')
    }
  })

  // Scroll to top smoothly when clicked
  top.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})()
