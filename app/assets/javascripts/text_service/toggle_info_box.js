/**
 * Created by bimo on 10/2/18.
 */

// Hide and show Anvendt udgave
function toggleInfoBox(){
    var infoBox = document.getElementById('info-box');
    var btn = document.getElementById("toggleInfo");

    infoBox.classList.toggle('hidden');
    btn.classList.toggle("active");

}