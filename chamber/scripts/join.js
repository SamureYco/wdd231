// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Close modal when clicking on the "x"
    const closeButton = modal.getElementsByClassName("close")[0];
    if (closeButton) {
        closeButton.onclick = function() {
            modal.style.display = "none";
        };
    }
}

// Function to set the current date and time in the hidden field
document.addEventListener("DOMContentLoaded", function() {
    const timestampInput = document.getElementById("timestamp");
    
    // Get the current date and time
    const now = new Date();
    
    // Convert to Peru's local time (UTC-5)
    const options = {
        timeZone: 'America/Lima',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Use 24-hour format
    };

    // Format the date to ISO string compatible format
    const localDateTime = now.toLocaleString('es-PE', options);
    
    // Convert the formatted string back to a Date object
    const formattedDate = new Date(localDateTime);
    
    // Set the value in the hidden input field
    timestampInput.value = formattedDate.toISOString(); // Use ISO format
});

// Set modal behavior on page load
window.onload = function() {
    const modals = document.getElementsByClassName("modal");
    for (let modal of modals) {
        modal.style.display = "none"; // Ensure modals are hidden on load
    }
};
