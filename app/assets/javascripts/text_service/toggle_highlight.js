/**
 * Created by bimo on 10/3/18.
 */

// Toggle highlight in landingpages
function toggleHighlight() {
    var highlighted_elements = document.getElementsByClassName('hit');
    var btn = document.getElementById("toggleHighlight");

    var len = highlighted_elements.length;
    for (i = 0; i < len; i++) {
        highlighted_elements[i].classList.toggle('transparentBackground');
    }
    btn.classList.toggle("active");
}
