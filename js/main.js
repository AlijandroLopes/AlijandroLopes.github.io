document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing');
    const text = "Alijandro Lopes";
    let isDeleting = false;
    let charIndex = 0;
    let typingSpeed = 120;
    let deletingSpeed = 100;
    
    function type() {
      if (isDeleting) {
        textElement.textContent = text.substring(0, charIndex--);
        if (charIndex === -1) {
          isDeleting = false;
        }
      } else {
        textElement.textContent = text.substring(0, charIndex++);
        if (charIndex === text.length) {
          isDeleting = true;
          setTimeout(type, 1000); // Pause before deleting
          return;
        }
      }
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
    
    type();
  });
  