/**
 * Created by bimo on 10/3/18.
 */
"use strict";

function goFullscreen() {
    let element = $('.ocr').get(0);
    let scrollTopButton = document.querySelector("#scrollTop");
    if (element.requestFullscreen) {
        element.requestFullscreen();
        scrollTopButton.style.visibility = 'visible';
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        scrollTopButton.style.visibility = 'visible';
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        scrollTopButton.style.visibility = 'visible';
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        scrollTopButton.style.visibility = 'visible';
    }
}

function exitFullscreen() {
    let scrollTopButton = document.querySelector("#scrollTop");
    if (document.exitFullscreen) {
        document.exitFullscreen();
        scrollTopButton.style.visibility = 'hidden';
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        scrollTopButton.style.visibility = 'hidden';
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        scrollTopButton.style.visibility = 'hidden';
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        scrollTopButton.style.visibility = 'hidden';
    }
}

// Exit fullscreen
let escFullScreenButton = document.getElementById('escFullScreen');
if (escFullScreenButton) {
    escFullScreenButton.addEventListener('click', exitFullscreen, false);
}

// Fullscreen button functionality
let ocrFullscreenButton = document.getElementById('ocrFullscreenButton');
if (ocrFullscreenButton) {
    ocrFullscreenButton.addEventListener('click', goFullscreen, false);
}
