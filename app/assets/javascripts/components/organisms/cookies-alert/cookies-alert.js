function cookieTerms(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCookie() {
    var cookie_button = document.getElementById("cookie");
    if (cookie_button) {
        var cookie = getCookie("terms");
        // cookie="";
        if (cookie != "") {
        } else {
            cookie_button.style.display = "block";
            if (cookie != "" && cookie != null) {
                cookieTerms("terms", cookie, 60);
            }
        }
    }
}
$(document).ready(function () {
    checkCookie();
    $('#close').click(function(){
        $(this).parent().remove();
    });
});