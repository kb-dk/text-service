// Reads url parameters and set dropdown's value.
// It is needed because in the design an input box is used instead of normal select tag in html
// which cannot have different value than what we can show.
// so we need to set the value manually.

"use strict";
var dropDowninputs = document.querySelectorAll('.mol-d4e97117-4bf7-4516-92fa-54bb0abc40fb');

function getUrlVars() {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter) {
    var urlparameter = '';
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

function set_dropdown_values_on_pageload() {
    for (let i = 0; i < dropDowninputs.length; i++) {
        var inputs = dropDowninputs[i].querySelectorAll('input');
        var first_input = inputs[0];
        var second_input = inputs[1];
        var url_value = getUrlParam(first_input.name);
        if (url_value) {
            first_input.value = url_value;
            second_input.value = dropDowninputs[i].querySelectorAll('li[data-value="' + url_value + '"]')[0].innerHTML.replace("&amp;", "&");
        }
    }
}

window.addEventListener('load', set_dropdown_values_on_pageload(), false);