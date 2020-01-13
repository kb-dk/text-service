/**
 * Created by bimo on 10/2/18.
 */

// Hide and show Anvendt udgave
"use strict";
function toggleInfoBox(){
    let infoBox = document.getElementById('info-box');
    let btn = document.getElementById("toggleInfoBtn");

    infoBox.classList.toggle('hidden');
    btn.classList.toggle("active");
}


let toggleInfoBtn = document.getElementById('toggleInfoBtn');
if (toggleInfoBtn) {
    toggleInfoBtn.addEventListener('click', toggleInfoBox, false);
}