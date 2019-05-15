"use strict";

function toggle_location() {
    let text_locations = document.querySelectorAll("span.symbol.place");
    if (this.checked) {
        for (i = 0; i < text_locations.length; i++) {
            text_locations[i].style.display = 'inline';
            text_locations[i].classList.add('icon', 'location_on');
            text_locations[i].parentElement.style.display = 'inline';
        }
    } else {
        for (i = 0; i < text_locations.length; i++) {
            text_locations[i].style.display = 'none';
            text_locations[i].parentElement.style.display = 'none';
        }
    }
}

let show_locations = document.getElementById('Show_locations');
if (show_locations) {
    show_locations.addEventListener('click', toggle_location, false);
}
