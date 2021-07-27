"use strict";

function toggle_title() {
    let text_titles = document.querySelectorAll("span.symbol.title");
    if (this.classList.contains('active')) {
        for (i = 0; i < text_titles.length; i++) {
            text_titles[i].style.display = 'none';
            text_titles[i].parentElement.classList.remove ('show_icons');
        }
    } else {
        for (i = 0; i < text_titles.length; i++) {
            text_titles[i].style.display = 'inline';
            text_titles[i].classList.add('icon', 'title');
            text_titles[i].parentElement.classList.add ('show_icons');
        }
    }
    this.classList.toggle('active');
}

let show_titles = document.getElementById('title');
if (show_titles) {
    show_titles.addEventListener('click', toggle_title, false);
}
