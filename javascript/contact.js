// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get the values from the form
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation check (Phone is optional)
            if (fullName && email && subject && message) {
                // Show a success message
                alert(`Thank you, ${fullName}! We have received your message regarding "${subject}". Our team will contact you soon.`);
                
                // Clear the form after submission
                contactForm.reset();
            } else {
                alert('Please fill out all required fields (*).');
            }
        });
    }
});