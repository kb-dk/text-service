function resize_to_fit() {
    var pageIntro = document.getElementsByClassName("org-fc19c325-bb61-4c28-ad0e-7c272912ed78")[0];
    if (pageIntro) {
        var heading = pageIntro.getElementsByTagName("h1")[0];
        if (heading) {
            var text_size = heading.innerHTML.trim().length;
            if (text_size >= 50) {
                var fontsize = getComputedStyle(heading).fontSize;
                newFontSize = (parseInt(fontsize, 10) - 15).toString() + "px";
                document.getElementsByClassName("org-fc19c325-bb61-4c28-ad0e-7c272912ed78")[0].getElementsByTagName("h1")[0].style.fontSize = newFontSize;
            }
        }
    }
}

window.addEventListener('load', resize_to_fit(), false);
