/**
 * Created by bimo on 9/28/18.
 */

function toggleExposable() {
    var text_possibility_elements = document.getElementsByClassName("exposableDocumentFunctions");
    var btn = document.getElementById("toggleTextPossibilities");


    if (btn.classList.contains('active')) {
        for (i = 0; i < text_possibility_elements.length; i++) {
            text_possibility_elements[i].style.display = 'none';
        }
        btn.classList.remove("active");
    } else {
        for (i = 0; i < text_possibility_elements.length; i++) {
            text_possibility_elements[i].style.display = 'block';
    }
    btn.classList.add("active");
}
}
