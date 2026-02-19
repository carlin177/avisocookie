(function () {
    // Elementos del modal
    const overlay = document.getElementById('cookieOverlay');
    const botonAceptar = document.getElementById('acceptCookiesButton');
    const enlaceRechazar = document.getElementById('rejectCookiesLink');

    // Si falta algún elemento, salimos para evitar errores
    if (!overlay || !botonAceptar || !enlaceRechazar) {
        return;
    }

    // Tiempo para mostrar el modal (5 segundos)
    const tiempoDeEspera = 5000;

    // Tiempo de la animación de cierre (debe coincidir con CSS)
    const tiempoCierre = 280;

    // Mostrar modal
    function mostrarModal() {
        overlay.classList.add('is-visible');
        overlay.setAttribute('aria-hidden', 'false');
    }

    // Cerrar modal con animación
    function cerrarModal() {
        overlay.classList.add('is-closing');

        setTimeout(function () {
            overlay.classList.remove('is-visible', 'is-closing');
            overlay.setAttribute('aria-hidden', 'true');
        }, tiempoCierre);
    }

    // Mostrar automáticamente después de 5 segundos
    setTimeout(mostrarModal, tiempoDeEspera);

    // Aceptar cookies: solo cerramos (no guardamos nada)
    botonAceptar.addEventListener('click', function () {
        cerrarModal();
    });

    // Continuar sin aceptar: solo cerramos (no guardamos nada)
    enlaceRechazar.addEventListener('click', function (event) {
        event.preventDefault();
        cerrarModal();
    });
})();