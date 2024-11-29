document.getElementById("language-toggle").addEventListener("click", function() {
    const textBlock = document.getElementById("text-block");
    const ruTexts = textBlock.getElementsByClassName("text-ru");
    const enTexts = textBlock.getElementsByClassName("text-en");
    
    Array.from(ruTexts).forEach(p => p.style.display = p.style.display === "none" ? "block" : "none");
    Array.from(enTexts).forEach(p => p.style.display = p.style.display === "none" ? "block" : "none");
});

document.getElementById('language-toggle').addEventListener('click', function() {
    const ruFlag = document.getElementById('ru-flag');
    const ukFlag = document.getElementById('uk-flag');

    if (ruFlag.style.display === 'none') {
        ruFlag.style.display = 'block'; // Показываем флаг России
        ukFlag.style.display = 'none'; // Скрываем флаг Англии
    } else {
        ruFlag.style.display = 'none'; // Скрываем флаг России
        ukFlag.style.display = 'block'; // Показываем флаг Англии
    }
});