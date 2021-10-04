"use strict";
var local_comments = document.querySelectorAll('a.Bibel');
for (var i = 0; i < local_comments.length; i++) {
    var local_comment = local_comments[i];
    local_comment.dataset.toggle = "modal";
    local_comment.dataset.target = "#comment_modal";

    local_comment.addEventListener("click", function (event) {
        event.preventDefault()
        var modal = document.getElementById('comment_modal');
        var modal_body = modal.getElementsByClassName('modal-body')[0];
        var modal_header = modal.getElementsByClassName('modal-title')[0];
        modal_header.innerHTML = 'Bibelreference';
        modal_body.innerHTML = this.title;
    });
}

var comments = document.querySelectorAll(
    'a[title="Punktkommentar"], a[title="Kommentar"], a[title="Person"], a[title*="Sted"], a[title="Mytologi"], a[title="Titel"]'
);
register_comments(comments);
function register_comments(comments, embedded = false) {
    for (var i = 0; i < comments.length; i++) {
        var comment = comments[i];
        comment.dataset.toggle = "";
        comment.dataset.target = "#comment_modal";
        comment.addEventListener("click", onCommentClick);
        function onCommentClick (event) {
            event.preventDefault();
            $('#comment_modal').modal('show');
            var modal = document.getElementById('comment_modal');
            var modal_body = modal.getElementsByClassName('modal-body')[0];
            var modal_header = modal.getElementsByClassName('modal-title')[0];
            modal_header.innerHTML = this.title;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
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

                    var read_more_buttons = cmodal.querySelectorAll(
                        'a.read-more-button'
                    );
                    read_more_buttons.forEach(read_more_button => {
                        read_more_button.addEventListener('click', function(event){
                              let anchor = event.target.dataset.readMore;
                              if (anchor){
                                  document.getElementById(anchor).classList.toggle('visible');
                                  event.target.innerHTML = event.target.innerHTML === 'Læs mere' ? 'Læs mindre' : 'Læs mere';
                              }
                        })
                        console.log(read_more_button);
                    });
                }
            };
            var url = this.href.substr(this.href.lastIndexOf('/') + 1).replace("root#", "shoot-");
            url = '/comment/' + url
            let backButton = document.getElementsByClassName('modal-back-button')[0];
            if(backButton !== null){
                backButton.href = backButton.dataset.currenturl;
                backButton.dataset.currenturl = url;
                if (backButton.dataset.home === ''){backButton.dataset.home = url;}
                if (backButton.dataset.home === backButton.dataset.currenturl){backButton.href = '';}
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
    document.getElementsByClassName('modal-back-button')[0].href = '';
    document.getElementsByClassName('modal-back-button')[0].dataset.home = '';
})