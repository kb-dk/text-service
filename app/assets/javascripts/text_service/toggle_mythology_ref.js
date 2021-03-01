"use strict";

function toggle_mythology_ref() {
    let text_mythology_refs = document.querySelectorAll("span.symbol.mytologi");
    if (this.classList.contains('active')) {
        for (i = 0; i < text_mythology_refs.length; i++) {
            text_mythology_refs[i].style.display = 'none';
        }
    } else {
        for (i = 0; i < text_mythology_refs.length; i++) {
            text_mythology_refs[i].style.display = 'inline';
            text_mythology_refs[i].classList.add('icon', 'mytologi');
        }
    }
    this.classList.toggle('active');
}
let show_mythology_refs = document.getElementById('mytologi');
if (show_mythology_refs) {
    show_mythology_refs.addEventListener('click', toggle_mythology_ref, false);
}
