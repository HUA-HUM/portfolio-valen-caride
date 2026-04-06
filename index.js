
document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("loader");
    var principal = document.getElementById("principal");
    var video = document.getElementById("backgroundVideo");
    var emailLink = document.getElementById("emailLink");

    function hideLoader() {
        if (loader) {
            loader.classList.add("is-hidden");
        }

        if (principal) {
            principal.classList.add("is-ready");
        }
    }

    function setEmailLink() {
        if (!emailLink) {
            return;
        }

        if (/Mobi|Android/i.test(navigator.userAgent)) {
            emailLink.href = "mailto:Valenfcaride@gmail.com";
            return;
        }

        emailLink.href = "https://mail.google.com/mail/?view=cm&fs=1&to=Valenfcaride@gmail.com";
        emailLink.target = "_blank";
        emailLink.rel = "noopener noreferrer";
    }

    function revealVideo() {
        if (principal) {
            principal.classList.add("video-ready");
        }

        if (!video) {
            return;
        }

        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(function () {
                // Some browsers still block autoplay even when muted.
            });
        }
    }

    setEmailLink();
    window.setTimeout(hideLoader, 700);

    if (!video) {
        return;
    }

    video.addEventListener("loadeddata", revealVideo, { once: true });
    video.addEventListener("error", hideLoader, { once: true });

    if (video.readyState >= 2) {
        revealVideo();
    }
});

