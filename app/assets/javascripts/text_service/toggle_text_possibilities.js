/**
 * Created by bimo on 9/28/18.
 */
"use strict";
function toggleExposable() {
    let text_possibility_elements = document.getElementsByClassName("exposableDocumentFunctions");
    let text_possibility_toolbar = document.getElementsByClassName("textPossibilitiesToolbar")[0];
    let btn = document.getElementById("toggleTextPossibilities");

    if (btn.classList.contains('active')) {
        for (i = 0; i < text_possibility_elements.length; i++) {
            text_possibility_elements[i].style.display = 'none';
        }
        text_possibility_toolbar.classList.add('hidden');
    } else {
        for (i = 0; i < text_possibility_elements.length; i++) {
            text_possibility_elements[i].style.display = 'block';
        }
        text_possibility_toolbar.classList.remove('hidden');
    }

    btn.classList.toggle("active");
}
