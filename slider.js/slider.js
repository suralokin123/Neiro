let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.small-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.small-carousel-slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentSlide += direction;
    showSlide(currentSlide);
}

// При загрузке страницы показать первый слайд
document.addEventListener("DOMContentLoaded", function() {
    showSlide(currentSlide);
});


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

// Добавляем обработчик прокрутки
function handleWheel(event) {
    event.preventDefault(); // Запараллеливаем стандартное поведение скролла
    if (event.deltaY < 0) {
        moveSlide(-1);
    } else {
        moveSlide(1);
    }
}