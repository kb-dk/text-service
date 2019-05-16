/**
 * Created by bimo on 9/28/18.
 */
"use strict";

function toggleRelatedTexts() {
    let text_possibility_toolbar = document.getElementsByClassName("relatedTextsToolbar")[0];
    let btn = document.getElementById("toggleRelatedTexts");

    if (btn.classList.contains('active')) {
        text_possibility_toolbar.classList.add('hidden');
    } else {
        text_possibility_toolbar.classList.remove('hidden');
    }

    btn.classList.toggle("active");
}
