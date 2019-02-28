var comments = document.querySelectorAll('a[title="Kommentar"]');

for (i = 0; i < comments.length; i++) {
    var comment = comments[i];
    comment.dataset.toggle = "modal";
    comment.dataset.target = "#comment";

    comment.addEventListener("click", function (event) {
        event.preventDefault()
        modal = document.getElementById('comment');
        modal_body = modal.getElementsByClassName('modal-body')[0];

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                modal_body.innerHTML = this.responseText;
            }
        };
        var url = this.href.substr(this.href.lastIndexOf('/') + 1).replace("root#", "shoot-");
        url = '/comment/' + url
        xhttp.open("GET", url, true);
        xhttp.send();
    });
}