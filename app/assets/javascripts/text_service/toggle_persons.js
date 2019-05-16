"use strict";

function toggle_person() {
    let text_persons = document.querySelectorAll("span.symbol.person");
    if (this.checked) {
        for (i = 0; i < text_persons.length; i++) {
            text_persons[i].style.display = 'inline';
            text_persons[i].classList.add('icon', 'person');
        }
    } else {
        for (i = 0; i < text_persons.length; i++) {
            text_persons[i].style.display = 'none';
        }
    }
}

let show_persons = document.getElementById('Show_persons');
if (show_persons) {
    show_persons.addEventListener('click', toggle_person, false);
}
