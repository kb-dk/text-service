"use strict";
var comments = document.querySelectorAll(
  'a[title="Punktkommentar"], a[title="Person"], a[title="Plads"], a[title="Mytologi"]'
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

for (var i = 0; i < comments.length; i++) {
    var comment = comments[i];
    comment.dataset.toggle = "modal";
    comment.dataset.target = "#comment_modal";

    comment.addEventListener("click", function (event) {
        event.preventDefault()
        var modal = document.getElementById('comment_modal');
        var modal_body = modal.getElementsByClassName('modal-body')[0];

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                modal_body.innerHTML = this.responseText;
            }
            var comment_modal = document.getElementsByClassName("comment_modal_content");
            if (comment_modal.length) {
                comment_modal = comment_modal[0];
                var links = comment_modal.getElementsByTagName('a');
                if (links.length) {
                    // Remove the a tag from the first link
                    var parent = links[0].parentNode;
                    var link_content = links[0].getElementsByTagName('span')[0];
                    if (typeof link_content == "object") {
                        parent.insertBefore(link_content, links[0]);
                        parent.removeChild(links[0]);
                        if (links.length) {
                            for (var i=0; i<links.length; i++){
                                // If thete is more link in the comment they will be opened in a new window
                                links[i].setAttribute('target', '_blank');
                                // Change the url of the links if they are pointing to the current document to point at the comment document instead
                                var link_url = links[i].href;
                                var comment_document = document_url.substring(document_url.lastIndexOf('/') + 1, document_url.lastIndexOf('#'));
                                var link_document = link_url.substring(link_url.lastIndexOf('/') + 1, link_url.lastIndexOf('#'));
                                if (document.location.href.lastIndexOf(link_document)!== -1){
                                    links[i].href = link_url.replace(link_document, comment_document);
                                }
                            }
                        }
                    }

                }

            }

        };
        var url = this.href.substr(this.href.lastIndexOf('/') + 1).replace("root#", "shoot-");
        var document_url = this.href;
        url = '/comment/' + url
        xhttp.open("GET", url, true);
        xhttp.send();
    });
}