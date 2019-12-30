"use strict";

function scrollToTop() {
    //document.querySelector('.org_navigation-header ').scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(document.getElementsByTagName('body')[0]);
}

let scrollup_button = document.getElementById('scrollTop');
if (scrollup_button) {
    scrollup_button.addEventListener('click', scrollToTop, false);
}
