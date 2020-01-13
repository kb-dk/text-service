"use strict";

function toggle_translation() {
    let text_translations = document.querySelectorAll("span.symbol.translation");
    if (this.classList.contains('active')) {
        for (i = 0; i < text_translations.length; i++) {
            text_translations[i].style.display = 'none';
            text_translations[i].parentElement.style.display = 'none';
        }
    } else {
        for (i = 0; i < text_translations.length; i++) {
            text_translations[i].style.display = 'inline';
            text_translations[i].classList.add('icon', 'translate');
            text_translations[i].parentElement.style.display = 'inline';
        }
    }
    this.classList.toggle('active');
}

let show_translations = document.getElementById('translation');
if (show_translations) {
    show_translations.addEventListener('click', toggle_translation, false);
}
