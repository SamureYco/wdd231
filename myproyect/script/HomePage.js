// Función para cargar las atracciones desde la API
document.addEventListener("DOMContentLoaded", () => {
    const attractionsSection = document.getElementById('featured-attractions');

    fetch('https://api.example.com/travel-attractions') // Reemplaza con la URL de tu API
        .then(response => response.json())
        .then(data => {
            data.slice(0, 15).forEach(attraction => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>${attraction.name}</strong> - ${attraction.description}
                    <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                `;

                // Evento para abrir modal al hacer clic en la atracción
                listItem.addEventListener('click', () => openModal(attraction));
                attractionsSection.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Función para abrir el modal
function openModal(attraction) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${attraction.name}</h2>
            <p>${attraction.details}</p>
            <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
        </div>
    `;
    document.body.appendChild(modal);
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Validación del formulario (opcional)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        event.preventDefault(); // Previene el envío del formulario
        alert('Please fill in all required fields.');
    } else {
        // Validación adicional para el correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    }
});
