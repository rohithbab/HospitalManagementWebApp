// dashboard.js

document.addEventListener('DOMContentLoaded', function () {
    // Example dynamic data fetching and updating
    const doctorData = {
        name: "Dr. John Doe",
        qualification: "MBBS, MD",
        specialist: "Cardiologist",
        experience: "15 years",
        phone: "987-654-3210",
        email: "dr.johndoe@example.com",
        imageUrl: "assets/dr-john-doe.png"
    };

    // Set the doctor's information dynamically
    document.getElementById('doctorName').textContent = doctorData.name;
    document.getElementById('docName').textContent = doctorData.name;
    document.getElementById('docQualification').textContent = doctorData.qualification;
    document.getElementById('docSpecialist').textContent = doctorData.specialist;
    document.getElementById('docExperience').textContent = doctorData.experience;
    document.getElementById('docPhone').textContent = doctorData.phone;
    document.getElementById('docEmail').textContent = doctorData.email;
    document.getElementById('doctorImage').src = doctorData.imageUrl;
});

// Define functions for menu buttons
function loadPatientDetails() {
    // Load patient details functionality
    console.log("Loading patient details...");
}

function loadInventoryManagement() {
    // Load inventory management functionality
    console.log("Loading inventory management...");
}

function loadLabBooking() {
    // Load lab booking functionality
    console.log("Loading lab booking...");
}

function logout() {
    // Perform logout functionality
    console.log("Logging out...");
    window.location.href = 'login.html';
}
