// Check if the code is running in Cypress
if (window.Cypress) {
    // Don't execute the code if running in Cypress
} else {
    // Execute the code only if not running in Cypress
    document.addEventListener('DOMContentLoaded', function() {
        // Create a new paragraph element
        var paragraph = document.createElement('p');
        
        // Set the text content of the paragraph
        paragraph.textContent = 'DOM load success';
        
        // Append the paragraph to the body of the HTML document
        document.body.appendChild(paragraph);
    });
}

