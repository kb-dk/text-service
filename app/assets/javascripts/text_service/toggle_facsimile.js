/**
 * Created by bimo on 9/28/18.
 */

function toggleFacsimile() {
    var txtPanel  = document.getElementsByClassName("lpTextContainer")[0];
    var facPanel  = document.getElementsByClassName("lpFacsContainer")[0];
    var btn = document.getElementById("toggleFacsimile");

    if(btn.classList.contains('active')) {
        txtPanel.classList.add("col-sm-12");
        txtPanel.classList.add("col-sm-6");
        facPanel.classList.add("hidden");
        btn.classList.remove("active");
    } else {
        txtPanel.classList.add("col-sm-6");
        txtPanel.classList.remove("col-sm-12");
        facPanel.classList.remove("hidden");
        btn.classList.add("active");
    }
}