document.addEventListener('DOMContentLoaded', function() {
    // Text to be animated
    var text = [
      "FEEL GREAT.",
      "BODY AND MIND.",
      "Line 3",
      "Line 4"
    ];
  
    var textContainer = document.getElementById('text-container');
    var index = 0;
    var interval = 100; // Time interval between typing each line (in milliseconds)
  
    function typeText() {
      if (index < text.length) {
        // Add a line break after each line of text
        textContainer.textContent += text[index] + '\n';
        // Scroll to the bottom of the container to keep the last line visible
        textContainer.scrollTop = textContainer.scrollHeight;
        index++;
        setTimeout(typeText, interval);
      }
    }
  
    // Start typing animation
    typeText();
  });
  