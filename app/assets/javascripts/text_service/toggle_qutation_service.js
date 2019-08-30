"use strict";

function toggle_vis_kun_denne_del() {
    let comments = document.querySelectorAll("span.symbol.quote");
    if (this.checked) {
        for (i = 0; i < comments.length; i++) {
            comments[i].style.display = 'block';
        }
    } else {
        for (i = 0; i < comments.length; i++) {
            comments[i].style.display = 'none';
        }
    }
}

let show_quotation_service = document.getElementById('Show_only_this_part');
if (show_quotation_service) {
    show_quotation_service.addEventListener('click', toggle_vis_kun_denne_del, false);
}

// Open links in new tabs
var links = document.querySelectorAll('.exposableDocumentFunctions a');
for (var i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank');
}
