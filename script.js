// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    
    // Handle Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop page reload
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your message has been sent to the SRMU AI Team.`);
            contactForm.reset();
        });
    }

    // Handle Registration Form
    const regForm = document.getElementById('regForm');
    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const studentName = document.getElementById('studentName').value;
            const branch = document.getElementById('branch').value;
            alert(`Success! ${studentName} (${branch}) has been registered for the AI Workshop.`);
            regForm.reset();
        });
    }
});