document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const eventSelected = document.getElementById('event').value;

    // Basic validation
    if (!name || !email || !phone || !eventSelected) {
        alert('Please fill in all the fields!');
        return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email!');
        return;
    }

    // Phone format validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number!');
        return;
    }

    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
});