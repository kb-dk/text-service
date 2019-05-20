"use strict";
function ie_message() {
    if (is_ie()){
        var notification = document.querySelectorAll('.org-11bfca9f-f278-4d0e-8384-2a2d064e8f6c.ie_message');
        if (notification){
            notification[0].classList.remove('hidden');
        }

    }
}

function is_ie(){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        return true;
    }
    else  // If another browser, return 0
    {
        return false;
    }

    return false;
}

function closeBanner(){
    var banner = document.getElementById('ie_banner');
    banner.style.display = 'none';
}

window.addEventListener('load', ie_message, false);
