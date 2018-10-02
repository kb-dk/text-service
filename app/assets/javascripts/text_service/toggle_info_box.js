/**
 * Created by bimo on 10/2/18.
 */

// Hide and show Anvendt udgave
function toggleInfoBox(){
    var infoBox = document.getElementById('info-box');
    var btn = document.getElementById("toggleInfo");

    if (infoBox.classList.contains('hidden')){
        infoBox.classList.remove('hidden');
        btn.classList.add("active");
    } else {
        infoBox.classList.add('hidden');
        btn.classList.remove("active");
    }
}