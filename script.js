//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    // Create a new paragraph element
    var paragraph = document.createElement('p');
    
    // Set the text content of the paragraph
    paragraph.textContent = 'DOM load success';
    
    // Append the paragraph to the body of the HTML document
    document.body.appendChild(paragraph);
});

