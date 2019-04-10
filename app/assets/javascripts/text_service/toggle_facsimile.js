/**
 * Created by bimo on 9/28/18.
 */
"use strict";
function toggleFacsimile() {
    let txtPanel  = document.getElementsByClassName("lpTextContainer")[0];
    let facPanel  = document.getElementsByClassName("lpFacsContainer")[0];
    let btn = document.getElementById("toggleFacsimile");

    txtPanel.classList.toggle("col-sm-12");
    txtPanel.classList.toggle("col-sm-6");
    facPanel.classList.toggle("hidden");

    btn.classList.toggle("active");

}