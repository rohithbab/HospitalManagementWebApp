// login.js

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAlV6VCjEGSXFJW05GRdNElJa7HC60eMM",
    authDomain: "hospital-website-5da7e.firebaseapp.com",
    databaseURL: "https://hospital-website-5da7e-default-rtdb.firebaseio.com",
    projectId: "hospital-website-5da7e",
    storageBucket: "hospital-website-5da7e.appspot.com",
    messagingSenderId: "1020188145423",
    appId: "1:1020188145423:web:22fa8ba256d19a74a6707a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to Firebase services
const auth = firebase.auth();

// Handle form submission for login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform login authentication
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            console.log('Login successful:', userCredential.user);

            // Redirect to the doctor's dashboard page
            window.location.href = 'dashboard1.html';
        })
        .catch((error) => {
            console.error('Error logging in:', error);
            alert('Failed to login. Please check your credentials.');
        });
});
