(function runCarousel() {
    let carousel = document.getElementById('carousel-list')
    let images = Array.from(carousel.querySelectorAll('li'))
    let imageIndex = 0

    function updateCarousel() {
        images.forEach((image, index) => {
            image.style.display = index === imageIndex ? 'block' : 'none'
        })
        imageIndex = (imageIndex + 1) % images.length
    }

    updateCarousel()
    setInterval(updateCarousel, 4000)
})()