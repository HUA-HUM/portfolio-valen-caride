
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    const imagesSection = document.querySelector('.container.mb-2');
    const iframes = document.querySelectorAll('iframe');
    const galleryImages = document.querySelectorAll('.container.mb-2 img');
    const menuCheckbox = document.getElementById('check');

    iframes.forEach(function(iframe) {
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('referrerpolicy', iframe.getAttribute('referrerpolicy') || 'strict-origin-when-cross-origin');
    });

    galleryImages.forEach(function(image) {
        image.setAttribute('loading', 'lazy');
        image.setAttribute('decoding', 'async');
    });

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', function() {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            if (imagesSection) {
                imagesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });

        window.addEventListener('scroll', function() {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) {
                scrollToTopButton.classList.add('upwards');
            } else {
                scrollToTopButton.classList.remove('upwards');
            }
        }, { passive: true });
    }

    if (menuCheckbox && scrollToTopButton) {
        menuCheckbox.addEventListener('change', function() {
            scrollToTopButton.style.display = this.checked ? 'none' : 'flex';
        });
    }
});
