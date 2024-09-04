// Handle loading screen transition
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // Adjust this delay as needed
});

// Handle report form submission
if (document.getElementById('reportForm')) {
    document.getElementById('reportForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Example form submission logic (can be expanded to connect to a backend/Firebase)
        const dialogBox = document.getElementById('dialog-box');
        dialogBox.style.display = 'block';
        
        setTimeout(function() {
            dialogBox.style.display = 'none';
            document.getElementById('reportForm').reset();
        }, 3000); // Hide the dialog after 3 seconds
    });
}
