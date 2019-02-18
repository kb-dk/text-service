/**
 * Created by bimo on 10/3/18.
 */

// Go fullscreen
var viewFullScreen = document.getElementById("ocrFullscreenButton");
if (viewFullScreen) {
    viewFullScreen.addEventListener("click", function () {
        var docElm = document.getElementsByClassName("ocr")[0];
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
    });
}

// Close fullscreen
var closeFullScreen = document.getElementById("escFullScreen");
if (closeFullScreen) {
    closeFullScreen.addEventListener("click", function () {
        var docElm = document.getElementsByClassName("ocr")[0];
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    });
}
