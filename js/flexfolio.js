function scrollButton() {
    var x = document.getElementById("scrolldown");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 5000);
}
window.onload = function () {
    scrollButton();
}

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("scrollup").style.display = "block";
        setTimeout(function () {
            document.getElementById("scrollup").style.display = ("none");
        }, 8000);
    } else {
        document.getElementById("scrollup").style.display = "none";
    }
}

function topFunction() {
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                   html.clientHeight, html.scrollHeight, html.offsetHeight );

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}