let buttons = document.querySelectorAll('#survey button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Button ${button.textContent} clicked!`);
    });
    if (button.textContent === 'Not Helpful') {
        button.addEventListener('click', function() {
            alert('We appreciate your feedback and will strive to improve.');
        });
    }
    else if (button.textContent === 'Somewhat Helpful') {
        button.addEventListener('click', function() {
            alert('Thank you for your feedback! Sorry it was not more helpful.');
        });
    }
    else if (button.textContent === 'Helpful') {
        button.addEventListener('click', function() {
            alert('Thank you for your feedback! We are glad you found it helpful.');
        });
    }
    else if (button.textContent === 'Very Helpful') {
        button.addEventListener('click', function() {
            alert('Thank you for your feedback! We are thrilled you found it very helpful.');
        });
    }
});