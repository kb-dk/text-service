"use strict";
var comments = document.querySelectorAll(
    'a[title="Punktkommentar"], a[title="Kommentar"], a[title="Person"], a[title*="Sted"], a[title="Mytologi"], a[title="Titel"]'
);
var local_comments = document.querySelectorAll('a.Bibel');

for (var i = 0; i < local_comments.length; i++) {
    var local_comment = local_comments[i];
    local_comment.dataset.toggle = "modal";
    local_comment.dataset.target = "#comment_modal";

    local_comment.addEventListener("click", function (event) {
        event.preventDefault()
        var modal = document.getElementById('comment_modal');
        var modal_body = modal.getElementsByClassName('modal-body')[0];
        var comment_modal = document.getElementsByClassName("comment_modal_content");
        modal_body.innerHTML = this.title;
    });
}

register_comments(comments);

function register_comments(comments, embedded = false) {
    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        if (!embedded) { // Child modal
            comment.dataset.toggle = "modal";
        } else { // Parent modal
          comment.dataset.toggle = "";
        }
        comment.dataset.target = "#comment_modal";

        comment.addEventListener("click", onCommentClick);

        function onCommentClick (event) {
            event.preventDefault()
            var modal = document.getElementById('comment_modal');
            var modal_body = modal.getElementsByClassName('modal-body')[0];
            // modal_body.innerHTML = '';
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        // modal_body.innerHTML = (modal_body.innerHTML.toString().trim() !== '')?
                        if(modal_body.innerHTML.toString().trim() !== ''){
                            console.log(url);
                            let backButton = document.getElementById('modal-back-button');
                            backButton.style.visibility = 'visible';
                            // backButton.href = url;
                            // backButton.addEventListener("click", function (event) {

                            // });
                        }
                        modal_body.innerHTML = this.responseText;
                    } else {
                        console.error("Error:", this.statusText);
                    }
                }
                var comment_modal = document.getElementsByClassName("comment_modal_content");
                if (comment_modal.length) {
                    var cmodal = comment_modal[0];
                    var links = cmodal.querySelectorAll(
                        'a[title="Punktkommentar"], a[title="Kommentar"], a[title="Person"], a[title*="Sted"], a[title="Mytologi"], a[title="Titel"]'
                    );
                    register_comments(links, true);
                }
            };
            var url = this.href.substr(this.href.lastIndexOf('/') + 1).replace("root#", "shoot-");
            url = '/comment/' + url
            let backButton = document.querySelector('#modal-back-button');
            if(backButton !== null){
                backButton.href = backButton.dataset.currenturl;
                backButton.dataset.currenturl = url;
            }
            xhttp.open("GET", url, true);
            xhttp.send();
        }
    }
}

// jQuery event for resetting the modal content when the modal is closed
$('#comment_modal').on('hidden.bs.modal', function (e) {
    var modal = document.getElementById('comment_modal');
    var modal_body = modal.getElementsByClassName('modal-body')[0];
    modal_body.innerHTML = '';
})