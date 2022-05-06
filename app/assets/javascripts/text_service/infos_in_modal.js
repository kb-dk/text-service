"use strict";
var infos = document.querySelectorAll('a.info[title="Tekstkritik"]');
for (var i = 0; i < infos.length; i++) {
    var info = infos[i];
    info.dataset.toggle = "modal";
    info.dataset.target = "#info_modal";

    info.addEventListener("click", function (event) {
        event.preventDefault();
        let modal = document.getElementById('info_modal');
        let modal_body = modal.getElementsByClassName('modal-body')[0];
        let text_critic = document.getElementById(event.target.dataset.anchor);
        let target = event.target;
        let level = 0;
        // If we click on a nested tag inside text-critic,
        // the target wouldn't have the target.dataset we need to show,
        // so we need to go up in the hierarchy and find the target.dataset on a parent element.
        // level is set to 10, to prevent infinite loop
        while (text_critic === null && level <= 10) {
            level = level + 1;
            target = target.parentElement;
            text_critic = document.getElementById(target.dataset.anchor);
        }

        modal_body.innerHTML = text_critic.innerHTML;
        text_critic.setAttribute("style", "display: none !important");
        let witnesses = text_critic.querySelectorAll('.witness[title]');

        let modal_footer = modal.getElementsByClassName('modal-footer')[0];
        modal_footer.innerHTML = '<div style="flex: 0 0 100%;"><b>]</b>: Lemmasymbol</div>';
        for (var i = 0; i < witnesses.length; i++) {
            modal_footer.innerHTML += '<div style="flex: 0 0 100%;"><b>' + witnesses[i].innerHTML + '</b>: ' + witnesses[i].getAttribute('title') + '</div>';
        }
    });
}
