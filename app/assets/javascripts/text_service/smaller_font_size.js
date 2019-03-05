"use strict";
function resize_to_fit() {
    let pageIntro = document.getElementsByClassName("org-fc19c325-bb61-4c28-ad0e-7c272912ed78")[0];
    if (pageIntro) {
        let heading = pageIntro.getElementsByTagName("h1")[0];
        if (heading) {
            let text_size = heading.innerHTML.trim().length;
            if (text_size >= 50) {
                let fontsize = getComputedStyle(heading).fontSize;
                let newFontSize = (parseInt(fontsize, 10) - 15).toString() + "px";
                document.getElementsByClassName("org-fc19c325-bb61-4c28-ad0e-7c272912ed78")[0].getElementsByTagName("h1")[0].style.fontSize = newFontSize;
            }
        }
    }
}

window.addEventListener('load', resize_to_fit(), false);
