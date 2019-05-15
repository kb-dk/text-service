"use strict";

function show_relevant_text_possibilities() {
    let types = ['quote', 'comment', 'translation', 'modernized', 'info', 'person'];
    types.forEach(function(type)
    {
        var symbols = document.querySelectorAll('span.symbol.' + type);
        if (symbols.length != 0){
            var button = document.getElementById(type);
            button.classList.remove("hidden");
        }
    });
}

window.addEventListener('load', show_relevant_text_possibilities(), false);