document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect remains unchanged
    window.addEventListener('scroll', function() {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Always animate on scroll: add and remove the "visible" class based on intersection
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);
  
    scrollElements.forEach(element => {
      observer.observe(element);
    });
  });
  
  
  // JavaScript for the "Read More" functionality in About section
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('#about .read-more-btn');
    const aboutText = document.querySelector('#about .about-text');
  
    readMoreBtn.addEventListener('click', function() {
      aboutText.classList.toggle('expanded');
      // Toggle button text
      if (aboutText.classList.contains('expanded')) {
        readMoreBtn.textContent = 'Read Less';
      } else {
        readMoreBtn.textContent = 'Read More';
      }
    });
  });
  