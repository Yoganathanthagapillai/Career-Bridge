document.getElementById("add-event-btn").addEventListener("click", function () {
    const eventForm = document.getElementById("event-form");
    eventForm.classList.toggle("hidden");
});

document.getElementById("submit-event-btn").addEventListener("click", function () {
    // Get form values
    const title = document.getElementById("event-title").value;
    const date = document.getElementById("event-date").value;
    const location = document.getElementById("event-location").value;
    const details = document.getElementById("event-details").value;

    

    // Validate form
    if (!title || !date || !location) {
        alert("Please fill out all required fields!");
        return;
    }

    // Create event card
    const eventList = document.getElementById("event-list");
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p>${details}</p>
    `;

    // Add event to the list
    eventList.appendChild(eventCard);

    // Reset form and hide it
    document.getElementById("event-form").reset();
    document.getElementById("event-form").classList.add("hidden");
});


