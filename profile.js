const alumniData = [
    { 
        name: 'Chandu S',
        domain: 'Web Development',
        img: 'chandru image.png',
        birthPlace: 'Salem',
        contact: '7094894510', // WhatsApp-compatible format
        education: 'B-tech in Information technology',
        about: 'Chandru S is passionate about Web Development and has been working in the tech industry for over 5 years.',
        domainExperience: 'web Developer at techfield',
    },
    { 
        name: 'Deva NS',
        domain: 'AI',
        img: 'deva image.png',
        birthPlace: 'Salem',
        contact: '6383424853', // WhatsApp-compatible format
        education: 'B-tech in Information technology',
        about: 'Deva NS has a deep expertise in AI development and management.',
        domainExperience: 'AI Consultant at techfield',
    },
    { 
        name: 'Vignesh V',
        domain: 'Data Science',
        img: 'Vignesh V.jpg',
        birthPlace: 'Neyveli',
        contact: '9342685603', // WhatsApp-compatible format
        education: 'B-tech in Information technology',
        about: 'Vignesh V has a deep expertise in Data Science and management.',
        domainExperience: 'Data Scientist at techfield',
    },
];

const alumniList = document.getElementById('alumni-list');
const profileDetails = document.getElementById('profile-details');
const domainFilter = document.getElementById('domain');
const chatBox = document.getElementById('chat-box');
const sendBtn = document.getElementById('send-btn');
let currentAlumni;

// Function to display alumni list based on selected domain
function displayAlumniList(domain = 'all') {
    alumniList.innerHTML = '';
    const filteredAlumni = alumniData.filter(profile => domain === 'all' || profile.domain === domain);
    
    filteredAlumni.forEach(profile => {
        const alumniCard = document.createElement('div');
        alumniCard.classList.add('alumni-card');
        alumniCard.innerText = profile.name;
        alumniCard.onclick = () => showProfileDetails(profile);
        alumniList.appendChild(alumniCard);
    });
}

// Function to show profile details
function showProfileDetails(profile) {
    currentAlumni = profile; // Save current profile
    document.getElementById('profile-name').innerText = profile.name;
    document.getElementById('profile-birthplace').innerText = `Birthplace: ${profile.birthPlace}`;
    document.getElementById('profile-contact').innerText = `Contact: ${profile.contact}`;
    document.getElementById('profile-education').innerText = `Education: ${profile.education}`;
    document.getElementById('profile-about').innerText = `About: ${profile.about}`;
    document.getElementById('profile-domain-experience').innerText = `Experience: ${profile.domainExperience}`;
    document.getElementById('profile-img').src = profile.img;

    profileDetails.style.display = 'block';
}

// Function to handle chat message send
sendBtn.onclick = () => {
    const message = chatBox.value;
    if (message && currentAlumni) {
        const whatsappUrl = `https://wa.me/${currentAlumni.contact}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        chatBox.value = '';
    } else {
        alert('Please type a message and select an alumni.');
    }
};

// Event listener for domain selection
domainFilter.addEventListener('change', (e) => {
    displayAlumniList(e.target.value);
});

// Initial load
displayAlumniList();

// Close profile details
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', () => {
    profileDetails.style.display = 'none';
});



const alumni = [
    {
        name: "Chandu S",
        domain: "Web Development",
        location: "Salem",
        interests: ["React", "JavaScript", "HTML", "CSS"],
        linkedIn_profile: "https://shorturl.at/37YeO",
    },
    {
        name: "Deva NS",
        domain: "AI",
        location: "Salem",
        interests: ["Machine Learning", "Python", "AI"],
    },
    {
        name: "Vignesh V",
        domain: "Data Science",
        location: "Neyveli",
        interests: ["Data Analysis", "R", "SQL"],
    },
];
document.getElementById("match-btn").addEventListener("click", () => {
    const domain = document.getElementById("student-domain").value;
    const location = document.getElementById("student-location").value.toLowerCase();
    const interests = document.getElementById("student-interests").value.toLowerCase().split(",").map(i => i.trim());
    const matches = alumni.filter(alumni => {
        const domainMatch = alumni.domain === domain || domain === "all";
        const locationMatch = alumni.location.toLowerCase().includes(location);
        const interestMatch = interests.some(interest => alumni.interests.map(i => i.toLowerCase()).includes(interest));
        return domainMatch && locationMatch && interestMatch;
    });
    displayMatches(matches);
});
function displayMatches(matches) {
    const matchesContainer = document.getElementById("matches");
    matchesContainer.innerHTML = "";
    if (matches.length === 0) {
        matchesContainer.innerHTML = "<p>No matches found.</p>";
        return;
    }
    matches.forEach(match => {
        const card = document.createElement("div");
        card.className = "result-card";
        card.innerHTML = `
            <h3>${match.name}</h3>
            <p>Domain: ${match.domain}</p>
            <p>Location: ${match.location}</p>
            <p>Interests: ${match.interests.join(", ")}</p>
        `;
        matchesContainer.appendChild(card);
    });
}

