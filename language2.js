let currentLanguage = 'ru'; // текущий язык

function toggleLanguage() {
    if (currentLanguage === 'ru') {
        document.getElementById('preorder-link').textContent = 'Buy the course on neural networks';
        document.getElementById('learn-more-link').textContent = 'Learn more';
        currentLanguage = 'en'; // меняем на английский
    } else {
        document.getElementById('preorder-link').textContent = 'Купить курс по нейросетям';
        document.getElementById('learn-more-link').textContent = 'Узнать более подробнее';
        currentLanguage = 'ru'; // меняем на русский
    }
}

document.getElementById('language-toggle').addEventListener('click', toggleLanguage);