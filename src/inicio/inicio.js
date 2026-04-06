document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const image = card.querySelector('img');

        if (image && index > 2) {
            image.loading = 'lazy';
            image.decoding = 'async';
        }

        if (image) {
            setMediaLoadingState(card, image);
        }

        card.addEventListener('click', function(event) {
            toggleOverlay(this, event);
        });

        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleOverlay(this, event);
            }
        });

        card.setAttribute('tabindex', '0');
    });
});

function setMediaLoadingState(container, media) {
    if (!container || !media) {
        return;
    }

    container.classList.add('is-loading');

    function clearLoadingState() {
        container.classList.remove('is-loading');
    }

    if (media.complete) {
        clearLoadingState();
        return;
    }

    media.addEventListener('load', clearLoadingState, { once: true });
    media.addEventListener('error', clearLoadingState, { once: true });
}

function toggleOverlay(card, event) {
    const overlay = card.querySelector('.card-overlay');
    const titleVisible = window.getComputedStyle(overlay).getPropertyValue("opacity") === "1";

    if (!titleVisible) {
        // Mostrar el título
        overlay.style.opacity = '1';
    } else {
        // Redirigir a otra página
        const targetUrl = card.dataset.targetUrl; // Obtener la URL de la tarjeta
        if (targetUrl) {
            window.location.href = targetUrl; // Redirigir a la URL especificada
        }
    }

    // Detener la propagación del evento para evitar que se active el evento click del contenedor padre
    event.stopPropagation();
}
