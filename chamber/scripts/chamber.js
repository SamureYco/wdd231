async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    return members;
}

function displayMembers(members) {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = ''; // Clear previous members

    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'member-card';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" style="width: 100%;">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>Membership Level: ${member.membershipLevel}</p>
            <p>${member.info}</p>
        `;
        memberList.appendChild(memberCard);
    });
}

function toggleView() {
    const memberList = document.getElementById('member-list');
    memberList.classList.toggle('list-view');
    const isListView = memberList.classList.contains('list-view');
    document.getElementById('toggle-view').innerText = isListView ? 'Switch to Grid View' : 'Switch to List View';
}

function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').innerText = currentYear;
}

function setLastModifiedDate() {
    const lastModified = new Date(document.lastModified).toLocaleDateString();
    document.getElementById('last-modified').innerText = lastModified;
}

window.onload = async function() {
    const members = await fetchMembers();
    displayMembers(members);
    setCurrentYear();
    setLastModifiedDate();

    // Toggle view functionality
    document.getElementById('toggle-view').onclick = toggleView;
};
