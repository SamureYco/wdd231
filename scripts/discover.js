document.addEventListener("DOMContentLoaded", () => {
    const lastVisitKey = 'lastVisit';
    const currentDate = Date.now();
    const lastVisit = localStorage.getItem(lastVisitKey);
    
    if (!lastVisit) {
        // First visit
        document.getElementById('last-visit-message').innerText = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            document.getElementById('last-visit-message').innerText = "Back so soon! Awesome!";
        } else {
            const dayText = daysSinceLastVisit === 1 ? "day" : "days";
            document.getElementById('last-visit-message').innerText = `You last visited ${daysSinceLastVisit} ${dayText} ago.`;
        }
    }

    // Update last visit date
    localStorage.setItem(lastVisitKey, currentDate);
});
