"use strict";

function scrollToTop() {
    if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    ){
        document.querySelector('.ocr ').scrollTo({top:0, behavior: 'smooth' });

    }else{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

let scrollup_button = document.getElementById('scrollTop');
if (scrollup_button) {
    scrollup_button.addEventListener('click', scrollToTop, false);
}
