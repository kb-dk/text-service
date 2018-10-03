/**
 * Created by bimo on 9/28/18.
 */

function toggleFacsimile() {
    var txtPanel  = document.getElementsByClassName("lpTextContainer")[0];
    var facPanel  = document.getElementsByClassName("lpFacsContainer")[0];
    var btn = document.getElementById("toggleFacsimile");

    txtPanel.classList.toggle("col-sm-12");
    txtPanel.classList.toggle("col-sm-6");
    facPanel.classList.toggle("hidden");

    btn.classList.toggle("active");

}