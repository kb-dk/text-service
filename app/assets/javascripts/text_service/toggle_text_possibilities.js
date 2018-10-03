/**
 * Created by bimo on 9/28/18.
 */

function toggleExposable() {
    var text_possibility_elements = document.getElementsByClassName("exposableDocumentFunctions");
    var text_possibility_toolbar = document.getElementsByClassName("textPossibilitiesToolbar")[0];
    var btn = document.getElementById("toggleTextPossibilities");

    if (btn.classList.contains('active')) {
        for (i = 0; i < text_possibility_elements.length; i++) {
            text_possibility_elements[i].style.display = 'none';
        }
        text_possibility_toolbar.classList.add('hidden');
        btn.classList.remove("active");
    } else {
        for (i = 0; i < text_possibility_elements.length; i++) {
            text_possibility_elements[i].style.display = 'block';
        }
        text_possibility_toolbar.classList.remove('hidden');
        btn.classList.add("active");
    }
}
