"use strict";

function toggle_pagebreak() {
    let text_pagebreaks = document.querySelectorAll(".symbol.pagination.other");
    if (this.classList.contains('active')) {
        for (i = 0; i < text_pagebreaks.length; i++) {
            text_pagebreaks[i].style.display = 'none';
            text_pagebreaks[i].parentElement.style.display = 'none';
        }
    } else {
        for (i = 0; i < text_pagebreaks.length; i++) {
            text_pagebreaks[i].style.display = 'inline';
            text_pagebreaks[i].parentElement.style.display = 'inline';
        }
    }

    text_pagebreaks = document.querySelectorAll(".symbol.pagination.edition");
    if (this.classList.contains('active')) {
        for (i = 0; i < text_pagebreaks.length; i++) {
            text_pagebreaks[i].style.position = 'absolute';
            text_pagebreaks[i].firstChild.classList.add('hidden');
        }
    } else {
        for (i = 0; i < text_pagebreaks.length; i++) {
            text_pagebreaks[i].style.position = 'static';
            text_pagebreaks[i].firstChild.classList.remove('hidden');
        }
    }

    this.classList.toggle('active');
}

let show_pagebreaks = document.getElementById('pagination_other');
if (show_pagebreaks) {
    show_pagebreaks.addEventListener('click', toggle_pagebreak, false);
}
