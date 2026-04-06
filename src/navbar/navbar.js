
document.addEventListener("DOMContentLoaded", function () {
    var checkBtn = document.getElementById("check");
    var emailLink = document.getElementById("emailLink");
    var navLinks = document.querySelectorAll("nav a");

    if (checkBtn) {
        checkBtn.addEventListener("change", function () {
            document.body.classList.toggle("noscroll", this.checked);
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (!checkBtn) {
                return;
            }

            checkBtn.checked = false;
            document.body.classList.remove("noscroll");
        });
    });

    if (emailLink) {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            emailLink.href = "mailto:Valenfcaride@gmail.com";
        } else {
            emailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=Valenfcaride@gmail.com";
            emailLink.target = "_blank";
            emailLink.rel = "noopener noreferrer";
        }
    }
});
