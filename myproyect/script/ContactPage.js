// script/ContactPage.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el envío del formulario por defecto

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validación simple
        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Confirmación antes de enviar
        const confirmation = confirm(`¿Está seguro de que desea enviar el siguiente mensaje?\n\nNombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`);

        if (confirmation) {
            // Aquí puedes enviar el formulario (simular el envío o redirigir)
            form.submit(); // Descomentar si se quiere enviar realmente
        }
    });
});
