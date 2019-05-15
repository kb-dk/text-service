"use strict";

function toggle_infos() {
    let text_infos = document.querySelectorAll("span.symbol.info");
    if (this.checked) {
        for (i = 0; i < text_infos.length; i++) {
            text_infos[i].style.display = 'inline';
            text_infos[i].classList.add('icon', 'info');
            text_infos[i].parentElement.style.display = 'inline';
        }
    } else {
        for (i = 0; i < text_infos.length; i++) {
            text_infos[i].style.display = 'none';
            text_infos[i].parentElement.style.display = 'none';
        }
    }
}

let show_infos = document.getElementById('Show_infos');
if (show_infos) {
    show_infos.addEventListener('click', toggle_infos, false);
}
