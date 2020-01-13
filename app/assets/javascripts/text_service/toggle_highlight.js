/**
 * Created by bimo on 10/3/18.
 */

// Toggle highlight in landingpages
"use strict";
function toggleHighlight() {
    let highlighted_elements = document.getElementsByClassName('hit');
    let btn = document.getElementById("toggleHighlight");
    let len = highlighted_elements.length;
    for (i = 0; i < len; i++) {
        highlighted_elements[i].classList.toggle('transparentBackground');
    }
    btn.classList.toggle("active");
}


let toggleHighlight_btn = document.getElementById('toggleHighlight');
if (toggleHighlight_btn) {
    toggleHighlight_btn.addEventListener('click', toggleHighlight, false);
}