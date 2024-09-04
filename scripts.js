// Function to simulate completing a quest
function completeQuest() {
    const questMessage = document.getElementById("quest-message");
    questMessage.innerHTML = "Quest completed! You've earned 50 points!";
    questMessage.style.color = "green";
}

// Function to simulate a daily check-in
function checkIn() {
    const checkInMessage = document.getElementById("checkin-message");
    checkInMessage.innerHTML = "Daily check-in complete! Mood tracked.";
    checkInMessage.style.color = "blue";
}

// Function to simulate viewing analytics
function viewAnalytics() {
    const analyticsMessage = document.getElementById("analytics-message");
    analyticsMessage.innerHTML = "Analytics loaded! You have a balanced learning and well-being score.";
    analyticsMessage.style.color = "purple";
}

// Function to simulate entering a VR space
function enterVR() {
    const vrMessage = document.getElementById("vr-message");
    vrMessage.innerHTML = "Entering VR space... Enjoy your immersive learning experience!";
    vrMessage.style.color = "orange";
}

// Optional: Enhance form submission experience with JS (for the login form)
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Example: Basic client-side validation
    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
    } else {
        // You can add AJAX here to submit the form without refreshing the page
        this.submit(); // Proceed with form submission
    }
});
