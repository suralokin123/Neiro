let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    slides.style.transform = `translateX(${-currentSlide * 300}px)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Показывать первый слайд при загрузке
showSlide(currentSlide);

// Открытие модального окна
function openModal(slide) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const caption = document.getElementById('caption');
    modal.style.display = "block";
    modalImg.src = slide.children[0].src;
    caption.innerHTML = slide.children[0].alt;
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}