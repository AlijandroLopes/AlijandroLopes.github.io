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
          setTimeout(type, 800); // Pause before deleting
          return;
        }
      }
      setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
    
    type();
  });
  

//form handeling

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);
  const xhr = new XMLHttpRequest();
  
  xhr.open(form.method, 'https://formspree.io/f/xkndaroe');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      form.reset();
      document.getElementById('status').innerHTML = 'Thanks for your submission!';
    } else {
      document.getElementById('status').innerHTML = 'Oops! There was a problem.';
    }
  };
  xhr.send(data);
});

