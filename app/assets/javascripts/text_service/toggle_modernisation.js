"use strict";

function toggle_modernizations() {
    let text_modernizations = document.querySelectorAll("span.symbol.modernized");
    if (this.classList.contains('active')) {
        for (i = 0; i < text_modernizations.length; i++) {
            text_modernizations[i].style.display = 'none';
            text_modernizations[i].parentElement.style.display = 'none';
        }
    } else {
        for (i = 0; i < text_modernizations.length; i++) {
            text_modernizations[i].style.display = 'inline';
            text_modernizations[i].classList.add('icon', 'filter_vintage');
            text_modernizations[i].parentElement.style.display = 'inline';
        }
    }
    this.classList.toggle('active');
}

let show_modernizations = document.getElementById('modernized');
if (show_modernizations) {
    show_modernizations.addEventListener('click', toggle_modernizations, false);
}
