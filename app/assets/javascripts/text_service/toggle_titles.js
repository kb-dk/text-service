"use strict";

function toggle_title() {
    let text_titles = document.querySelectorAll("span.symbol.title");
    if (this.checked) {
        for (i = 0; i < text_titles.length; i++) {
            text_titles[i].style.display = 'inline';
            text_titles[i].classList.add('icon', 'title');
            text_titles[i].parentElement.style.display = 'inline';
        }
    } else {
        for (i = 0; i < text_titles.length; i++) {
            text_titles[i].style.display = 'none';
            text_titles[i].parentElement.style.display = 'none';
        }
    }
}

let show_titles = document.getElementById('Show_titles');
if (show_titles) {
    show_titles.addEventListener('click', toggle_title, false);
}
