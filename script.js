
let slideIndex = 1;

showSlide(slideIndex)

function currentSlide(n) {
    showSlide(slideIndex = n)
}

function showSlide(n) {

    let i;
    let slides = document.getElementsByClassName('mySlides')
    let slideThumb = document.getElementsByClassName('slideThumb')

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i > slideThumb.length; i++) {
        slideThumb[i].className.replace('active', '')
    }

    slides[slideIndex - 1].style.display = 'block';

    slideThumb[slideIndex - 1] += 'active';

}

console.log(showSlide())
