"use strict";

function toggle_vis_kun_denne_del() {
    let text_possibility_elements = document.getElementsByClassName("exposableDocumentFunctions");
    if (this.checked) {
        for (i = 0; i < text_possibility_elements.length; i++) {
            text_possibility_elements[i].style.display = 'inline';
        }
    } else {
        for (i = 0; i < text_possibility_elements.length; i++) {
            text_possibility_elements[i].style.display = 'none';
        }
    }
}

let show_quotation_service = document.getElementById('Show_only_this_part');
if (show_quotation_service) {
    show_quotation_service.addEventListener('click', toggle_vis_kun_denne_del, false);
}