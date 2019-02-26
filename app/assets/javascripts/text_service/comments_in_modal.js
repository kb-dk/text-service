var comments = document.querySelectorAll('a[title="Kommentar"]');
if (comments.length ) {
    comments.forEach(function (comment) {
        comment.dataset.toggle = "modal";
        comment.dataset.target = "#comment";

        comment.addEventListener("click", function (event) {
            event.preventDefault()
            modal = document.getElementById('comment');
            modal_body = modal.getElementsByClassName('modal-body')[0];
            modal_body.innerHTML = this.href;
        });

    });
}