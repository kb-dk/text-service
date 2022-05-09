"use strict";

function positioning_and_highlighting_in_TOC() {
    let url = document.location.href;
    url = decodeURIComponent(url.substring(url.lastIndexOf('/text')));
    let toc_modal = document.getElementById("toc");
    let current_entry = toc_modal.querySelectorAll("a[href='" + url + "']")[0];
    if (current_entry !== undefined && current_entry !== null) {
        current_entry.classList.add("current_entry");
        current_entry.parentNode.classList.add("current_entry_parent");
        let position = current_entry.getBoundingClientRect();
        this.scrollTop = position['top'];
    }
}

function removeHighlight(){
    $('#toc li a.current_entry').removeClass("current_entry");
    $('#toc li.current_entry_parent').removeClass("current_entry_parent");
}

// jQuery event for when modal is shown
$('#toc').on('shown.bs.modal', positioning_and_highlighting_in_TOC);
$('#toc').on('hide.bs.modal', removeHighlight);
$("#toc a").click(function(){
    $('#toc').modal('hide')
});