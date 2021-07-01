"use strict";
var comments = document.querySelectorAll(
    'a[title="Punktkommentar"], a[title="Kommentar"], a[title="Person"], a[title*="Sted"], a[title="Mytologi"]'
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

function register_comments ( comments ) {
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
                    cmodal = comment_modal[0];

		    var links = cmodal.querySelectorAll(
			'a[title="Punktkommentar"], a[title="Kommentar"], a[title="Person"], a[title*="Sted"], a[title="Mytologi"]'
		    );
		    register_comments(links);
	        }
	    };
            var url = this.href.substr(this.href.lastIndexOf('/') + 1).replace("root#", "shoot-");
            var document_url = this.href;
            url = '/comment/' + url
            xhttp.open("GET", url, true);
            xhttp.send();
	});
    }
}
