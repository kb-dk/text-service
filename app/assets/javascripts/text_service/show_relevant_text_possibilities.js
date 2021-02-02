"use strict";

function show_relevant_text_possibilities() {

    let pageBreaks = document.querySelectorAll('.symbol.pagination.edition');
    pageBreaks.forEach(function(pageBreak) {
        pageBreak.parentElement.style.display = 'inline';
        pageBreak.innerHTML = '<span class="hidden">&#128463;</span> ' + pageBreak.innerHTML;
    });

    pageBreaks = document.querySelectorAll('.symbol.pagination.other');
    pageBreaks.forEach(function(pageBreak) {
        pageBreak.innerHTML = '&#128463; ' + pageBreak.innerHTML;
    });

    let types = ['quote', 'comment', 'translation', 'modernized', 'info', 'person', 'Bibel', 'place', 'title', 'pagination.other'];
    types.forEach(function(type)
    {
        var symbols = document.querySelectorAll('.symbol.' + type);
        if (symbols.length != 0){
            var button = document.getElementById(type.replace('.', "_"));
            button.classList.remove("hidden");
        }
    });
}

window.addEventListener('load', show_relevant_text_possibilities(), false);