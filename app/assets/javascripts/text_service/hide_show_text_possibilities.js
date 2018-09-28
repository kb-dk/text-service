/**
 * Created by bimo on 9/28/18.
 */

var elems  = document.getElementsByClassName("exposableDocumentFunctions");
var anchor = document.getElementById("exposeLinkThing");
var status = 'hidden';

function toggleExposable() {
    if(status == 'hidden') {
        showExposableFunctions();
    } else {
        hideExposableFunctions();
    }
}

function showExposableFunctions() {
    var i;
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display='block';
    }
    status = 'visible';
    // anchor.style.color='white';
    // anchor.style.backgroundColor='black';
}

function hideExposableFunctions() {
    var i;
    for (i = 0; i < elems.length; i++) {
        elems[i].style.display='none';
    }
    status = 'hidden';
    // anchor.style.color='black';
    // anchor.style.backgroundColor='white';
}
