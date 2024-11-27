document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Set the event date and time (Update this date for your event)
const eventDate = new Date("December 10, 2024 18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft > 0) {
        // Calculate time units
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the HTML
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    } else {
        // Event is over
        document.querySelector(".countdown").innerHTML = "<h2>The Cultural Fest Has Begun!</h2>";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);


// Form Validation
document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for your submission! We will contact you soon.");
        form.reset();
    });
});