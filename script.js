// Get all sections
const sections = document.querySelectorAll('section');

// Add event listener to each section
sections.forEach((section) => {
    section.addEventListener('mouseover', () => {
        section.classList.add('fade-in');
    });
});

// Get all buttons
const buttons = document.querySelectorAll('button');

// Add event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Add animation to button
        button.classList.add('fade-in');
    });
});

// Get all forms
const forms = document.querySelectorAll('form');

// Add event listener to each form
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        // Prevent default form submission
        e.preventDefault();
        // Get form data
        const formData = new FormData(form);
        // Send form data to server (not implemented in this example)
        console.log(formData);
    });
});